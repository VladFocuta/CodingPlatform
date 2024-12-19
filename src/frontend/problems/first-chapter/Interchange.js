import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function Interchange() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [15, 9], expected: [9, 15] },
        { params: [5, 7], expected: [7, 5] },
        { params: [20, 20], expected: [20, 20] },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dau doua numere naturale <strong style={{ color: '#00bfff' }}>a</strong> si <strong style={{ color: '#00bfff' }}>b</strong>. Sa se interschimbe continutul lor.

                    <br />
                    Numerele se citesc de la tastatura si vor fi afisate dupa interschimbare.

                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 15 9
                        <br />
                    </h4>
                    <h4> Date de iesire: 9 15
                        <br />
                    </h4>
                </div> <br />


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Interschimbare" />
            </div>
        </>
    )


    return (
        <ProblemPage problemName="Interschimbare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Numarul maxim"
            testPassed={testPassed} />

    )
}

export default Interchange