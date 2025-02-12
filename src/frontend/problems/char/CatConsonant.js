import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function CatConsonant() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['casa', 'mare'], expected: 'casamare' },
        { params: ['avion', 'rapid'], expected: 'rvion aapid' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citesc doua cuvinte. Daca primul cuvant incepe cu o consoana, atunci se concateneaza cu al doilea cuvant si se afiseaza rezultatul.<br />
                    Daca incepe cu o vocala, se vor interschimba primele litere ale celor doua cuvinte.<br />
                    Sa se afiseze noile cuvinte.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />casa<br />mare

                    </h4>
                    <h4> Date de iesire: <br />casamare</h4>

                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />avion<br />rapid

                    </h4>
                    <h4> Date de iesire: <br />rvion aapid</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Concatenarea a doua siruri" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Concatenarea a doua siruri"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Cenzurarea unui cuvant"
            testPassed={testPassed}
        />
    )
}

export default CatConsonant