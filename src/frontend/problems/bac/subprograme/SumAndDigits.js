import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function SumAndDigits() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['56138'], expected: '5 23' },
        { params: ['5'], expected: '1 5' },
        { params: ['7351001'], expected: '7 17' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Scrieţi în limbajul C++ subprogramul cifre, care prin intermediul
                    parametrului n primeşte un număr natural de cel mult 9 cifre şi furnizează prin intermediul
                    parametrilor nc şi sc numărul de cifre şi respectiv suma cifrelor din scrierea lui n.<br />
                    N se va citi de la tastatură şi după apelarea subprogramului, se va afişa nc şi sc, cu spaţiu între ele.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />56138


                    </h4>
                    <h4> Date de iesire: <br /> 5 23</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma si numarul de cifre" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Suma si numarul de cifre"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Cifra cu proprietate de medie aritmetica"
            testPassed={testPassed}
        />
    )
}

export default SumAndDigits