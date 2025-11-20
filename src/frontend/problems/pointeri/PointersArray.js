import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function PointersArray() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '19 20 33 4 15'], expected: '19 20 33 4 15' },
        { params: ['1', '20'], expected: '20' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care folosește un pointer p pentru a afișa toate elementele unui vector.<br />
                    Lungimea și elementele vectorului se citesc de la tastatură.<br />
                    <br /><br />

                    Exemplu:

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 5<br /> 19 20 33 4 15
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />
                        19 20 33 4 15
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Pointeri si tablouri" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Pointeri si tablouri"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Suma elementelor cu pointer"
            testPassed={testPassed}
        />
    )
}

export default PointersArray