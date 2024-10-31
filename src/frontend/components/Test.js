import { useState } from 'react';
import { Editor } from '@monaco-editor/react';

function Test({ testCases, correctFormula, testPassedSet, testCassesCount, returnString }) {
    const [userCode, setUserCode] = useState(null);
    const [output, setOutput] = useState(null);
    const [error, setError] = useState(null);
    const [testingResult, setTestingResult] = useState(false);

    const handleEditorChange = (value) => {
        setUserCode(value);
    };

    const arraysEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;
        return arr1.every((value, index) => value === arr2[index]);
    };

    const handleRunCode = () => {
        if (userCode !== null) {
            setTestingResult(true);
            try {
                // eslint-disable-next-line
                const userFunction = new Function(`
                    ${userCode}
                    return ${userCode.match(/function\s+(\w+)/)[1]};
                `)();

                let localCountTestsPassed = 0;

                const results = testCases.map((testCase, index) => {
                    const userResult = userFunction(...testCase.params);

                    if (returnString) {
                        const isPassed = typeof userResult === 'string';
                        if (isPassed) localCountTestsPassed += 1;
                        return `Test ${index + 1}: ${isPassed ? 'Correct' : 'Incorrect'}`;
                    } else {
                        const correctResult = correctFormula(...testCase.params);
                        const isPassed = Array.isArray(userResult) && Array.isArray(correctResult)
                            ? arraysEqual(userResult, correctResult)
                            : userResult === correctResult;

                        if (isPassed) localCountTestsPassed += 1;
                        
                        return `Test ${index + 1}: ${isPassed ? 'Correct' : 'Incorrect' }`;
                    }
                });

                if (localCountTestsPassed === testCassesCount) {
                    testPassedSet(true);
                } else {
                    testPassedSet(false);
                }

                setOutput(results.join('\n'));
                setError('');
            } catch (error) {
                setError(`Error in user's code: ${error.message}`);
                setOutput('');
            } finally {
                setTestingResult(false);
            }
        }
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '5px', alignItems: 'flex-start' }}>
                <h1>Trimite codul tau</h1>
                {testingResult && (
                    <div style={{ width: '100%', backgroundColor: 'green', marginBottom: '10px' }}>
                        <div className='test-loading-line' />
                    </div>
                )}

                <div style={{ height: '500px', width: '100%' }}>
                    <Editor
                        height="100%"
                        defaultLanguage="javascript"
                        theme="vs-dark"
                        value={userCode}
                        onChange={handleEditorChange}
                        options={{
                            minimap: { enabled: false },
                        }}
                    />
                </div>

                {error && <strong style={{ color: 'red', fontSize: '18px', fontWeight: 'bold' }}>{error}</strong>}
                {output && <pre style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>{output}</pre>}
            </div>
            <button type="button" className="btn btn-light" onClick={handleRunCode}>Rulare Cod</button>
        </>
    );
}

export default Test;
