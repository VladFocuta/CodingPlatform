import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function Subsequence() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7', '1 2 3 4 5 6 7', '3'], expected: '1 2 3 \n 2 3 4 \n 3 4 5 \n 4 5 6 \n 5 6 7' },
        { params: ['5', '10 20 30 40 50', '5'], expected: '10 20 30 40 50' },
        { params: ['4', '1 2 3 4', '5'], expected: 'Nu exista sub-secvente valide' },
        { params: ['6', '11 22 33 44 55 66', '1'], expected: '11 \n 22\n33 \n 44 \n 55 \n 66' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da un sir de numere intregi cu lungimea N. Determina toate sub-secventele de lungime K din array.O sub-secventa
                    este o portiune consecutiva din array. Daca nu exista suficiente elemente pentru a forma sub-secvente, afisati <strong style={{ color: 'red' }}>Nu exista sub-secvente valide</strong>.
                    <br /> <br />
                    Pe prima linie se citeste un numar întreg N (1 ≤ N ≤ 50), reprezentand numarul de elemente din array.<br />
                    Pe a doua linie se citesc N numere intregi separate prin spatiu.<br />
                    Pe a treia linie se citeste K (1≤ K ≤ N), reprezentand lungimea sub-secventei.<br />
                    Programul va afisa toate sub-secventele de lungime K, fiecare pe o linie separata.<br />
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 7 <br /> 1 2 3 4 5 6 7 <br /> 3<br />

                        <br />
                    </h4>
                    <h4> Date de iesire: <br />1 2 3<br />
                        2 3 4<br />
                        3 4 5<br />
                        4 5 6<br />
                        5 6 7
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Sub-secventa array" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Sub-secventa array"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Suma a doua siruri"
            testPassed={testPassed}
        />
    )
}

export default Subsequence