import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function TenDivide() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7', '13 1 10 15 3 700 110'], expected: '700 110 10' },
        { params: ['7', '13 1 1 15 3 7 11'], expected: 'NU EXISTA' },
        { params: ['5', '10 210 1 5 325'], expected: '210 10' },
        

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un vector cu n elemente, numere naturale. Afișați în ordine descrescătoare valorile divizibile cu 10 din acest vector.<br />
                    Programul citește de la tastatură numărul n, iar apoi n numere naturale, reprezentând elementele vectorului.<br />
                    Programul va afișa pe ecran valorile divizibile cu 10 din vector, în ordine descrescătoare, separate prin exact un spațiu.<br />
                    Dacă în vector nu există numere divizibile cu 10, atunci se va afișa <strong style={{ color: 'red' }}>NU EXISTA</strong>.
                    <br /><br />
                    Menţiuni:
                    1 &lt;= n &lt;= 1000<br />
                    cele n numere citite vor fi mai mici decât 1.000.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 5  <br />10 210 1 5 325
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />210 10
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Divizibile cu 10" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Divizibile cu 10"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Sortare prime"
            testPassed={testPassed}
        />
    )
}

export default TenDivide