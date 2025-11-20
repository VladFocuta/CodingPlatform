import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function PintersSum() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '19 20 33 4 15'], expected: '91' },
        { params: ['1', '20'], expected: '20' },
        { params: ['8', '99 56 32 1 0 63 100 1023'], expected: '1374' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Folosind pointeri și un vector, calculează suma celor n elemente introduse de la tastatură.<br />
                    Lungimea și elementele vectorului se citesc de la tastatură.<br />
                    <br /><br />

                    Exemplu:

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 8<br /> 99 56 32 1 0 63 100 1023
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />
                        1374
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma elementelor cu pointer" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Suma elementelor cu pointer"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Valoarea maxima cu pointer"
            testPassed={testPassed}
        />
    )
}

export default PintersSum