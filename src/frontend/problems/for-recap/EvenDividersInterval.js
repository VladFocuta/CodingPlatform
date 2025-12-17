import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function EvenDividersInterval() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['14', '36'], expected: '6 24 36' },
        { params: ['10', '20'], expected: '4 12 20' },
        { params: ['2', '2'], expected: '1 2 2' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citesc de la tastatură două numere naturale a și b (a &lt;= b).<br />
                    Pentru fiecare număr din intervalul [a,b] se determină numărul de divizori pari.<br /><br />
                    Să se afișeze:<br />
                    - numărul maxim de divizori pari întâlnit pentru numerele din interval,<br />
                    - cel mai mic și cel mai mare număr din interval[a,b] care au acest număr maxim de divizori pari.<br />
                    Valorile afișate vor fi, în această ordine, separate printr-un singur spațiu.
                    <br /><br />


                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 14 36

                    </h4>
                    <h4> Date de iesire:<br /> 6 24 36

                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Interval divizori pari" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Interval divizori pari"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Misiunea Agentilor P"
            testPassed={testPassed}
        />
    )
}

export default EvenDividersInterval