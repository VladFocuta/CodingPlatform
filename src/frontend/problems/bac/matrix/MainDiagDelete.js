import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'


function MainDiagDelete() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4','20 30 80 52 71 93 64 51 62 81 55 49 90 65 32 22'], expected: '30 80 52 \n 71 64 51 \n 62 81 49 \n 90 65 32' },
        { params: ['5','20 30 80 52 0 71 93 64 51 1 62 81 55 49 2 90 65 32 22 3 4 5 6 7 8 '], expected: '30 80 52 0 \n 71 64 51 1 \n 62 81 49 2 \n 90 65 32 3 \n 4 5 6 7' },
        { params: ['2','1 2 3 4'], expected: '2 \n 3' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Suprafața unei scene a fost împărțită în zone dispuse ca elementele unui tablou bidimensional cu număr
                    egal de linii și coloane. Fiecare instrument are alocată o zonă și este identificat printr-un număr natural.<br />
                    Dirijorul hotărăște eliminarea tuturor instrumentelor plasate pe diagonala principală a tabloului și
                    rearanjarea celor păstrate, prin deplasarea unora dintre acestea cu câte o poziție spre stânga, astfel încât
                    să nu existe zone intermediare libere, ca în exemplu.<br />
                    Scrieţi un program C++ care citeşte de la tastatură numere naturale din intervalul [2,10<sup>2</sup>], și anume n şi
                    elementele unui tablou bidimensional cu n linii şi n coloane, reprezentând numerele de identificare ale
                    instrumentelor, în ordinea plasării lor inițiale pe scenă.<br />
                    Programul modifică apoi tabloul în memorie
                    corespunzător hotărârii dirijorului și afişează pe ecran tabloul obținut, fiecare linie a tabloului pe câte o linie
                    a ecranului, elementele de pe aceeași linie fiind separate prin câte un spațiu.

                    <br /><br />
                    Exemplu: <br />


                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />4 <br />20 30 80 52 <br />71 93 64 51 <br />62 81 55 49<br />90 65 32 22
                    </h4>
                    <h4> Date de iesire: <br />30 80 52<br />71 64 51<br />62 81 49<br />90 65 32</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Eliminarea diagonalei principale" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Eliminarea diagonalei principale"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Multiplii pe diagonala principala"
            testPassed={testPassed}
        />
    )
}

export default MainDiagDelete