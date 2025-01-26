import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function TwoArraysSum() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '1 2 3 4 5', '6 7 8 9 10'], expected: '7 9 11 13 15' },
        { params: ['1', '0', '0'], expected: '0' },
        { params: ['10', '10 20 30 40 50 60 70 80 90 100', '1 2 3 4 5 6 7 8 9 10'], expected: '11 22 33 44 55 66 77 88 99 110' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care calculeaza suma elementelor a doua siruri. Sirurile au o lungime egala.<br />
                    Pe prima linie se citeste un numar întreg N (1 ≤ N ≤ 50), reprezentand numarul de elemente din fiecare sir.<br />

                    Pe a doua linie se citesc N numere intregi separate prin spatiu pentru primul sir.<br />
                    Pe a treia linie se citesc N numere intregi separate prin spatiu pentru al doilea sir.<br />
                    La final afisam noul sir in care fiecare element reprezinta valoarea sumei a elementelor din primul si al doilea sir.<br />
                    Daca avem primul_sir(1, 2, 3) si al doilea_sir(4, 5, 6), afisam rezultat(5, 7, 9).
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 5 <br /> 1 2 3 4 5 <br /> 6 7 8 9 10
                        <br />
                    </h4>
                    <h4> Date de iesire: 7 9 11 13 15
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma a doua siruri" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Suma a doua siruri"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Suma a doua siruri2.0"
            testPassed={testPassed}
        />
    )
}

export default TwoArraysSum