import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function GenMat7() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '2 2 4 1 1'], expected: '2 2 4 1 1\n 1 2 2 4 1 \n 1 1 2 2 4\n 4 1 1 2 2\n 2 4 1 1 2' },
        { params: ['4', '1 1 3 2'], expected: '1 1 3 2 \n 2 1 1 3 \n 3 2 1 1 \n 1 3 2 1' },
        { params: ['2', '1 2'], expected: '1 2\n 2 1' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Scrieţi un program care citește de la tastatură un număr natural, n (n∈[2,20]), apoi n numere naturale din intervalul [0,10<sup>4</sup>], reprezentând, de la stânga la dreapta, în această ordine, valorile elementelor aflate pe prima linie a unui tablou bidimensional cu n linii și n coloane. Programul construiește în memorie tabloul, inițializând celelalte elemente, astfel încât fiecare linie să se obțină prin permutarea circulară a elementelor liniei
                    anterioare, de la stânga spre dreapta, cu o poziție.<br />
                    Programul afişează pe ecran tabloul obținut, fiecare linie a tabloului pe câte o linie a ecranului, elementele de pe aceeași linie fiind separate prin câte un spațiu.<br />
                    Programul citește de la tastatură numărul n și cele n numere.<br />
                    Programul afișează pe ecran tabloul construit, câte o linie a matricei pe câte o linie a ecranului, elementele fiecărei linii fiind separate prin câte un spaţiu.<br /><br />

                    Mențiuni:<br />
                    2 ≤ n ≤ 20

                    <br /><br />

                    Exemplu: <br />

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5<br /> 2 2 4 1 1
                    </h4>
                    <h4> Date de iesire: <br />2 2 4 1 1 <br />1 2 2 4 1  <br /> 1 1 2 2 4 <br />4 1 1 2 2 <br />2 4 1 1 2</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Generare matrice 7" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Generare matrice 7"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default GenMat7