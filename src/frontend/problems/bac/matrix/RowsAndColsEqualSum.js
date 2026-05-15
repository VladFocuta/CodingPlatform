import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function RowsAndColsEqualSum() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '3 1 8 5 4 7 8 5 1 2 2 2 6 7 3 9 8 1 3 6 7 5 3 1 7'], expected: '2' },
        { params: ['6', '3 1 8 5 4 7 9 8 5 1 2 6 2 2 6 7 3 5 9 8 1 3 6 4 8 5 3 1 7 1 2 1 3 7 7 4'], expected: '3' },
        { params: ['3', '3 1 8 7 8 5 2 2 6'], expected: '1' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se dă o matrice cu n linii şi n coloane şi elemente numere naturale. Să se determine câte elemente ale matricei se află pe linii și coloane de sumă egală. Elementul a[i,j] va fi numărat dacă suma elementelor de pe linia i este egală cu cea de pe coloana j.<br />
                    Programul citește de la tastatură numărul n, iar apoi n*n numere naturale, separate prin spaţii, reprezentând elementele matricei, linie cu linie.<br />
                    Programul afișează pe ecran numărul C, cu semnificaţia precizată.
                    <br /><br />

                    Mențiuni:<br />
                    1 ≤ n ≤ 100<br />
                    elementele matricei vor fi mai mici decât 1.000
                    <br /><br />

                    Exemplu: <br />

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />6 <br />3 1 8 5 4 7 <br /> 9 8 5 1 2 6 <br /> 2 2 6 7 3 5 <br /> 9 8 1 3 6 4<br />8 5 3 1 7 1<br />2 1 3 7 7 4
                    </h4>
                    <h4> Date de iesire: <br />3</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Linii si coloane de suma egala" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Linii si coloane de suma egala"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Generare sir Fibonacci2.0"
            testPassed={testPassed}
        />
    )
}

export default RowsAndColsEqualSum