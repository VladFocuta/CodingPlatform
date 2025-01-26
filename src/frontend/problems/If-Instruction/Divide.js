import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Divide() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [15], expected: 'Numarul este divizibil' },
        { params: [3], expected: 'Nu este divizibil' },
    ];
   
    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieti un program care verifica daca un numar introdus este divizibil cu 3 și 5.
                    <br />
                    Daca da, afisati <strong style={{ color: '#00bfff' }}>Numarul este divizibil</strong>, altfel afișați <strong style={{ color: '#00bfff' }}>Nu este divizibil</strong>.
                    <br />
                    Numarul este natural si se citeste de la tastatura.
                    <br /><br />
                  
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:  15
                        <br />
                    </h4>
                    <h4> Date de iesire: <strong style={{ color: 'red' }}>Numarul este divizibil</strong>
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test 
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Divizibilitate"/>
            </div>
        </>
    )

    return (
        <ProblemPage
            problemName="Divizibilitate"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Media notelor"
            lecture={false}
            testPassed={testPassed}
        />
    )
}

export default Divide