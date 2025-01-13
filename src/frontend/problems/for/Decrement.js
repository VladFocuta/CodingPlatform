import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Decrement() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
        { params: [16, 99, 45, 33, 25], expected: [25, 33, 45, 99, 16] },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care permite utilizatorului sa introduca 5 numere intregi intr-un sir cu lungimea maxima de 50 de elemente. Dupa ce numerele sunt introduse, programul va afisa fiecare element in ordine descrescatoare a carui index apartine, cu spatiu intre ele.
                    <br /> <br />
                    Restrictii si detalii:<br />
                    Lungimea maxima a sirului este 50, dar utilizatorul va introduce doar 5 numere.<br />
                    Pozitiile sunt numerotate incepand de la 0 (indexul incepe de la 0).<br />
                    Ordinea descrescatoare se aplica doar indexului.
                    Numerele pot fi chiar si negative.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 1 2 3 4 5
                        <br />
                    </h4>
                    <h4> Date de iesire: 5 4 3 2 1
                    </h4>
                </div>
                
            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Afisam descrescator" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Afisam descrescator"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Stergerea unui element"
            testPassed={testPassed}
        />
    )
}

export default Decrement