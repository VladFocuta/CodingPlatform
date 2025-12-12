import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function CharDelete() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['programare', '\nr'], expected: 'pogamae' },
        { params: ['portocale si banane', '\na'], expected: 'portocle si bnne' },
        { params: ['Manacare si Marmelada', '\nM'], expected: 'anacare si armelada' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Sa se creeze o functie care primeste ca parametri un sir de caractere si un caracter c.<br />
                    Sa se stearga caracterul c din sir.
                    <br />
                    In main() se va citi textul de la tastatura si caracterul c.<br />
                    Textul va contine litere mici si mari.<br />
                    Sa se afiseze noul text fara caracterul c.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: programare r

                    </h4>
                    <h4> Date de iesire: pogamae</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Stergerea unui caracter dat" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Stergerea unui caracter dat"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Inversarea unui sir de caractere"
            testPassed={testPassed}
        />
    )
}

export default CharDelete