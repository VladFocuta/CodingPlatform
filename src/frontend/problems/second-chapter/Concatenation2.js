import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function Concatenation2() {
    const [testPassed, setTestPassed] = useState(false);

    const correctFormula = (a, x) => {
        if (typeof a === 'undefined' || typeof x === 'undefined') {
            return 'undefined';
        }
        const xCopy = x;
        while (x > 0) {
            a *= 10;
            x = Math.floor(x / 10);
        }
        a = a + xCopy;
        return a;
    };

    const testCases = [
        { params: [1, 10] },
        { params: [122, 33] },
        { params: [10, 99] },
    ];
    const testCasesCount = testCases.length;

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Primim 2 parametri, <strong style={{ color: '#00bfff' }}>a</strong> si <strong style={{ color: '#00bfff' }}>x</strong>.
                    <br />
                    Sa se adauge <strong style={{ color: '#00bfff' }}>x</strong> la <strong style={{ color: '#00bfff' }}>a</strong> si sa se returneze noul numar.<br />
                    <br />
                    Se garanteaza ca <strong style={{ color: '#00bfff' }}>x</strong> este format din 2 cifre si <strong style={{ color: '#00bfff' }}>a</strong> &lt; 0.
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 1 44
                        <br />
                    </h4>
                    <h4> Date de iesire: 144
                    </h4>
                </div> <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 153 91
                        <br />
                    </h4>
                    <h4> Date de iesire: 15391
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test correctFormula={correctFormula}
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    testCassesCount={testCasesCount}
                    problemName="Concatenare 2" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Concatenare 2"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Numere repetate"
            testPassed={testPassed}
        />
    )
}

export default Concatenation2