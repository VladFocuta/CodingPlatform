import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function InsertPerfectSquare() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7', '8 1 2 3 10 5 122'], expected: '8 1 1 2 3 10 5 122' },
        { params: ['3', '2 16 64'], expected: '2 4 16 8 64' },
        { params: ['5', '9 36 25 42 81'], expected: '3 9 6 36 5 25 42 9 81' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un șir cu n elemente naturale.<br />
                    Să se insereze în șir înaintea fiecărui element pătrat perfect rădăcina sa pătrată.<br />
                    Programul va citi de la tastatură numărul n, apoi n numere naturale reprezentând elementele șirului.<br />
                    Programul va afișa pe ecran elementele șirului obținut după inserare, separate prin câte un spațiu.
                    <br /><br />
                    Menţiuni:<br />
                    1 ≤ n ≤ 25<br />
                    elementele șirului vor fi cuprinse între 0 și 1.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 5 <br />7 3 4 1 9
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> 7 3 2 4 1 1 3 9
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Inserare patrat perfect" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Inserare patrat perfect"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Inserare medie aritmetica"
            testPassed={testPassed}
        />
    )
}

export default InsertPerfectSquare