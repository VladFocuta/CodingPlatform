import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function MaxPrime() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7', '1 5 3 5 1 2 8'], expected: '5 2' },
        { params: ['5', '1 0 2 2 2'], expected: '2 3' },
        { params: ['3', '1 2 3'], expected: '3 1' },
        { params: ['4', '7 7 7 7'], expected: '7 4' },
       
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Să se scrie un program care citeşte un număr natural n și n numere naturale, fiecare cu valoarea cuprinsă între [0,9].<br />
                    Determină cel mai mare număr prim citit şi numărul său de apariții.
                    <br /><br />
                    Menţiuni:<br />
                    1 &lt;= n &lt;= 1.000.000<br />
                    vectorul va conţine cel puţin un număr prim<br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 7  <br />1 5 3 5 1 2 8
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />5 2
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Max prim" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Max prim"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default MaxPrime