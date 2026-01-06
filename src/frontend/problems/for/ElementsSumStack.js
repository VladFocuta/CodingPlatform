import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function ElementsSumStack() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '1 30', '1 40', '1 50'], expected: '120' },
        { params: ['6', '1 4', '1 6', '2', '1 10', '2', '1 3'], expected: '7' },
        { params: ['8', '1 10', '1 20', '2', '1 5', '2', '1 7', '1 3', '2'], expected: '17' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un număr natural n (0 &lt; n &lt; 101), reprezentând numărul de operații efectuate asupra unei stive inițial goale.<br />
                    Operațiile sunt codificate astfel:<br />
                    1 x – se adaugă elementul x în stivă (operația PUSH)<br />
                    2 – se elimină elementul din vârful stivei, dacă stiva nu este goală (operația POP)<br /><br />
                    Dacă stiva conține cel puțin un element, să se afișeze suma elementelor rămase în stivă.<br />
                    Dacă stiva este goală, afișează <strong style={{ color: 'red' }}>Stiva este goala</strong>.<br />
                    De la tastatură se citește n – numărul de operații și următoarele n linii conțin operațiile.
                    <br /><br />

                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 3  <br />1 30 <br /> 1 40  <br /> 1 50
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />120
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma elementelor din stiva" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Suma elementelor din stiva"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Inversarea unei secvente"
            testPassed={testPassed}
        />
    )
}

export default ElementsSumStack