import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'
function OddReverse() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['523', '84356'], expected: '1' },
        { params: ['523', '84536'], expected: '0' },
        { params: ['523', '84576'], expected: '0' },
        { params: ['40', '86'], expected: '0' },
        { params: ['1763', '37'], expected: '0' },
        { params: ['891', '6192'], expected: '1' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Două numere se numesc oglindite dacă fiecare se obține din celălalt, prin parcurgerea cifrelor acestuia
                    de la dreapta la stânga. Două numere se numesc impar-oglindite dacă numerele obținute din acestea,
                    prin îndepărtarea tuturor cifrelor lor pare, sunt oglindite.<br />
                    Subprogramul imog are trei parametri:<br />
                    - x și y, prin care primește câte un număr natural din intervalul [0,10<sup>9</sup>];<br />
                    - rez, prin care furnizează valoarea 1 dacă x și y sunt impar-oglindite sau valoarea 0 în caz contrar.<br />
                    Scrieți definiția completă a subprogramului.<br />

                    Se vor citi de la tastatură numerele x și y, apoi se va afișa valoarea furnizată de variabila rez, după apelarea subprogramului.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />523 84356


                    </h4>
                    <h4> Date de iesire: <br />1</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Impar oglindite" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Impar oglindite"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default OddReverse