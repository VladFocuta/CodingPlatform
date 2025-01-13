import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function ElementInsert2() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [2, 1, 2, 3, 4, 3, 13], expected: [2, 1, 2, 13, 3, 4] },
        { params: [0, 99, 45, 33, 25, 0, 101], expected: [101, 0, 99, 45, 33, 25] },
        { params: [4, 10, 12, 13, 14, 4, 1000], expected: [4, 10, 12, 13, 1000, 14] },
        { params: [3, 22, 23, 24, 25, 1, 1], expected: [3, 1, 22, 23, 24, 25] }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care permite utilizatorului sa introduca un element la o pozitie data <strong style={{ color: '#00bfff' }}>position</strong>, intr-un sir de numere.<br />
                    De la tastatura se va citi un sir de numere cu 5 elemente, pozitia la care se va adauga un element nou si apoi elementul care va fi adaugat.
                    <br /> <br />
                    Restrictii si detalii:<br />
                    Lungimea maxima a sirului este 50, dar utilizatorul va introduce doar 5 numere.<br />
                    Pozitiile sunt numerotate incepand de la 0 (indexul incepe de la 0).
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 3 22 23 24 25<br /> 1 <br />1
                        <br />
                    </h4>
                    <h4> Date de iesire: 3 1 22 23 24 25
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Inserarea unui element 2.0" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Inserarea unui element 2.0"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Bubble Sort"
            testPassed={testPassed}
        />
    )
}

export default ElementInsert2