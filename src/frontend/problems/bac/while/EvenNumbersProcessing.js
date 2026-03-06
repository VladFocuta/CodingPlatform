import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'
function EvenNumbersProcessing() {
  const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['526748'], expected: '8642' },
        { params: ['482604'], expected: '864420' },
        { params: ['846202'], expected: '864220' },
        { params: ['4444'], expected: '4444' },
        { params: ['1257'], expected: '2' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citește de la tastatură un număr natural n (1 &lt;= n &lt; 10<sup>6</sup>).<br />
                    Să se construiască și să se afișeze numărul format din toate cifrele pare ale lui n, în ordinea descrescătoare a valorii acestora (x..., 8, 6, 4, 2, 0).<br />
                    Se garantează că numărul are cel puțin o cifră pară.<br />
                    Dacă o cifră apare de mai multe ori în n, aceasta va apărea de același număr de ori și în numărul construit.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />526748


                    </h4>
                    <h4> Date de iesire: <br /> 8642</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Prelucrarea cifrelor pare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Prelucrarea cifrelor pare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Produsul cifrelor impare"
            testPassed={testPassed}
        />
    )
}

export default EvenNumbersProcessing