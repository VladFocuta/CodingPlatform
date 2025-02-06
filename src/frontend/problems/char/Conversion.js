import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Conversion() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['astAzI aM InVaTaT mulT'], expected: 'ASTaZi Am iNvAtAt MULt' },
        { params: ['Astazi Invatam prOgramare'], expected: 'aSTAZI iNVATAM PRoGRAMARE' },
        { params: ['AM REUSIT'], expected: 'am reusit' },
        { params: ['urmatoarea problema'], expected: 'URMATOAREA PROBLEMA' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Sa se creeze o functie care primeste ca parametru un sir de caractere si transforma orice litera mica din sir, in litera mare, si orice litera mare, in litera mica.
                    <br />
                    In main() se va citi textul de la tastatura.<br />
                    Textul va fi format din litere mici si mari, si poate contine mai multe cuvinte.<br />
                    Sa se afiseze noul text.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: astAzI aM InVaTaT mulT

                    </h4>
                    <h4> Date de iesire: ASTaZi Am iNvAtAt MULt</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Convertirea literelor mari sau mici" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Convertirea literelor mari sau mici"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Stergerea unui caracter dat"
            testPassed={testPassed}
        />
    )
}

export default Conversion