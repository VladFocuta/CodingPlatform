import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function MaxNumber() {
    const [testPassed, setTestPassed] = useState(false);

    const correctFormula = (a) => {
        if (typeof a === 'undefined') {
            return 'undefined';
        }

        let maxNumber = 0;
        while (a > 0) {
            const lastDigit = a % 10;
            if (lastDigit > maxNumber) {
                maxNumber = lastDigit;
            }
            a = Math.floor(a / 10);
        }
        return maxNumber;

    };

    const testCases = [
        { params: [98769]},
        { params: [1]},
        { params: [450100]},
        { params: [145]}
    ];
    const testCasesCount = testCases.length;


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se primeste ca parametru, numarul <strong style={{ color: '#00bfff' }}>a</strong>.<br />
                    Sa se returneze cea mai mare cifra din acel numar.<br />
                    <br />
                    Mentiuni: 1 ≤ a ≤ 1 000 000
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 173045
                        <br />
                    </h4>
                    <h4> Date de iesire: 7
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test correctFormula={correctFormula}
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    testCassesCount={testCasesCount}
                    problemName="Numar maxim" />
            </div>
        </>
    )


    return (
        <ProblemPage
            problemName="Numar maxim"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Return"
            testPassed={testPassed}
        />
    )
}

export default MaxNumber