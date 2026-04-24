import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function DecimalNotation() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '124 229 1322 4 534'], expected: '5 9 1 3 4 2' },
        { params: ['2', '221 112'], expected: '1 2' },
        { params: ['1', '223'], expected: '3 2' },
        { params: ['6', '123 521 999 4 542 1234'], expected: '3 5 1 4 9 2' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se dau n numere naturale. Afișați cifrele care apar în scrierea zecimală a acestor numere, în ordinea crescătoare a numărului de apariții. Dacă două cifre au același număr de apariții, se va afișa mai întâi cifra mai mică.<br />
                    Programul citește de la tastatură numărul n, iar apoi n numere naturale.<br />
                    Programul va afișa pe ecran numărul cifrele care apar în scrierea zecimală a numerelor citite, în ordinea cerută, separate prin exact un spațiu.
                    <br /><br />
                    Mențiuni:<br />
                    1 ≤ n ≤ 1000<br />
                    cele n numere citite vor fi mai mici decât 1.000.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />6 <br /> 123 521 999 4 542 1234

                    </h4>
                    <h4> Date de iesire: <br />3 5 1 4 9 2
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Scriere zecimala" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Scriere zecimala"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Secvente"
            testPassed={testPassed}
        />
    )
}

export default DecimalNotation