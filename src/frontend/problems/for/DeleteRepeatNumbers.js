import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function DeleteRepeatNumbers() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6', '1 2 3 2 4 5'], expected: '1 2 3 4 5' },
        { params: ['3', '3 3 3'], expected: '3' },
        { params: ['4', '1 2 3 4'], expected: '1 2 3 4' },
        { params: ['7', '1 2 3 3 4 3 3'], expected: '1 2 3 4' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citește un șir cu n elemente, numere întregi. Să se șteargă elementele care se repetă, păstrându-se doar primul de la stânga la dreapta.
                    <br />
                    Programul citește de la tastatură numărul n, iar apoi n numere întregi, separate prin spații.<br />
                    Programul va afișa pe ecran elementele șirului prelucrat cu spații intre ele.
                    <br /><br />
                    Menţiuni:
                    1 &lt;= n &lt;= 1000<br />
                    valoarea absolută a elementelor șirului va fi mai mică decât 1.000.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 7  <br />1 2 3 3 4 3 3
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />1 2 3 4
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Eliminare numere repetate" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Eliminare numere repetate"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Permutari circulare"
            testPassed={testPassed}
        />
    )
}

export default DeleteRepeatNumbers