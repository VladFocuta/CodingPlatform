import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function GenMat3() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4'], expected: '2 3 4 5 \n 3 43 18 6 \n 4 46 21 7 \n 5 6 7 8' },
        { params: ['5'], expected: '2 3 4 5 6 \n 3 126 50 21 7 \n 4 182 72 24 8 \n 5 140 60 27 9 \n 6 7 8 9 10' },
        { params: ['6'], expected: '2 3 4 5 6 7 \n 3 375 143 57 24 8 \n 4 616 228 81 27 9\n 5 647 245 90 30 10 \n 6 428 174 74 33 11 \n 7 8 9 10 11 12' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Scrieți un program care citește de la tastatură un număr natural n și construiește în memorie o matrice cu n linii și n coloane, numerotate de la 1 la n, în care fiecare element aflat pe chenarul exterior al matricei este egal cu suma dintre indicele liniei și indicele coloanei pe care se află, iar fiecare dintre celelalte elemente este egal cu suma celor trei “vecini” situați pe coloana următoare.<br />
                    Programul citește de la tastatură numărul n.<br />
                    Programul afișează pe ecran matricea construită, câte o linie a matricei pe câte o linie a ecranului, elementele fiecărei linii fiind separate prin câte un spațiu.
                    <br /><br />

                    Mențiuni:<br />
                    2 ≤ n ≤ 15<br />
                    două elemente din matrice se numesc vecine dacă se găsesc alături pe linie, coloană sau diagonală;<br />
                    chenarul exterior al unei matrice este format din prima linie, ultima linie, prima coloană și ultima coloană;
                    <br /><br />

                    Exemplu: <br />

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />4
                    </h4>
                    <h4> Date de iesire: <br />2 3 4 5 <br />3 43 18 6 <br /> 4 46 21 7 <br />5 6 7 8</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Generare matrice 3" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Generare matrice 3"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Generare matrice 4"
            testPassed={testPassed}
        />
    )
}

export default GenMat3