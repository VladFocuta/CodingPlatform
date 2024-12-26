import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Elimination() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [899210, 9], expected: [8210] },
        { params: [12345, 1], expected: [2345] },
        { params: [82942, 2], expected: [894] },
        { params: [1000, 1], expected: [0] },
        { params: [89000, 9], expected: [8000] },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Scrie un program care elimina toate aparitiile unei cifre specificate dintr-un numar. <br />
                    Se citeste numarul de la tastatura urmat de cifra care va fi eliminata.<br />
                    In cazul in care prima cifra este eliminata si restul numarului este format din zerouri, se va afisa doar un <strong style={{ color: 'red' }}>0</strong>.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 899210 9
                        <br />
                    </h4>
                    <h4> Date de iesire: 8210
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Eliminarea" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Eliminarea"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Generare numere"
            testPassed={testPassed}
        />
    )
}

export default Elimination
