import { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { useNavigate } from 'react-router-dom'
import { storeCode } from '../../backend/functions/storeUserCode';
import { UserAuth } from '../../backend/firebaseConfig/authProvider';
import { UserProgressData } from './contexts/userProgress';
import { updateCredits } from '../../backend/functions/handleCredits';

function Test({ testCases, testPassedSet, problemName }) {
    const [userCode, setUserCode] = useState("");
    const [output, setOutput] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [lastSubmitTime, setLastSubmitTime] = useState(null); // Timpul ultimei submisii
    const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Starea butonului
    const [submitError, setSubmitError] = useState(''); // Mesaj de eroare pentru submisie

    const { credits } = UserProgressData() || {};
    const leftCredits = credits - testCases.length; // credite ramase

    const navigate = useNavigate();
    const { user } = UserAuth();
    const userId = user?.uid;

    const codeObject = {
        userCode: userCode,
        userId: userId,
        name: user.displayName
    }

    const handleSubmitHistoryPage = () => {
        navigate('/CodeSubmitHistory', { state: { data: problemName } });
    }

    const runCode = async () => {
        if (credits >= testCases.length) {

            // Verificăm dacă au trecut 30 de secunde
            const currentTime = new Date().getTime();
            if (lastSubmitTime && currentTime - lastSubmitTime < 30000) {
                const remainingTime = 30 - Math.floor((currentTime - lastSubmitTime) / 1000);
                setSubmitError(`Trebuie să aștepți ${remainingTime} secunde înainte de a trimite din nou.`);
                return;
            }

            setSubmitError(''); // Resetăm mesajul de eroare
            setIsButtonDisabled(true); // Dezactivăm butonul
            setLoading(true);

            try {
                await storeCode(codeObject, problemName, userId);
                await updateCredits(leftCredits, userId);
                
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
                const allTestsPassed = data.results?.every(result => result.passed) || false;

                if (allTestsPassed) {
                    testPassedSet(true);
                } else {
                    testPassedSet(false);
                }

                if (response.ok) {
                    setOutput(data.results);  // Răspunsul corect
                } else {
                    setError(data.error || 'A apărut o eroare necunoscută');
                }

                setLastSubmitTime(currentTime); // Setăm timpul ultimei submisii
            } catch (error) {
                console.log('Error while running the user code', error);
            } finally {
                setIsButtonDisabled(false); // Reactivăm butonul
                setLoading(false);
            }
        } else {
            setSubmitError('Ai ramas fara credite!');
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

                {submitError && (
                    <div style={{ color: 'red', fontWeight: 'bold', marginTop: '10px' }}>
                        {submitError}
                    </div>
                )}
            </div>
            <button
                type="button"
                className="btn btn-light"
                onClick={runCode}
                disabled={isButtonDisabled} // Dezactivăm butonul dacă e în perioada de 30 de secunde
            >
                Rulare Cod
            </button>
            {loading && (
                <div className="spinner-border text-info" style={{ alignSelf: 'center' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </>
    );
}

export default Test;
