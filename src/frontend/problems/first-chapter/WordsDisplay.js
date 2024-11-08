import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function WordsDisplay() {
    const [testPassed, setTestPassed] = useState(false);

    const correctFormula = (text) => {
        if (typeof text === 'undefined') {
            return 'undefined';
        }
        if (typeof text === 'string') {
            return text;
        }

    };

    const testCases = [
        { params: ["Hello"] },
      
    ];
    const testCasesCount = testCases.length;

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program JavaScript care:
                    <br />
                    se foloseste de o functie pentru a afisa un text.
                    <br />
                    Functia primeste un parametru, <strong style={{ color: '#00bfff' }}>text</strong>, care reprezinta textul.
                    <br />
                    Sa se returneze acel text.
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: Acesta este un text
                        <br />
                    </h4>
                    <h4> Date de iesire: Acesta este un text
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test correctFormula={correctFormula}
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    testCassesCount={testCasesCount}
                    returnString={true}
                    problemName="Afisare text" />
            </div>
        </>
    )

    return (
        <ProblemPage problemName="Afisare text"
            problemPoints={2}
            problemContent={problemContent}
            nextRoute="/problems/Note"
            testPassed={testPassed} />
    )
}

export default WordsDisplay