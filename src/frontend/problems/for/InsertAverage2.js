import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function InsertAverage2() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6', '7 3 4 4 6 4'], expected: '7 3 4 4 6 4 \n 7 5 3 4 4 5 6 5 4 \n 7 6 5 4 3 4 4 5 6 5 4' },
        { params: ['3', '2 2 2'], expected: '2 2 2' },
        { params: ['8', '1 3 4 6 5 7 8 0'], expected: '1 3 4 6 5 7 8 0 \n 1 2 3 4 5 6 5 6 7 8 4 0 \n 1 2 3 4 5 6 5 6 7 8 6 4 2 0 \n 1 2 3 4 5 6 5 6 7 8 7 6 5 4 3 2 1 0' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dau n numere întregi. Să se insereze între oricare două numere de aceeași paritate media lor aritmetică. Algoritmul se va relua în mod repetat până când nu se mai poate adăuga șirului niciun nou element.<br />
                    Programul citește de la tastatură numărul n, iar apoi n numere întregi, separate prin spații.<br />
                    Programul va afișa pe ecran pe câte o linie nouă, începând cu șirul inițial, toate șirurile distincte ce se pot construi prin metoda mai sus menționată. Fiecare șir se va scrie pe câte un rând nou.
                    <br /><br />
                    Menţiuni:<br />
                    în cazul în care șirul conține două elemente consecutive egale, între acestea nu se va insera media aritmetică<br />
                    1 ≤ n ≤ 100<br />
                    -1.000.000.000 ≤ elementele șirului ≤ 1.000.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 6 <br />7 3 4 4 6 4
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> 7 3 4 4 6 4<br />7 5 3 4 4 5 6 5 4<br />7 6 5 4 3 4 4 5 6 5 4
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Inserare medie aritmetica2.0" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Inserare medie aritmetica2.0"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Bubble Sort"
            testPassed={testPassed}
        />
    )
}

export default InsertAverage2