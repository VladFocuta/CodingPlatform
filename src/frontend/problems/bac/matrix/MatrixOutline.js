import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function MatrixOutline() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '4', '0 5 2 11 3 2 10 2 7 3 1 4 4 5 0 12 8 13 7 5'], expected: '5 5 5 5 \n 5 2 10 5 \n 5 3 1 5 \n 5 5 0 5 \n 5 5 5 5' },
        { params: ['3', '3', '1 2 100 3 4 5 6 7 8'], expected: '8 8 8 \n 8 4 8 \n 8 8 8' },
        { params: ['5', '5', '0 5 2 11 99 3 2 10 2 21 7 3 1 4 67 4 5 0 12 123 8 13 7 5 55'], expected: '55 55 55 55 55 \n 55 2 10 2 55 \n 55 3 1 4 55 \n 55 5 0 12 55 \n 55 55 55 55 55' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Scrieți un program care citește de la tastatură două numere naturale din intervalul [3,50], n și m, și elementele unui tablou bidimensional cu n linii și m coloane, numere naturale din intervalul [0,10<sup>4</sup>].<br />
                    Programul modifică în memorie tabloul dat, atribuind valoarea elementului aflat pe ultima linie și pe ultima coloană a tabloului fiecărui element aflat pe conturul acestuia (pe prima linie, ultima linie, prima coloană, ultima coloană), apoi afișează pe ecran tabloul modificat, câte o linie a tabloului pe câte o linie a ecranului, elementele fiecărei linii fiind separate prin câte un spațiu.<br />
                    Programul citește de la tastatură numerele n m, iar apoi cele n • m elemente ale tabloului.<br />
                    Programul va afișa pe ecran elementele tabloului modificat, conform cerinței.<br /><br />

                    Mențiuni:<br />
                    3 ≤ n,m ≤ 50<br />
                    elementele tabloului aparțin intervalului [0,10<sup>4</sup>]
                    <br /><br />

                    Exemplu: <br />

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 5<br /> 0 5 2 11 99<br /> 3 2 10 2 21<br /> 7 3 1 4 67<br /> 4 5 0 12 123<br /> 8 13 7 5 55
                    </h4>
                    <h4> Date de iesire: <br />55 55 55 55 55<br />55 2 10 2 55<br />55 3 1 4 55 <br />55 5 0 12 55 <br />55 55 55 55 55 </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Conturul matricei" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Conturul matricei"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Conturul matricei2.0"
            testPassed={testPassed}
        />
    )
}

export default MatrixOutline