import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function ElementDelete2() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [2, 1, 2, 3, 4, 5], expected: [1, 2, 4, 5] },
        { params: [0, 99, 45, 33, 25, 10], expected: [45, 33, 25, 10] },
        { params: [4, 10, 12, 13, 14, 15], expected: [10, 12, 13, 14] },
        { params: [3, 22, 23, 24, 25, 26], expected: [22, 23, 24, 26] }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care permite utilizatorului sa stearga un element de la o pozitie data <strong style={{ color: '#00bfff' }}>position</strong>.<br />
                    De la tastatura se va citi numarul pozitiei si apoi un sir cu 5 numere.
                    <br /> <br />
                    Restrictii si detalii:<br />
                    Lungimea maxima a sirului este 50, dar utilizatorul va introduce doar 5 numere.<br />
                    Pozitiile sunt numerotate incepand de la 0 (indexul incepe de la 0).
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 2 1 2 3 4 5
                        <br />
                    </h4>
                    <h4> Date de iesire: 1 2 4 5
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Stergerea unui element 2.0" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Stergerea unui element 2.0"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Inserarea unui element"
            testPassed={testPassed}
        />
    )
}

export default ElementDelete2