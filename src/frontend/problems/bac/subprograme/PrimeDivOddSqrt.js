import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'
function PrimeDivOddSqrt() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['360'], expected: '7' },
        { params: ['16'], expected: '0' },
        { params: ['14'], expected: '9' },
        { params: ['2'], expected: '2' },
        { params: ['176'], expected: '11' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Subprogramul divPrim are doi parametri:<br />
                    - n, prin care primește un număr natural (n[2,10<sup>9</sup>]);<br />
                    - s, prin care furnizează suma divizorilor primi ai lui n care apar la o putere impară în
                    descompunerea în factori primi a acestuia.<br />
                    Scrieți definiția completă a subprogramului.<br />
                    Se va citi de la tastatură numărul n și apoi afișați valoarea lui s după apelarea subprogramului.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />360


                    </h4>
                    <h4> Date de iesire: <br />7</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Divizori primi la putere impara" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Divizori primi la putere impara"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Impar oglindite"
            testPassed={testPassed}
        />
    )
}

export default PrimeDivOddSqrt