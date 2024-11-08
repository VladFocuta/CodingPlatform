import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function Maxim() {
    const [testPassed, setTestPassed] = useState(false);

    const correctFormula = (a, b) => {
        if (typeof a === 'undefined' || typeof b === 'undefined') {
            return 'undefined';
        }
        if (a > b) {
            return a;
        } else if (a === b) {
            return a;
        } else {
            return b;
        }
    };

    const testCases = [
        { params: [0, 20] },
        { params: [101, 101] },
        { params: [555, 232] }
    ];
    const testCasesCount = testCases.length;
    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se primesc ca parametrii, doua numere <strong style={{ color: '#00bfff' }}>a</strong> si <strong style={{ color: '#00bfff' }}>b</strong>.
                    <br />

                    Sa se afiseze cel mai mare numar. In cazul in care ele sunt egale, sa se afiseze primul numar.<br />

                    <br />
                    Mentiuni: 0 ≤ a, b ≤ 1 000 000
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:  42 99
                        <br />
                    </h4>
                    <h4> Date de iesire: 99
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test correctFormula={correctFormula}
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    testCassesCount={testCasesCount}
                    problemName="Maxim" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Maxim"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Crescator"
            lecture={false}
            testPassed={testPassed}
        />
    )
}

export default Maxim
