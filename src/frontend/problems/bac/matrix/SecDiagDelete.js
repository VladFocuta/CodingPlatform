import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function SecDiagDelete() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '20 25 20 26 36 16 48 52 64 72 35 90 85 36 12 25'], expected: '20 25 20 \n 36 16 52 \n 64 35 90 \n 36 12 25' },
        { params: ['5', '20 25 20 26 100 36 16 48 52 200 64 72 35 90 300 85 36 12 25 400 600 700 800 900 999'], expected: '20 25 20 26 \n 36 16 48 200 \n 64 72 90 300 \n 85 12 25 400 \n 700 800 900 999' },
        { params: ['2', '20 25 36 16'], expected: '20 \n 16' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Terenul alocat unui târg de jucării artizanale a fost împărțit în zone dispuse ca elementele unui tablou
                    bidimensional cu număr egal de linii și coloane.<br />Pentru a putea fi testate de copii, fiecare jucărie are alocată
                    o zonă și este identificată printr-un număr natural.<br />Organizatorii au hotărât eliminarea tuturor jucăriilor
                    plasate pe diagonala secundară a tabloului și rearanjarea celor păstrate, prin deplasarea unora dintre
                    acestea cu câte o poziție spre stânga, astfel încât să nu existe zone intermediare libere, ca în exemplu.<br />
                    Scrieţi un program C++ care citeşte de la tastatură numere naturale din intervalul [2,10<sup>2</sup>], și anume n şi
                    elementele unui tablou bidimensional cu n linii şi n coloane, reprezentând numerele de identificare ale
                    jucăriilor, în ordinea plasării lor inițiale pe teren.<br />Programul modifică apoi tabloul în memorie corespunzător
                    hotărârii organizatorilor și afişează pe ecran tabloul obținut, fiecare linie a tabloului pe câte o linie a ecranului,
                    elementele de pe aceeași linie fiind separate prin câte un spațiu.


                    <br /><br />
                    Exemplu: <br />


                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />4<br /> 20 25 20 26<br />36 16 48 52<br />64 72 35 90<br />85 36 12 25

                    </h4>
                    <h4> Date de iesire: <br /> 20 25 20<br />36 16 52 <br />64 35 90<br />36 12 25  </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Eliminarea diagonalei secundare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Eliminarea diagonalei secundare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default SecDiagDelete