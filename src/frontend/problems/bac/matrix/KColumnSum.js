import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function KColumnSum() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '5', '4', '2 4 5 -8 1 3 7 9 4 -2 3 10 5 4 2 37 6 7 3 13'], expected: '5' },
        { params: ['12', '5', '4', '2 4 5 -8 1 3 7 9 4 -2 3 12 5 4 12 37 6 7 3 13'], expected: '7' },
        { params: ['100', '2', '2', '2 3 4 5'], expected: 'NU EXISTA' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Scrieţi un program care citeşte un tablou bidimensional cu m linii şi n coloane şi un număr k şi determină suma indicilor coloanelor care conţin valoarea k.<br />
                    Pe prima linie se citesc numerele k, m şi n, iar pe următoarele m linii câte n numere naturale separate prin spaţii, reprezentând elementele tabloului.<br />
                    Se va afişa suma cerută. Dacă nu există în matrice valoarea k, se va afişa mesajul <strong style={{ color: 'red' }}>NU EXISTA</strong>.<br /><br />
                    Mențiuni:<br />
                    2≤m,n≤10<br />
                    valoarea lui k şi elementele matricei sunt numere întregi cu cel mult 4 cifre<br />
                    liniile sunt numerotate de la 1 la m, iar coloanele de la 1 la n.
                    <br /><br />

                    Exemplu: <br />

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />12 5 4<br /> 2 4 5 -8<br />1 3 7 9 <br /> 4 -2 3 12 <br /> 5 4 12 37 <br /> 6 7 3 13
                    </h4>
                    <h4> Date de iesire: <br />7</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma coloanelor k" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Suma coloanelor k"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Linii si coloane de suma egala"
            testPassed={testPassed}
        />
    )
}

export default KColumnSum