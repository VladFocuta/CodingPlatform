import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function EvenNeighbors() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [10, 109, 0, 3, 4, 4, 6, 1, 2993, 2, 10], expected: [4, 4, 6, 2, 10] },
        { params: [1, 1], expected: "Nu am gasit" },
        { params: [2, 2, 2], expected: [2, 2] },
        { params: [5, 101, 100, 100, 9, 2000], expected: [100, 100] },
        { params: [6, 1, 33, 44, 55, 1, 2000], expected: "Nu am gasit" }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da un sir de numere cu lungimea N. Sa se afle daca exista minim 2 numere pare alaturate.
                    <br /> <br />
                    Pe prima linie se citeste un numar întreg N (1 ≤ N ≤ 50), reprezentand numarul de elemente din array.<br />
                    Pe a doua linie se citesc N numere intregi separate prin spatiu.<br />
                    Programul va afisa numerele pare alaturate, separate prin spatiu.<br />
                    0 este considerat o cifra para.<br />
                    In caz contrar, se va afisa <strong style={{ color: 'red' }}>Nu am gasit</strong>.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 10 <br /> 109 0 3 4 4 6 1 2933 2 10
                        <br />
                    </h4>
                    <h4> Date de iesire: 4 4 6 2 10
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Vecini pari" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Vecini pari"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Sub-secventa array"
            testPassed={testPassed}
        />
    )
}

export default EvenNeighbors
