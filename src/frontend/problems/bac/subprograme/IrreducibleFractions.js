import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function IrreducibleFractions() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['8'], expected: '4' },
        { params: ['1'], expected: '1' },
        { params: ['33'], expected: '20' },
        { params: ['16'], expected: '8' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Se consideră subprogramul cmdiv care primeşte prin parametrii x şi y două valori întregi
                    pozitive (0 &lt; x &lt; 100 şi 0 &lt; y &lt; 100) şi returnează cel mai mare divizor comun al lor.<br />
                    a. Scrieţi doar antetul subprogramului cmdiv.<br />
                    b. Scrieţi un program C++ care citeşte de la tastatură un număr natural n (1 ≤ n ≤ 100),
                    determină, utilizând apeluri utile ale subprogramului cmdiv, şi afişează pe ecran numărul
                    fracţiilor ireductibile de forma <span>x ⁄ n</span> cu x număr natural (1 ≤ x ≤ n).<br /><br />

                    Explicaţie:<br />
                    Dacă numărătorul și numitorul sunt prime între ele fracția este ireductibilă.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />8


                    </h4>
                    <h4> Date de iesire: <br /> 4 </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Fractii ireductibile" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Fractii ireductibile"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Numar minim cu cifra maxima"
            testPassed={testPassed}
        />
    )
}

export default IrreducibleFractions