import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function InsertAverage() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6', '2 34 5 7 8 12'], expected: '2 18 34 5 6 7 8 10 12' },
        { params: ['4', '2 4 6 8'], expected: '2 3 4 5 6 7 8' },
        { params: ['3', '1 2 5'], expected: '1 2 5' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dau n numere întregi. Să se insereze între oricare două numere de aceeași paritate media lor aritmetică.<br />
                    Programul citește de la tastatură numărul n, iar apoi n numere întregi, separate prin spații.<br />
                    Programul va afișa pe ecran elementele noului șir de numere obținut după inserarea elementelor, separate prin câte un spațiu.
                    <br /><br />
                    Menţiuni:<br />
                    1 ≤ n ≤ 100<br />
                    -1.000.000.000 ≤ elementele șirului ≤ 1.000.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 6 <br />2 34 5 7 8 12
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> 2 18 34 5 6 7 8 10 12
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Inserare medie aritmetica" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Inserare medie aritmetica"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Inserare medie aritmetica2.0"
            testPassed={testPassed}
        />
    )
}

export default InsertAverage