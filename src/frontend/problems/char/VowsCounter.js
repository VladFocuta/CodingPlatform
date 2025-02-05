import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function VowsCounter() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['ana'], expected: '2' },
        { params: ['rrrmmz'], expected: '0' },
        { params: ['aeiou'], expected: '5' },
        { params: ['Astazi Invatam prOgramare'], expected: '10' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Sa se creeze o functie de tip bool care primeste ca parametru un caracter si verifica daca este o vocala sau nu.
                    <br />
                    In main() se va citi textul de la tastatura.<br />
                    Textul va fi format din litere mici si mari, si poate contine mai multe cuvinte.<br />
                    Sa se afiseze numarul total de vocale din text.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: Mere si capsuni

                    </h4>
                    <h4> Date de iesire: 6</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numarul total de vocale" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numarul total de vocale"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Convertirea literelor mari sau mici"
            testPassed={testPassed}
        />
    )
}

export default VowsCounter