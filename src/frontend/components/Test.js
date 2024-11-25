import { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { useNavigate } from 'react-router-dom'
import { storeCode } from '../../backend/functions/storeUserCode';
import { UserAuth } from '../../backend/firebaseConfig/authProvider';


function Test({ testCases, correctFormula, maxExecutionTime, testPassedSet, problemName }) {
    const [userCode, setUserCode] = useState("");
    const [output, setOutput] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user } = UserAuth();
    const userId = user?.uid;
    const [timeExceeded, setTimeExceeded] = useState("")


    const handleSubmitHistoryPage = () => {
        navigate('/CodeSubmitHistory', { state: { data: problemName } });
    }


    function measurePerformance(func, args, iterations = 10000) {
        const start = performance.now(); // Pornire cronometru
        for (let i = 0; i < iterations; i++) {
            func(...args); // Rulează funcția cu argumentele date
        }
        const end = performance.now(); // Oprire cronometru
        return (end - start) / iterations; // Timp mediu pe execuție
    }

    const handleRunCode = async () => {

        const codeObject = {
            userCode: userCode,
            userId: userId,
            name: user.displayName
        }

        // eslint-disable-next-line
        const userFunction = new Function(`
            ${userCode}
            return ${userCode.match(/function\s+(\w+)/)[1]};
        `)();

        const averageTimeUserCode = testCases.reduce((totalTime, testCase) => {
            return totalTime + measurePerformance(userFunction, testCase.params);
        }, 0) / testCases.length;

        const averageTimeCorrectFormula = testCases.reduce((totalTime, testCase) => {
            return totalTime + measurePerformance(correctFormula, testCase.params);
        }, 0) / testCases.length;

        console.log(`User Execution Time: ${averageTimeUserCode.toFixed(6)} ms`);
        console.log(`Correct Formula Execution Time: ${averageTimeCorrectFormula.toFixed(6)} ms`);

        // Pregătește test cases cu valorile așteptate
        await storeCode(codeObject, problemName, userId)
        const preparedTestCases = testCases.map(testCase => ({
            ...testCase,
            expected: correctFormula(...testCase.params), // Folosește correctFormula pentru a obține rezultatul așteptat

        }));

        // Inițializează un nou worker
        const worker = new Worker(new URL('./worker.js', import.meta.url));

        worker.onmessage = (e) => {

            if (e.data.error) {
                setError(e.data.error);
                setOutput(null);
                testPassedSet(false);
            } else {
                setError(null);
                setOutput(e.data.results);
                const allTestsPassed = e.data.results.every(result => result.result === 'Corect');

                //   if (allTestsPassed && timeExceeded.length <= 0) {
                //     testPassedSet(true);
                //} else {
                //  testPassedSet(false);
                //}

                if (averageTimeUserCode > 10 * averageTimeCorrectFormula && !allTestsPassed) { // timp lung si nu a trecut testele
                    setTimeExceeded("Limita de timp depasita.")
                    testPassedSet(false);
                    console.log("User function is significantly slower and didnt pass the tests.");
                } else if (averageTimeUserCode > 10 * averageTimeCorrectFormula && allTestsPassed) { // timp lung si a trecut testele
                    testPassedSet(false);
                    setTimeExceeded("Limita de timp depasita.");
                    console.log("User function is significantly slower and passed the tests.");
                } else if (averageTimeUserCode < 10 * averageTimeCorrectFormula && allTestsPassed) { // timp scurt si a trecut si testele
                    testPassedSet(true);
                    setTimeExceeded("");
                } else if (averageTimeUserCode < 10 * averageTimeCorrectFormula && !allTestsPassed) {
                    setTimeExceeded("");
                }

            }
            worker.terminate(); // Termină worker-ul pentru a elibera resursele
        };

        // Trimite codul utilizatorului și testele către worker
        worker.postMessage({
            code: userCode,
            testCases: preparedTestCases, // Trimite test cases cu expected
            maxExecutionTime: maxExecutionTime || 2000
        });
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '5px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <h1>Trimite codul tau</h1>
                    <button onClick={handleSubmitHistoryPage} className="btn btn-light" style={{ marginBottom: '10px' }} >Istoric</button>
                </div>


                <div style={{ height: '500px', width: '100%' }}>
                    <Editor
                        height="100%"
                        defaultLanguage="javascript"
                        theme="vs-dark"
                        value={userCode}
                        onChange={value => setUserCode(value)}
                        options={{
                            minimap: { enabled: false },
                        }}
                    />
                </div>

                {error && <strong style={{ color: 'red', fontSize: '18px', fontWeight: 'bold' }}>{error}</strong>}
                {timeExceeded && <strong style={{ color: 'red', fontSize: '18px', fontWeight: 'bold' }}>{timeExceeded}</strong>}
                {output && (
                    <ul>
                        {output.map((result, index) => (
                            <li key={index} style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
                                Test {result.testCase}: {result.result}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button type="button" className="btn btn-light" onClick={handleRunCode}>Rulare Cod</button>


        </>
    );
}

export default Test;