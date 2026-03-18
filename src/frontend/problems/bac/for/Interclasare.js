import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function Interclasare() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7', '1 3 4 7 20 24 60', '9', '3 5 7 8 9 10 12 20 24'], expected: '1 3 4 5 7 8 9 10 12 20 \n 24 60' },
        { params: ['10', '1 3 5 7 9 11 13 15 17 19', '15', '2 4 6 8 10 12 14 16 18 20 21 22 23 24 25'], expected: '1 2 3 4 5 6 7 8 9 10 \n 11 12 13 14 15 16 17 18 19 20 \n 21 22 23 24 25' },
        { params: ['12', '1 2 3 4 5 6 7 8 9 10 11 12', '12', '13 14 15 16 17 18 19 20 21 22 23 24'], expected: '1 2 3 4 5 6 7 8 9 10 \n 11 12 13 14 15 16 17 18 19 20 \n 21 22 23 24' },
        { params: ['3', '1 2 3', '3', '10 20 30'], expected: '1 2 3 10 20 30' },
        { params: ['1', '5', '1', '5'], expected: '5' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se dau două şiruri a şi b, cu n, respectiv m elemente, numere naturale, ordonate strict crescător. Să se afişeze, în ordine strict crescătoare, valorile existente în cel puţin unul dintre cele două şiruri. În cazul în care o valoare apare în ambele şiruri, va fi afişată o singură dată.<br />
                    Prima linie conţine numărul n; urmează n numere naturale, ordonate strict crescător. Linia următoare conţine numărul m şi urmează m numere naturale, ordonate strict crescător.<br />
                    Sirul c va conţine, în ordine strict crescătoare, valorile existente în cel puţin unul dintre cele două şiruri. Aceste valori vor fi afişate câte 10 pe o linie, separate prin spaţii. Ultima linie poate conţine mai puţin de 10 de valori.
                    <br /><br />
                    Menţiuni:<br />
                    1 ≤ n,m ≤ 100.000<br />
                    valorile elementelor celor două şiruri vor fi mai mici decât 1.000.000

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />7 <br />1 3 4 7 20 24 60<br />9<br />3 5 7 8 9 10 12 20 24



                    </h4>
                    <h4> Date de iesire: <br />1 3 4 5 7 8 9 10 12 20<br />
                        24 60  </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Interclasare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Interclasare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Interclasare2"
            testPassed={testPassed}
        />
    )
}

export default Interclasare