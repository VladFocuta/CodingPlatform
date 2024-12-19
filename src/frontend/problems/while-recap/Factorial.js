import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'


function Factorial() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [0], expected: [1] },
        { params: [1], expected: [1] },
        { params: [16], expected: [2004189184] }
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care calculeaza factorialul unui numar intreg pozitiv n.
                    <br />
                    Numarul se citeste de la tastatura.
                    <br />
                    Sa se afiseze factorialul lui n.<br /><br />
                    Mentiuni:<br />
                    n &lt;= 16
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 5
                        <br />
                    </h4>
                    <h4> Date de iesire: 120
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Factorialul unui numar" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Factorialul unui numar"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/MaxSum"
            testPassed={testPassed}
        />
    )
}

export default Factorial
