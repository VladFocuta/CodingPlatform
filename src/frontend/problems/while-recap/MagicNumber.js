import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'


function MagicNumber() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [1, 103, 999, 15, 16], expected: "Mai incearca! Mai incearca! Mai incearca! Mai incearca! Ai gasit numarul magic!" },
        { params: [0, 23, 14, 7], expected: "Mai incearca! Mai incearca! Mai incearca! Ai gasit numarul magic!" },
        { params: [1000, 6003, 70], expected: "Mai incearca! Mai incearca! Ai gasit numarul magic!" },
        { params: [8, 43], expected: "Mai incearca! Ai gasit numarul magic!" },
        { params: [1231], expected: "Ai gasit numarul magic!" },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care continua sa ceara utilizatorului sa introduca un numar pana cand suma cifrelor numarului introdus este egala cu 7. <br />

                    Daca suma este 7, afiseaza mesajul <strong style={{ color: 'Red' }}>Ai gasit numarul magic!</strong>, daca nu, sa se afiseze <strong style={{ color: 'red' }}>Mai incearca!</strong>.
                    <br />
                    Numerele se citesc de la tastatura si se pot introduce maxim 5 numere.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 1 103 999 15 16
                        <br />
                    </h4>
                    <h4> Date de iesire: <strong style={{ color: 'Red' }}>Mai incearca! Mai incearca! Mai incearca! Mai incearca Ai gasit numarul magic! </strong>
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
            nextRoute="/problems/Oglindire"
            testPassed={testPassed}
        />
    )
}

export default MagicNumber