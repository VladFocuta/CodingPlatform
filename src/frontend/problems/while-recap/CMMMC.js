import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function CMMMC() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [12, 18], expected: [36] },
        { params: [18, 48], expected: [144] },
        { params: [10, 4], expected: [20] },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care calculeaza cel mai mic multiplu comun (CMMMC) a doua numere.
                    <br />
                    Numerele se citesc de la tastatura.
                    <br />
                    Sa se afiseze cel mai mic multiplu comun.<br />

                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 12 18
                        <br />
                    </h4>
                    <h4> Date de iesire: 36
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="CMMMC" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="CMMMC"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Suma maxima"
            testPassed={testPassed}
        />
    )
}

export default CMMMC