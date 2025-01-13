import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function EvenPositions() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: [1, 3, 5, 7, 9] },
        { params: [2, 0, 12, 44, 16, 99, 45, 33, 25, 10], expected: [0, 1, 2, 3, 4, 9] },
        { params: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
        { params: [2, 1, 1, 1, 1, 2, 1, 1, 1, 1], expected: [0, 5] },
        { params: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2], expected: [9] }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care permite utilizatorului sa introduca 10 numere intregi intr-un sir cu lungimea maxima de 50 de elemente. Dupa ce numerele sunt introduse, programul va verifica daca elementul este par si va afisa pozitia (indexul) acestuia.
                    <br /> <br />
                    Restrictii si detalii:<br />
                    Lungimea maxima a sirului este 50, dar utilizatorul va introduce doar 10 numere.<br />
                    Pozitiile sunt numerotate incepand de la 0 (indexul incepe de la 0).<br />
                    Daca elementul este un numar par, se va afisa pozitia pe care se regaseste.<br />
                    Cel putin un numar din sir va fi par.

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 2 0 12 44 16 99 45 33 25 10
                        <br />
                    </h4>
                    <h4> Date de iesire: 0 1 2 3 4 9
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Pozitii pare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Pozitii pare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Afisam descrescator"
            testPassed={testPassed}
        />
    )
}

export default EvenPositions