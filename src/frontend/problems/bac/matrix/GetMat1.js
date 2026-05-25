import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function GetMat1() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '3'], expected: '2 4 6 \n 8 12 14 \n 16 18 22 \n 24 26 28 \n 32 34 36' },
        { params: ['4', '3'], expected: '2 4 6 \n 8 12 14 \n 16 18 22 \n 24 26 28' },
        { params: ['2', '2'], expected: '2 4 \n 6 8' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Scrieţi un program care citește de la tastatură două numere naturale, m și n (2≤m≤20, 2≤n≤20), și construiește în memorie un tablou bidimensional A, cu m linii și n coloane, astfel încât parcurgându-l linie cu linie, de sus în jos, și fiecare linie de la stânga la dreapta, să se obțină șirul primelor n·m numere naturale, pare, care NU sunt divizibile cu 5, ordonat strict crescător.<br />
                    Programul afişează pe ecran tabloul obținut, fiecare linie a tabloului pe câte o linie a ecranului, elementele de pe aceeași linie fiind separate prin câte un spațiu.<br />
                    Programul citește de la tastatură numerele m și n.<br />
                    Programul afișează pe ecran tabloul construit, câte o linie a matricei pe câte o linie a ecranului, elementele fiecărei linii fiind separate prin câte un spaţiu.

                    <br /><br />

                    Mențiuni:<br />
                    2 ≤ m,n ≤ 20
                    <br /><br />

                    Exemplu: <br />

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 3
                    </h4>
                    <h4> Date de iesire: <br />2 4 6<br />8 12 14 <br /> 16 18 22<br />24 26 28<br />32 34 36</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Generare matrice 1" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Generare matrice 1"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Generare matrice 2"
            testPassed={testPassed}
        />
    )
}

export default GetMat1