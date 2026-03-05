import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function ParitySum() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['10'], expected: '440' },
        { params: ['13'], expected: '924' },
        { params: ['1'], expected: '4' },
        { params: ['5'], expected: '76' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citește de la tastatură un număr natural n (1 &lt;= n &lt; 10<sup>6</sup>).<br />
                    Să se calculeze și să se afișeze suma numerelor obținute astfel:<br />
                    -pentru fiecare i din intervalul [1,n], dacă i este par, se adaugă i²<br />
                    -dacă i este impar, se adaugă (i+1)².
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />10


                    </h4>
                    <h4> Date de iesire: <br />440</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma in functie de paritate" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Suma in functie de paritate"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default ParitySum