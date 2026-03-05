import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function ReverseOddNumbers() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['123456'], expected: '523416' },
        { params: ['123'], expected: '321' },
        { params: ['1'], expected: '1' },
        { params: ['4444'], expected: '4444' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citește de la tastatură un număr natural n (1 &lt;= n &lt; 10<sup>6</sup>).<br />
                    Să se construiască și să se afișeze numărul obținut din n prin inversarea ordinii cifrelor impare, fără a modifica pozițiile cifrelor pare.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />123456


                    </h4>
                    <h4> Date de iesire: <br /> 523416</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Inversarea pozitiilor cifrelor impare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Inversarea pozitiilor cifrelor impare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default ReverseOddNumbers