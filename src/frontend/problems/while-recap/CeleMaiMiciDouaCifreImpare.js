import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function CeleMaiMiciDouaCifreImpare() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['21478'], expected: '1 7' },
        { params: ['1234'], expected: '1 3' },
        { params: ['1135'], expected: '1 1' },
        { params: ['97531'], expected: '1 3' },
        { params: ['888'], expected: 'nu exista' },
        { params: ['818'], expected: 'nu exista' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se citește un număr natural x. Să se determine și să se afișeze, în ordine crescătoare, cele mai mici două cifre impare ale numărului x.
                    Dacă numărul nu conține cel puțin două cifre impare, se va afișa mesajul <strong style={{ color: 'red' }}>nu exista</strong>.
                    <br /><br />
                    Mențiuni:<br />
                    0 ≤ x ≤ 2.000.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />21478</h4>
                    <h4 style={{ marginLeft: '10px' }}>Date de ieșire:<br />1 7</h4>
                </div>
            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cele mai mici doua cifre impare" />
            </div>
        </>
    )

    return (
        <ProblemPage
            problemName="Cele mai mici doua cifre impare"
            problemPoints={3}
            problemContent={problemContent}
            nextRoute="/problems/Inserare cifra dupa cifrele pare"
            testPassed={testPassed}
        />
    )
}

export default CeleMaiMiciDouaCifreImpare
