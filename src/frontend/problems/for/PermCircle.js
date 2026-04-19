import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function PermCircle() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['234'], expected: '342 423 234' },
        { params: ['165'], expected: '651 516 165' },
        { params: ['123456'], expected: '234561 345612 456123 561234 612345 123456' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieți un program care citește un număr natural n și care afișează toate permutările circulare ale cifrelor lui n cu o poziție.<br />
                    Programul citește de la tastatură numărul n.
                    <br /><br />
                    Menţiuni:<br />
                    n are cel mult 100.000 de cifre

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 234
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />342 423 234
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Permutari circulare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Permutari circulare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Inserarea unui element"
            testPassed={testPassed}
        />
    )
}

export default PermCircle