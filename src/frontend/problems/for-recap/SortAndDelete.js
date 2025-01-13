import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function SortAndDelete() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [6, 4, 2, 5, 2, 8, 4], expected: [2, 4, 5, 8] },
        { params: [3, 0, 0, 0], expected: [0] },
        { params: [1, 2], expected: [2] },
        { params: [7, 33, 1, 33, 0, 33, 9, 102], expected: [0, 1, 9, 33, 102] }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care citeste N numere intregi de la tastatura (unde N ≤ 50) si le sorteaza in ordine crescatoare folosind algoritmul Insertion Sort si apoi elimina elementele duplicate.
                    <br /> <br />
                    Pe prima linie se citeste un numar întreg N (1 ≤ N ≤ 50), reprezentand numarul de elemente din array.<br />
                    Pe a doua linie se citesc N numere intregi separate prin spatiu.<br />
                    Programul va afisa numerele sortate in ordine crescatoare, separate prin spatiu.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 6 <br /> 4 2 5 2 8 4
                        <br />
                    </h4>
                    <h4> Date de iesire: 2 4 5 8
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Sortare si eliminare duplicate" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Sortare si eliminare duplicate"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Stergerea unui element"
            testPassed={testPassed}
        />
    )
}

export default SortAndDelete