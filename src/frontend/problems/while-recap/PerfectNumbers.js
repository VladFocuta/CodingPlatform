import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function PerfectNumbers() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [28], expected: "Numarul este perfect" },
        { params: [3], expected: "Numarul nu este perfect" },
        { params: [56], expected: "Numarul nu este perfect" },
        { params: [1000], expected: "Numarul nu este perfect" },
        { params: [6], expected: "Numarul este perfect" }
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Scrie un program care verifica daca un numar este perfect. Un numar este perfect daca suma divizorilor sai (excluzandu-l) este egala cu numarul insusi. <br />
                    Se citeste numarul n de la tastatura si apoi se afiseaza mesajul <strong style={{color:'red'}}>Numarul este perfect </strong>sau <strong style={{color:'red'}}>Numarul nu este perfect</strong>.
                    <br /><br />
                    Mentiuni:<br />
                    1 &lt;= numar &lt;= 1000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 28
                        <br />
                    </h4>
                    <h4> Date de iesire: 2 3 5 7
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numere perfecte" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numere perfecte"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Eliminarea"
            testPassed={testPassed}
        />
    )
}

export default PerfectNumbers