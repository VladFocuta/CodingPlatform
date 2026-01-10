import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function DiffSumLinesCol() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3'], expected: '1 1 1 \n 1 2 1 \n 1 1 3' },
        { params: ['1'], expected: '1' },
        { params: ['6'], expected: '1 1 1 1 1 1 \n 1 2 1 1 1 1 \n 1 1 3 1 1 1 \n 1 1 1 4 1 1 \n 1 1 1 1 5 1 \n 1 1 1 1 1 6' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieţi un program C++ care citeşte de la tastatură un număr natural n (0 &lt; n &lt; 23) şi apoi
                    construieşte în memorie o matrice cu n linii şi n coloane ,formată din numere naturale
                    nenule mai mici sau egale cu n, astfel încât să nu existe două linii cu aceeaşi sumă a
                    elementelor şi nici două coloane cu aceeaşi sumă a elementelor. <br />
                    Programul va afişa matricea pe ecran, câte o linie a matricei pe o linie a ecranului, cu un
                    spaţiu între elementele fiecărei linii.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />3


                    </h4>
                    <h4> Date de iesire: <br /> 1 1 1<br />1 2 1 <br />1 1 3 </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Matrice cu sume diferite pe linii si coloane" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Matrice cu sume diferite pe linii si coloane"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Generarea unei matrice cu numere pare"
            testPassed={testPassed}
        />
    )
}

export default DiffSumLinesCol