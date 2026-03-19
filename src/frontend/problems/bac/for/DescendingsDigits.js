import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function DescendingsDigits() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '301941 81912 83392 776996 431446'], expected: '9 9 9 9 9 8 8 7 7 6 6 6 4 4 4 4 3 3 3 3 \n2 2 1 1 1 1 1 0' },
        { params: ['7', '301941 81912 83392 776996 431446 999009293 123456789'], expected: '9 9 9 9 9 9 9 9 9 9 9 8 8 8 7 7 7 6 6 6 \n 6 5 4 4 4 4 4 3 3 3 3 3 3 2 2 2 2 1 1 1 \n 1 1 1 0 0 0' },
        { params: ['2', '123 456'], expected: '6 5 4 3 2 1' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se dau n numere naturale cu cel mult 9 cifre fiecare. Să se afişeze, în ordine descrescătoare, toate cifrele care apar în numerele date.<br />
                    Se citesc cel mult 10.000 de numere, dispuse pe mai multe linii.<br />
                    Se vor afișa cifrele determinate, ordonate descrescător, câte 20 pe o linie, valorile de pe fiecare linie fiind separate prin spaţii. Ultima linie a fişierului poate conţine mai puţin de 20 de cifre.

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 <br />301941 81912 83392 <br />776996 431446

                    </h4>
                    <h4> Date de iesire: <br />9 9 9 9 9 8 8 7 7 6 6 6 4 4 4 4 3 3 3 3 <br />2 2 1 1 1 1 1 0
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cifre descrescatoare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cifre descrescatoare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Sub-numar"
            testPassed={testPassed}
        />
    )
}

export default DescendingsDigits