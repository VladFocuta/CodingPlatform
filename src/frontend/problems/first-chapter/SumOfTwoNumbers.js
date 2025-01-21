import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function SumOfTwoNumbers() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [3, 3], expected: 6 },
        { params: [5, 7], expected: 12 },
        { params: [10, 20], expected: 30 },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Avand doua variabile <strong style={{ color: '#00bfff' }}>a</strong> si <strong style={{ color: '#00bfff' }}>b</strong>, sa se afle suma lor.
                    <br />
                    Numerele se citesc de la tastatura si apoi afisam suma lor.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 2 4
                        <br />
                    </h4>
                    <h4> Date de iesire: 6
                        <br />
                    </h4>
                </div> <br />


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma" />
            </div>
        </>
    )
    return (
        <ProblemPage problemName="Suma"
            problemPoints={2}
            problemContent={problemContent}
            nextRoute="/problems/Aria unui dreptunghi"
            testPassed={testPassed}
        />

    )
}

export default SumOfTwoNumbers