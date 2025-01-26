import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Fibonacci() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7'], expected: '0 1 1 2 3 5 8' },
        { params: ['10'], expected: '0 1 1 2 3 5 8 13 21 34' },
        { params: ['1'], expected: '0' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da un numar intreg N (1 ≤ N ≤ 50). Scrie un program care sa genereze si sa afiseze primii N termeni ai sirului lui Fibonacci.<br />

                    Sirul lui Fibonacci incepe cu valorile 0 si 1, iar fiecare termen ulterior este suma celor doua termene precedente.<br />
                    Pe prima linie se citeste un numar intreg N, numarul de termeni din sirul lui Fibonacci care trebuie generati.
                    Programul trebuie sa afiseze termenii sirului pe o singura linie, separati prin spatii.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 7  
                    </h4>
                    <h4> Date de iesire: 0 1 1 2 3 5 8
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Sirul lui Fibonacci" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Sirul lui Fibonacci"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default Fibonacci