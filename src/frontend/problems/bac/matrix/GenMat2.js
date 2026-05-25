import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function GenMat2() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4'], expected: '2 3 4 5 \n 3 9 12 6 \n 4 24 27 7 \n 5 6 7 8' },
        { params: ['5'], expected: '2 3 4 5 6 \n 3 9 12 15 7 \n 4 24 36 34 8 \n 5 64 94 78 9 \n 6 7 8 9 10' },
        { params: ['7'], expected: '2 3 4 5 6 7 8 \n 3 9 12 15 18 21 9 \n 4 24 36 45 54 48 10\n 5 64 105 135 147 112 11 \n 6 174 304 387 394 270 12 \n 7 484 865 1085 1051 676 13 \n 8 9 10 11 12 13 14' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Scrieţi un program care citeşte de la tastatură un număr natural n şi construieşte în memorie o matrice cu n linii şi n coloane, numerotate de la 1 la n, în care fiecare element aflat pe chenarul exterior al matricei este egal cu suma dintre indicele liniei şi indicele coloanei pe care se află, iar fiecare dintre celelalte elemente este egal cu suma celor trei “vecini” situaţi în matrice pe linia anterioară.<br />
                    Programul citește de la tastatură numărul n.<br />
                    Programul afișează pe ecran matricea construită, câte o linie a matricei pe câte o linie a ecranului, elementele fiecărei linii fiind separate prin câte un spaţiu.
                    <br /><br />

                    Mențiuni:<br />
                    2 ≤ n ≤ 15<br />
                    două elemente din matrice se numesc vecine dacă se găsesc alături pe linie, coloană sau diagonală;<br />
                    chenarul exterior al unei matrice este format din prima linie, ultima linie, prima coloană şi ultima coloană;
                    <br /><br />

                    Exemplu: <br />

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />4
                    </h4>
                    <h4> Date de iesire: <br />2 3 4 5 <br />3 9 12 6  <br /> 4 24 27 7 <br />5 6 7 8</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Generare matrice 2" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Generare matrice 2"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Generare matrice 3"
            testPassed={testPassed}
        />
    )
}

export default GenMat2