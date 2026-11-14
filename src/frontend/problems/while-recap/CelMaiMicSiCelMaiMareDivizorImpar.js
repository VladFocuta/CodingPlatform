import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function CelMaiMicSiCelMaiMareDivizorImpar() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['15'], expected: '1 15' },
        { params: ['24'], expected: '1 3' },
        { params: ['16'], expected: 'nu exista' },
        { params: ['1'], expected: 'nu exista' },
        { params: ['105'], expected: '1 105' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se citește un număr natural nenul x. Să se determine și să se afișeze cel mai mic și cel mai mare divizor impar al numărului x, în această ordine.
                    Dacă numărul nu are cel puțin doi divizori impari distincți, se va afișa mesajul <strong style={{ color: 'red' }}>nu exista</strong>.
                    <br /><br />
                    Mențiuni:<br />
                    1 ≤ x ≤ 2.000.000.000<br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />15</h4>
                    <h4 style={{ marginLeft: '10px' }}>Date de ieșire:<br />1 15</h4>
                </div>
            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cel mai mic si cel mai mare divizor impar" />
            </div>
        </>
    )

    return (
        <ProblemPage
            problemName="Cel mai mic si cel mai mare divizor impar"
            problemPoints={3}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default CelMaiMicSiCelMaiMareDivizorImpar
