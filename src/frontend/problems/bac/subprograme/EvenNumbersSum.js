import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function EvenNumbersSum() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '3 5 12 13 10'], expected: '18' },
        { params: ['1', '9'], expected: '0' },
        { params: ['2', '1 2'], expected: '0' },
        { params: ['2', '2 1'], expected: '1' },
        { params: ['6', '3 2 7 1 4 3'], expected: '4' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieţi definiţia completă a unui subprogram P cu doi parametri, care primeşte prin
                    intermediul primului parametru, n, un număr natural nenul (1 &lt;= n &lt;= 100) şi prin intermediul
                    celui de-al doilea parametru, a, un tablou unidimensional cu elementele numerotate de la 1
                    la n, numere întregi, de cel mult 4 cifre fiecare, şi returnează suma tuturor numerelor impare
                    aflate pe poziţii pare în tablou.<br /><br />
                    N şi elementele tabloului se vor citi de la tastatură şi apoi se va apela subprogramul creat, care va returna suma numerelor impare de pe poziţiile pare.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 <br /> 3 5 12 13 10


                    </h4>
                    <h4> Date de iesire: <br /> 18</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma numerelor pare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Suma numerelor pare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Patratul numerelor prime"
            testPassed={testPassed}
        />
    )
}

export default EvenNumbersSum