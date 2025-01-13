import { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { useNavigate } from 'react-router-dom'
import { storeCode } from '../../backend/functions/storeUserCode';
import { UserAuth } from '../../backend/firebaseConfig/authProvider';


function Test({ testCases, testPassedSet, problemName }) {
    const [userCode, setUserCode] = useState("");
    const [output, setOutput] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user } = UserAuth();
    const userId = user?.uid;
    const [loading, setLoading] = useState(false);

    const codeObject = {
        userCode: userCode,
        userId: userId,
        name: user.displayName
    }
 
    const handleSubmitHistoryPage = () => {
        navigate('/CodeSubmitHistory', { state: { data: problemName } });
    }


    const runCode = async () => {

        setLoading(true);
        try {
            await storeCode(codeObject, problemName, userId);
            const response = await fetch('/.netlify/functions/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userCode: userCode,
                    testCases: testCases,
                }),
            });

            const data = await response.json();
            //const allTestsPassed = data.results.every(result => result.result === 'Corect');
              const allTestsPassed = data.results.every(result => result.passed);

            if (allTestsPassed) {
                testPassedSet(true)
            } else {
                testPassedSet(false);
            }

            if (response.ok) {
                setOutput(data.results);  // Răspunsul corect
            } else {
                setError(data.error || 'A apărut o eroare necunoscută');
            }
        } catch (error) {
            console.log('Error while running the user code', error);
        } finally {
            setLoading(false);
        }

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
                        defaultLanguage="cpp"
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
                                Test {index + 1}:
                                <br />
                                <strong>Status:</strong> {result.passed ? 'Corect' : 'Incorect'}
                                <br />
                                <strong>Output:</strong> {result.output || 'N/A'}
                                <br />
                                <strong>Expected:</strong> {Array.isArray(result.expected) ? result.expected.join(' ') : result.expected}
                            </li>
                        ))}
                    </ul>
                )}
                {/**  {output && (
                    <ul>
                        {output.map((result, index) => (
                            <li key={index} style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
                                Test {result.testCase}: {result.result}
                            </li>
                        ))}
                    </ul>
                )}*/}

            </div>
            <button type="button" className="btn btn-light" onClick={runCode}>Rulare Cod</button>
            {loading && (
                <div className="spinner-border text-info" style={{ alignSelf: 'center' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}



        </>
    );
}

export default Test;