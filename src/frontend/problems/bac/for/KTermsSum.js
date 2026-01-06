import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function KTermsSum() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6 4 5 2 5 4 1 3'], expected: '17' },
        { params: ['6 3 3 -5 10 7 -2 8'], expected: '25' },
        { params: ['5 2 -10 -3 -7 -20 -1'], expected: '-4' },
        { params: ['4 4 1000 -999 500 -500'], expected: '1' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieţi definiţia completă a unui subprogram P, cu trei parametri, care primeşte prin
                    intermediul primului parametru, a, un tablou unidimensional de cel mult 100 de numere
                    întregi, cu cel mult 4 cifre fiecare.<br />
                    Prin intermediul celui de-al doilea parametru, n, numărul
                    efectiv de elemente ale tabloului, iar prin parametrul k, un număr natural (k &lt; 101) şi
                    returnează cea mai mare sumă de k termeni care se poate obţine adunând k elemente ale
                    tabloului.<br /><br />
                    Pe prima linie se citeşte n şi k, iar pe a doua linie cele n numere.<br />
                    Sa se afişeze suma returnată de subprogramul P.

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />6 4<br /> 5 2 5 4 1 3


                    </h4>
                    <h4> Date de iesire: <br />17</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cea mai mare suma de k termeni" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cea mai mare suma de k termeni"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Verificarea numerelor crescatoare"
            testPassed={testPassed}
        />
    )
}

export default KTermsSum