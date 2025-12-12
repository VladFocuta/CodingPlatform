import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'
function CommonDividers() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [20, 52], expected: [1, 2, 4] },
        { params: [24, 36], expected: [1, 2, 3, 4, 6, 12] },
        { params: [1, 4], expected: [1] },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citesc de la tastatură două numere naturale a și b.
                    <br />
                    Să se determine și să se afișeze, în ordine crescătoare, toți divizorii comuni ai numerelor a și b.
                    <br />
                    Divizorii vor fi afișați pe ecran, separați printr-un spațiu.<br />

                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 20 52
                        <br />
                    </h4>
                    <h4> Date de iesire: 1 2 4
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Divizori comuni" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Divizori comuni"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Suma maxima"
            testPassed={testPassed}
        />
    )
}

export default CommonDividers