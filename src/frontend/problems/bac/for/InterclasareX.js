import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function InterclasareX() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '7', '1 2 3 4 7 20 60', '9', '3 5 7 8 9 10 12 20 24'], expected: '5 10 60' },
        { params: ['4', '4', '4 8 16 20', '5', '0 8 15 20 25'], expected: '0 4 16' },
        { params: ['3', '15', '3 6 9 10 12 15 18 21 24 26 27 33 35 40 42', '15', '1 2 3 4 5 6 7 8 9 10 11 30 36 39 45'], expected: '12 15 18 21 24 27 30 33 36 39 42 45' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se dă un număr natural x și două șiruri a și b, cu n, respectiv m elemente, numere naturale, ordonate strict crescător. Să se afișeze, în ordine crescătoare, multiplii lui x care se află doar în unul dintre cele două șiruri.<br />
                    Pe prima linie se citește numărul x, pe linia a doua numărul n; urmează n numere naturale, ordonate crescător, ce pot fi dispuse pe mai multe linii. Linia următoare conține numărul m și urmează m numere naturale, ordonate crescător, ce pot fi dispuse pe mai multe linii.<br />
                    Se vor afișa valorile determinate, separate printr-un spațiu.
                    <br /><br />
                    Mențiuni:<br />
                    0 &lt; x &lt; 1.000.000<br />
                    1 ≤ n, m ≤ 100.000<br />
                    valorile elementelor celor două șiruri vor fi mai mici decât 1.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5  <br />7 <br />1 2 3 4  <br />7 20 60<br />9<br />3 5 7<br />8 9 10 12<br />20 24

                    </h4>
                    <h4> Date de iesire: <br />5 10 60
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Interclasare X" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Interclasare X"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Numarul lipsa"
            testPassed={testPassed}
        />
    )
}

export default InterclasareX