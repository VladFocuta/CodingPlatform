import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function GenMat5() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '2', '4'], expected: '1 1 1 0 2\n 0 0 0 0 0\n 3 3 3 0 4\n 3 3 3 0 4\n 3 3 3 0 4' },
        { params: ['4', '4', '1'], expected: '0 2 2 2\n 0 2 2 2 \n 0 2 2 2 \n 0 0 0 0' },
        { params: ['10', '1', '10'], expected: '0 0 0 0 0 0 0 0 0 0  \n 3 3 3 3 3 3 3 3 3 0 \n 3 3 3 3 3 3 3 3 3 0 \n 3 3 3 3 3 3 3 3 3 0 \n 3 3 3 3 3 3 3 3 3 0 \n 3 3 3 3 3 3 3 3 3 0 \n 3 3 3 3 3 3 3 3 3 0 \n 3 3 3 3 3 3 3 3 3 0 \n 3 3 3 3 3 3 3 3 3 0 \n 3 3 3 3 3 3 3 3 3 0' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Scrieţi un program care citeşte de la tastatură trei numere naturale n, a, b şi construieşte în memorie o matrice cu n linii şi n coloane formată numai din valori 0, 1, 2, 3 şi 4 astfel încât: elementele aflate pe linia a sau coloana b sunt egale cu 0, cele aflate deasupra liniei a şi la stânga coloanei b sunt egale cu 1, cele aflate deasupra liniei a şi la dreapta coloanei b sunt egale cu 2, cele aflate sub linia a şi la stânga coloanei b sunt egale cu 3, iar elementele aflate sub linia a şi la dreapta coloanei b sunt egale cu 4.<br />
                    Programul citește de la tastatură numerele n, a şi b.<br />
                    Programul afișează pe ecran matricea construită, câte o linie a matricei pe câte o linie a ecranului, elementele fiecărei linii fiind separate prin câte un spaţiu.<br /><br />

                    Mențiuni:<br />
                    2 ≤ n ≤ 24<br />
                    1 &lt; a &lt; n<br />
                    1 &lt; b &lt; n<br />
                    liniile şi coloanele sunt numerotate de la 1
                    <br /><br />

                    Exemplu: <br />

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 2 4
                    </h4>
                    <h4> Date de iesire: <br />1 1 1 0 2  <br />0 0 0 0 0  <br /> 3 3 3 0 4 <br />3 3 3 0 4 <br />3 3 3 0 4</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Generare matrice 5" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Generare matrice 5"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Generare matrice 6"
            testPassed={testPassed}
        />
    )
}

export default GenMat5