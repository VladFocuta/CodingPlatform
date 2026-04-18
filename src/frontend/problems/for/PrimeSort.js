import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function PrimeSort() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7', '13 1 10 15 3 7 11'], expected: '3 7 11 13' },
        { params: ['6', '999 2 567 0 11 17'], expected: '2 11 17' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un vector cu n elemente, numere naturale. Afișați în ordine crescătoare valorile prime din acest vector.<br />
                    Programul citește de la tastatură numărul n, iar apoi n numere naturale, reprezentând elementele vectorului.<br />
                    Programul va afișa pe ecran valorile prime din vector, în ordine crescătoare, separate prin exact un spațiu.
                    <br /><br />
                    Menţiuni:
                    1 &lt;= n &lt;= 1000<br />
                    cele n numere citite vor fi mai mici decât 1.000.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 7  <br />13 1 10 15 3 7 11
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />3 7 11 13
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Sortare prime" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Sortare prime"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Prime cu ultimul"
            testPassed={testPassed}
        />
    )
}

export default PrimeSort