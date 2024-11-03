import { useState } from 'react';
import { Editor } from '@monaco-editor/react';

function Test({ testCases, correctFormula, maxExecutionTime, testPassedSet }) {
    const [userCode, setUserCode] = useState("");
    const [output, setOutput] = useState(null);
    const [error, setError] = useState(null);

    const handleRunCode = () => {
        // Pregătește test cases cu valorile așteptate
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
                <h1>Trimite codul tau</h1>

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
