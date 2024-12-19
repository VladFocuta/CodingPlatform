import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function Max() {
    const [testPassed, setTestPassed] = useState(false);

   
    const testCases = [
        { params: [15, 15], expected: ["SUNT EGALE"] },
        { params: [5, 7], expected: [7] },
        { params: [32523, 1200], expected: [32523] },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dau doua numere naturale <strong style={{ color: '#00bfff' }}>a</strong> si <strong style={{ color: '#00bfff' }}>b</strong>. 

                    <br />
                    Numerele se citesc de la tastatura si apoi se va afisa cel mai mare numar.
                    <br />
                    Daca numerele sunt egale, sa se afiseze <strong style={{ color: 'red' }}>SUNT EGALE</strong>.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 559 1231
                        <br />
                    </h4>
                    <h4> Date de iesire: 1231
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numarul maxim" />
            </div>
        </>
    )

    return (
        <ProblemPage problemName="Numarul maxim"
            problemPoints={2}
            problemContent={problemContent}
            nextRoute="/problems/Note"
            testPassed={testPassed} />
    )
}

export default Max