import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function ElementSearch() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [5, 7, 3, 5, 7, 7, 9], expected: [2] },
        { params: [4, 3, 3, 8, 9, 100], expected: [0] },
        { params: [6, 0, 2, 3, 12, 43, 100, 399], expected: [-1] },
        { params: [10, 100, -2, 0, 1, 2, 3, 32, 66, 77, 83, 100], expected: [9] },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care citeste un numar N, un array sortat de N elemente si o valoare X.
                    <br /> <br />
                    Pe prima linie se citeste un numar întreg N (1 ≤ N ≤ 50), reprezentand numarul elementelor unui array si apoi numarul X.<br />
                    Pe a doua linie se citesc N numere intregi separate prin spatiu.<br />
                    Programul trebuie sa determine dacă X exista in array si sa afiseze pozitia sa (indexul, incepand de la 0) sau -1 daca nu exista.<br />
                    Sa se foloseasca cautarea binara.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 5 7 <br /> 1 3 5 7 9
                        <br />
                    </h4>
                    <h4> Date de iesire: 3
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cautarea unui element" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cautarea unui element"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Numar lipsa"
            testPassed={testPassed}
        />
    )
}

export default ElementSearch