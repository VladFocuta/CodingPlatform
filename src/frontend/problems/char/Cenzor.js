import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Cenzor() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['Ana are mere si pere. Ale ei mere, sunt rosii.', '\nmere'], expected: 'Ana are **** si pere. Ale ei ****, sunt rosii.' },
        { params: ['Masinile albastre sunt cele mai rapide. Exista putine masini albastre.', '\nalbastre'], expected: 'Masinile ******** sunt cele mai rapide. Exista putine masini ********.' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da un text si un cuvant interzis. Trebuie sa inlocuim toate aparitiile cuvantului interzis din text cu caracterele * (aceeasi lungime).<br />
                    Folosim strstr() pentru a gasi aparitiile cuvantului in text.<br />
                    Sa se afiseze noul text.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />Ana are mere si pere. Ale ei mere, sunt rosii. <br />mere

                    </h4>
                    <h4> Date de iesire: <br />Ana are **** si pere. Ale ei ****, sunt rosii.</h4>

                </div>
                

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cenzurarea unui cuvant" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cenzurarea unui cuvant"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Numararea cuvintelor"
            testPassed={testPassed}
        />
    )
}

export default Cenzor