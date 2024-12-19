import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function CMMD() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [48, 18], expected: [6] },
        { params: [1, 1], expected: [1] },
        { params: [4, 5], expected: [1] },
        { params: [146, 1046], expected: [2] },
        { params: [12, 21], expected: [3] }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care calculeaza cel mai mare divizor comun (CMMD) a doua numere.
                    <br />
                    Numerele se citesc de la tastatura.
                    <br />
                    Sa se afiseze cel mai mare divizor comun.<br />

                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 48 18
                        <br />
                    </h4>
                    <h4> Date de iesire: 6
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="CMMD" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="CMMD"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/MaxSum"
            testPassed={testPassed}
        />
    )
}

export default CMMD