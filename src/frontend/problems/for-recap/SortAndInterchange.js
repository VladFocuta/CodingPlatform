import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function SortAndInterchange() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [5, 9, 3, 1, 100, 22], expected: [3, 9, 100, 22, 1] },
        { params: [4, 9, 3, 1, 100], expected: [3, 9, 100, 1] },
        { params: [1, 2], expected: [2] },
        { params: [10, 100, -2, 83, 203, 0, 1, 2, 3, 4, -33], expected: [-2, 0, 83, 100, 203, 4, 3, 2, 1, -33] }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Sorteaza prima jumatate a unui array in ordine crescatoare si a doua jumatate in ordine descrescatoare.
                    <br /> <br />
                    Pe prima linie se citeste un numar întreg N (1 ≤ N ≤ 50), reprezentand numarul elementelor unui array.<br />
                    Pe a doua linie se citesc N numere intregi separate prin spatiu.<br />
                    Daca sirul are o lungime impara, de exemplu 5, lungimea primei jumatati este 2 si a doua jumatate 3.
                    Programul va afisa noul array sortat in modul mentionat mai sus.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 5 <br /> 9 3 1 100 22
                        <br />
                    </h4>
                    <h4> Date de iesire: 3 9 100 22 1
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Sortare si interschimbare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Sortare si interschimbare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Stergerea unui element"
            testPassed={testPassed}
        />
    )
}

export default SortAndInterchange