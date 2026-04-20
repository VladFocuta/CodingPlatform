import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'


function InsertEvenElement() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7', '8 1 2 3 10 5 122'], expected: '8 16 1 2 4 3 10 20 5 122 244' },
        { params: ['3', '1 3 5'], expected: '1 3 5' },
        { params: ['3', '2 4 6'], expected: '2 4 4 8 6 12' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un șir cu n elemente naturale.<br />
                    Să se insereze în șir după fiecare element par dublul său.<br />
                    Programul va citi de la tastatură numărul n, apoi n numere naturale reprezentând elementele șirului.<br />
                    Programul va afișa pe ecran elementele șirului obținut după inserare, separate printr-un spațiu.
                    <br /><br />
                    Menţiuni:<br />
                    1 ≤ n ≤ 25<br />
                    elementele șirului vor fi cuprinse între 0 și 1.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 7 <br />8 1 2 3 10 5 122
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> 8 16 1 2 4 3 10 20 5 122 244
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Inserare element par" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Inserare element par"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Inserare patrat perfect"
            testPassed={testPassed}
        />
    )
}

export default InsertEvenElement