import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function MajorityElement() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [5, 3, 3, 4, 2, 3], expected: [3] },
        { params: [1, 2], expected: [2] },
        { params: [6, 2, 4, 2, 2, 2, 0], expected: [2] },
        { params: [6, 2, 4, 3, 4, 6, 0], expected: "Nu exista element majoritar" },

    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care determina elementul majoritar dintr-un array. Un element este considerat majoritar daca apare de mai mult de jumatate din numarul total de elemente din array.
                    <br />
                    Pe prima linie se citeste de la tastatura un numar întreg N (1 ≤ N ≤ 50) reprezentand dimensiunea array-ului.<br />
                    Pe a doua linie se citesc de la tastatura N numere intregi separate prin spatiu.<br />
                    Daca exista un element majoritar, afiseaza acel element.<br />
                    Daca nu exista un element majoritar, afiseaza <strong style={{ color: 'red' }}>Nu exista element majoritar</strong>.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 5 <br /> 3 3 4 2 3
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
                    problemName="Element majoritar" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Element majoritar"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Vecini pari"
            testPassed={testPassed}
        />
    )
}

export default MajorityElement