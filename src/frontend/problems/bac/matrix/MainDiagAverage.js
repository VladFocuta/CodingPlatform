import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function MainDiagAverage() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '-1 2 4 5 0 6 3 1 2 4 2 0 3 -5 1 -3'], expected: '2.500' },
        { params: ['4', '-1 2 4 5 0 6 3 1 -100 0 2 0 -99 -5 -1 -3'], expected: 'NU EXISTA' },
        { params: ['2', '1 2 100 4'], expected: '100.000' },
        { params: ['6', '-3 6 2 9 4 2 5 6 3 1 5 6 9 0 7 0 1 9 -3 6 9 -3 3 3 9 8 7 6 5 4 0 -3 -4 -5 -6 3'], expected: '7.375' },
//inca un test
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se consideră un tablou bidimensional cu n linii şi n coloane ce conţine numere intregi din intervalul [-100,100].<br />
                    Să se determine media aritmetică a elementelor strict pozitive din matrice, care sunt situate sub diagonala principală.<br />
                    Pe prima linie se citeşte numărul n, iar pe următoarele n linii câte n numere naturale separate prin spaţii, reprezentând elementele tabloului.<br />
                    Se va afişa un singur număr, reprezentând valoarea cerută.
                    <br /><br />

                    Mențiuni:<br />
                    2 ≤ n ≤ 20;<br />
                    dacă în matrice nu există elemente strict pozitive, situate sub diagonala principală, se va afișa mesajul <strong style={{ color: 'red' }}>NU EXISTA</strong>;<br />
                    media se va afişa cu exact trei zecimale, fără rotunjire;
                    <br /><br />

                    Exemplu: <br />

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />4<br />-1 2 4 5<br />0 6 3 1<br />2 4 2 0<br />3 -5 1 -3
                    </h4>
                    <h4> Date de iesire: <br />2.500</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Medie aritmetica sub diagonala principala" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Medie aritmetica sub diagonala principala"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default MainDiagAverage