import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function StrCopy() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['Programare in C++'], expected: 'Programare in C++' },
        { params: ['Invatam siruri de caractere'], expected: 'Invatam siruri de caractere' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care citeste un sir de caractere si creeaza o copie a acestuia folosind strcpy.<br />
                    Apoi, afiseaza copia textului.
                    
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: Programare in C++

                    </h4>
                    <h4> Date de iesire: Programare in C++</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Copia unui sir de caractere" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Copia unui sir de caractere"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Copia unui sir de caractere"
            testPassed={testPassed}
        />
    )
}

export default StrCopy