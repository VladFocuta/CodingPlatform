import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function SortPrimePair() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['8', '16 7 6 3 1 5 9 14'], expected: '9 5 3 1' },
        { params: ['7', '0 55 3 1 12 9 66 '], expected: '1' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un vector cu n elemente, numere naturale. Afișați în ordine descrescătoare valorile din vector care sunt prime cu ultimul element al vectorului.<br />
                    Programul citește de la tastatură numărul n, iar apoi n numere naturale, reprezentând elementele vectorului.<br />
                    Programul va afișa pe ecran valorile cerute, în ordine descrescătoare, separate prin exact un spațiu.
                    <br /><br />
                    Menţiuni:
                    1 &lt;= n &lt;= 1000<br />
                    cele n numere citite vor fi mai mici decât 1.000.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 8  <br />16 7 6 3 1 5 9 14
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />9 5 3 1
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Prime cu ultimul" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Prime cu ultimul"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Sortare intre maxim si minim"
            testPassed={testPassed}
        />
    )
}

export default SortPrimePair