import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'
function GenMat4() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6', '3'], expected: '1 1 1 2 2 2 \n 1 1 1 2 2 2  \n 1 1 1 2 2 2 \n 3 3 3 4 4 4 \n 3 3 3 4 4 4 \n 3 3 3 4 4 4' },
        { params: ['5', '2'], expected: '1 1 2 2 2 \n 1 1 2 2 2 \n 3 3 4 4 4 \n 3 3 4 4 4 \n 3 3 4 4 4' },
        { params: ['5', '1'], expected: '1 2 2 2 2 \n 3 4 4 4 4 \n 3 4 4 4 4\n 3 4 4 4 4 \n 3 4 4 4 4' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Scrieţi un program care citeşte de la tastatură doua numere naturale n şi k şi construieşte în memorie o matrice cu n linii şi n coloane formată numai din valori 1, 2, 3 şi 4 astfel încât: elementele aflate la intersecţia primelor k linii cu primele k coloane sunt egale cu 1, elementele aflate la intersecţia primelor k linii cu ultimele n-k coloane sunt egale cu 2, elementele aflate la intersecţia ultimelor n-k linii cu primele k coloane sunt egale cu 3, elementele aflate la intersecţia ultimelor n-k linii cu ultimele n-k coloane sunt egale cu 4.<br />
                    Programul citește de la tastatură numerele n şi k.<br />
                    Programul afișează pe ecran matricea construită, câte o linie a matricei pe câte o linie a ecranului, elementele fiecărei linii fiind separate prin câte un spaţiu.
                    <br /><br />

                    Mențiuni:<br />
                    2 ≤ n ≤ 24<br />
                    0 &lt; k &lt; n
                    <br /><br />

                    Exemplu: <br />

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />6 3
                    </h4>
                    <h4> Date de iesire: <br />1 1 1 2 2 2  <br />1 1 1 2 2 2  <br /> 1 1 1 2 2 2  <br />3 3 3 4 4 4 <br />3 3 3 4 4 4<br />3 3 3 4 4 4  </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Generare matrice 4" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Generare matrice 4"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Generare matrice 5"
            testPassed={testPassed}
        />
    )
}

export default GenMat4