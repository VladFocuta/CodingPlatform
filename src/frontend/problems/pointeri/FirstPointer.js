import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function FirstPointer() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['25'], expected: 'Valoarea lui x folosind pointerul este: 25' },
        { params: ['0'], expected: 'Valoarea lui x folosind pointerul este: 0' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care:<br />
                    Citește un număr n de la tastatură.<br />
                    Declară un pointer p care să pointeze la n.<br />
                    Afișează valoarea lui n folosind pointerul, ca în exemplul de mai jos.
                    <br /><br />

                    Exemplu:

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 25
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />
                        <strong style={{ color: 'red' }}>Valoarea lui x folosind pointerul este: </strong> 25
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Primul Pointer" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Primul Pointer"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Interschimbare cu pointeri"
            testPassed={testPassed}
        />
    )
}

export default FirstPointer