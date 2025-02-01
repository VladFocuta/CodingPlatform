import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function SwapNumbers() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '8'], expected: '8 5' }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citesc doua numere a si b. Scrie o functie care interschimba valorile acestora fara a folosi o variabila auxiliara in main(), folosind parametri transmisi prin referinta.<br />
                In main() vom citi numerele a si b de la tastatura, apelam functia scrisa de noi si apoi afisam noile valori ale lui a si b.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 8 5

                    </h4>
                    <h4> Date de iesire: 5 8 </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Schimbarea valorilor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Schimbarea valorilor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Modificarea unui tablou"
            testPassed={testPassed}
        />
    )
}

export default SwapNumbers