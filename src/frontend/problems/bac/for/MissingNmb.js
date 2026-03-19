import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function MissingNmb() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['11', '12 2345 123 67 989 6 999 123 67 989 999'], expected: '998 997' },
        { params: ['11', '12 23 13 67 98 6 99 12 67 98 99'], expected: 'NU' },
        { params: ['7', '1231 900 999 998 786 555 899'], expected: '997 996' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se dau n numere naturale cu cel mult 9 cifre fiecare. Să se determine cele mai mari două numere de 3 cifre care nu se găsesc printre numerele date.<br />
                    Se citesc cel mult 100.000 de numere, dispuse pe mai multe linii, numerele de pe fiecare linie fiind separate prin unul sau mai multe spaţii.<br />
                    Se vor afișa cele mai mari două numere de trei cifre care nu apar în șir, ordonate descrescător, separate prin exact un spaţiu.
                    <br /><br />
                    Mențiuni:<br />
                    - dacă nu există două numere de trei cifre în șir, atunci se va afişa mesajul <strong style={{ color: 'red' }}>NU</strong>.<br />
                    1 ≤ n, m ≤ 100.000
                    
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />11 <br />12 2345 123 67 989 6 999 <br />123 67 989 999

                    </h4>
                    <h4> Date de iesire: <br />998 997
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numarul lipsa" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numarul lipsa"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Cifre descrescatoare"
            testPassed={testPassed}
        />
    )
}

export default MissingNmb