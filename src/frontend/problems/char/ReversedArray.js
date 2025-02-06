import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function ReversedArray() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['algoritm'], expected: 'mtirogla' },
        { params: ['portocale si banane'], expected: 'enanab is elacotrop' },
        { params: ['Manacare si Marmelada'], expected: 'adalemraM is eracanaM' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Sa se creeze o functie care primeste ca parametru un sir de caractere.<br />
                    Sa se inverseze sirul de caractere.
                    <br />
                    In main() se va citi textul de la tastatura.<br />
                    Textul va contine litere mici si mari.<br />
                    Sa se afiseze textul inversat.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: algoritm

                    </h4>
                    <h4> Date de iesire: mtirogla</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Inversarea unui sir de caractere" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Inversarea unui sir de caractere"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Copia unui sir de caractere"
            testPassed={testPassed}
        />
    )
}

export default ReversedArray