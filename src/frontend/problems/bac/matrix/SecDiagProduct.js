import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function SecDiagProduct() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '6 3 85 13 15 33 1 9 7 11 19 2 4 5 0 2 5 25 3 1 1 99 56 34 76'], expected: '4' },
        { params: ['4', '3 4 90 10 25 2 7 9 18 3 10 4 3 7 20 3'], expected: '1' },
        { params: ['2', '3 5 5 3'], expected: 'NU EXISTA' },
        { params: ['3', '3 5 6 5 3 10 2 4 11'], expected: '6' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se consideră un tablou bidimensional cu n linii şi n coloane ce conţine numere naturale cu cel mult două cifre fiecare.<br />
                    Să se determine ultima cifră a produsului elementelor de pe diagonala secundară cu proprietatea că sunt minime pe coloanele lor.<br />
                    Pe prima linie se citeşte numărul n, iar pe următoarele n linii câte n numere naturale separate prin spaţii, reprezentând elementele tabloului.<br />
                    Se va afişa un singur număr, reprezentând valoarea cerută.<br /><br />
                    Mențiuni:<br />
                    2 ≤ n ≤ 30<br />
                    dacă în matrice nu există asemenea elemente, se va afișa mesajul <strong style={{ color: 'red' }}>NU EXISTA</strong>
                    <br /><br />
                    Exemplu: <br />


                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 4 <br />2 4 3 5 6<br />8 0 9 8 7<br />2 6 9 0 5<br />6 1 3 6 9<br />7 3 9 4 2
                    </h4>
                    <h4> Date de iesire: <br />2 4 3 6 6<br />8 0 9 1 7<br />2 6 9 3 5<br />5 8 0 6 9 <br /> 7 3 9 4 2</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Produs pe diagonala secundara" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Produs pe diagonala secundara"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Produs maxim"
            testPassed={testPassed}
        />
    )
}

export default SecDiagProduct