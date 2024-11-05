import { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { useNavigate } from 'react-router-dom'
import { storeCode } from '../../backend/functions/storeUserCode';
import { UserAuth } from '../../backend/firebaseConfig/authProvider';


function Test({ testCases, correctFormula, maxExecutionTime, testPassedSet, problemName }) {
    const [userCode, setUserCode] = useState("");
    const [codeSubmited, setCodeSubmited] = useState(false);
    const [output, setOutput] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user } = UserAuth();
    const userId = user?.uid;

    const handleSubmitHistoryPage = () => {
        navigate('/CodeSubmitHistory', { state: { data: problemName, codeSubmited } });
    }

    const handleRunCode = async () => {
        setCodeSubmited(true);
        const codeObject = {
            userCode: userCode,
            userId: userId,
            name: user.displayName
        }
        // Pregătește test cases cu valorile așteptate
        await storeCode(codeObject, problemName)
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
                if (allTestsPassed) {
                    testPassedSet(true);
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
