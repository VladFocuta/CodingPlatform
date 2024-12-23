import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'


function MagicNumber() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [1], expected: ["Mai incearca!"] },
        { params: [10321], expected: ["Ai gasit numarul magic!"] },
        { params: [16], expected: ["Ai gasit numarul magic!"] },
        { params: [15], expected: ["Mai incearca!"] },
        { params: [11920], expected: ["Mai incearca!"] },
        { params: [7], expected: ["Ai gasit numarul magic!"] },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care continua sa ceara utilizatorului sa introduca un numar pana cand suma cifrelor numarului introdus este egala cu 7. <br />

                    Daca suma este 7, afiseaza mesajul <strong style={{color: 'Red'}}>Ai găsit numărul magic!</strong>, daca nu, sa se afiseze <strong style={{color: 'red'}}>Mai incearca!</strong>.
                    <br />
                    Numerele se citesc de la tastatura si se pot introduce maxim 5 numere.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 5
                        <br />
                    </h4>
                    <h4> Date de iesire: 120
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numarul magic" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numarul magic"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/MaxSum"
            testPassed={testPassed}
        />
    )
}

export default MagicNumber