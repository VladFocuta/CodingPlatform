import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function OddNumbersInterval() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['20', '25'], expected: '3' },
        { params: ['404', '413'], expected: '7' },
        { params: ['20', '40'], expected: '15' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citesc de la tastatură două numere naturale x și y (x ≤ y).<br />
                    Să se determine și să se afișeze numărul valorilor din intervalul [x,y] care conțin cel puțin o cifră impară.
                   
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />404 413


                    </h4>
                    <h4> Date de iesire: <br /> 7</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numere cu cifre impare intr-un interval" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numere cu cifre impare intr-un interval"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default OddNumbersInterval