import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function SumOfTwoNumbers() {
    const [testPassed, setTestPassed] = useState(false);

    const correctFormula = (a, b) => {
        if (typeof a === 'undefined' || typeof b === 'undefined') {
            return 'undefined';
        }
        return a + b;
    };

    const testCases = [
        { params: [2, 3] },
        { params: [4, 5] },
        { params: [6, 7] }
    ];
    const testCasesCount = testCases.length;
   

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program JavaScript care:
                    <br />
                    se foloseste de o functie pentru a afisa suma a doua numere.
                    <br />
                    Functia primeste 2 parametri, <strong style={{ color: '#00bfff' }}>a</strong> si <strong style={{ color: '#00bfff' }}>b</strong>, care reprezinta cele doua numere.
                    <br />
                    Sa se returneze suma a celor doua numere.
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 2 4
                        <br />
                    </h4>
                    <h4> Date de iesire: 6
                        <br />
                    </h4>
                </div> <br />
                Trimite functia completa ca in exemplul din lectia despre functii. <br />
               
            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test correctFormula={correctFormula}
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    testCassesCount={testCasesCount} />
            </div>
        </>
    )
    return (
        <ProblemPage problemName="Adunarea a două numere"
            problemPoints={2}
            problemContent={problemContent}
            nextRoute="/WordsDisplay"
            testPassed={testPassed} />

    )
}

export default SumOfTwoNumbers