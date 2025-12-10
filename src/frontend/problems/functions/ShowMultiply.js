import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function ShowMultiply() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '7'], expected: '28 21 14 7' },
        { params: ['3', '5'], expected: '15 10 5' },
        { params: ['1', '10'], expected: '10' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Scrieți definiția completă a unei funcții care primește doi parametri, n și x,
                    și afișează pe ecran, în ordine descrescătoare, primele n numere naturale nenule care sunt divizibile cu x.<br />
                    N si x se citesc de la tastatură.
                    <br /><br />
                    Mentiuni:<br />
                    0 &lt;= n &lt;= 50, 0 &lt; x &lt;= 20<br /><br />
                    Exemplu:
                </h4>
          
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />4 7

                    </h4>
                    <h4> Date de iesire:<br /> 28 21 14 7 </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Primele n numere divizibile cu x" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Primele n numere divizibile cu x"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Simularea unei stive"
            testPassed={testPassed}
        />
    )
}

export default ShowMultiply