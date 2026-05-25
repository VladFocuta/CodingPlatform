import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function GenMat6() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5'], expected: '1 3 8 20 48\n 2 5 12 28 58\n 3 7 16 30 49\n 4 9 14 19 24\n 5 5 5 5 5' },
        { params: ['7'], expected: '1 3 8 20 48 112 256 \n 2 5 12 28 64 144 312 \n 3 7 16 36 80 168 327 \n 4 9 20 44 88 159 264 \n 5 11 24 44 71 105 146 \n 6 13 20 27 34 41 48 \n 7 7 7 7 7 7 7' },
        { params: ['2'], expected: '1 3\n 2 2' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Scrieți un program care citește de la tastatură un număr natural, n și construiește în memorie un tablou bidimensional, cu n linii și n coloane, astfel:<br />

                    - prima coloană conține, în ordine strict crescătoare, numerele naturale din intervalul [1,n];<br />
                    - toate elementele ultimei linii au valoarea n;<br />
                    - oricare alt element este obținut prin însumarea celor două elemente vecine cu el, aflate pe coloana anterioară, unul pe aceeași linie cu el, iar celălalt pe linia următoare.<br /><br />
                    Programul citește de la tastatură numărul n.<br />
                    Programul afișează pe ecran tabloul construit, câte o linie a matricei pe câte o linie a ecranului, elementele fiecărei linii fiind separate prin câte un spaţiu.<br /><br />

                    Mențiuni:<br />
                    2 ≤ n ≤ 20

                    <br /><br />

                    Exemplu: <br />

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5
                    </h4>
                    <h4> Date de iesire: <br />1 3 8 20 48 <br />2 5 12 28 58 <br /> 3 7 16 30 49 <br />4 9 14 19 24 <br />5 5 5 5 5</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Generare matrice 6" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Generare matrice 6"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Generare matrice 7"
            testPassed={testPassed}
        />
    )
}

export default GenMat6