import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function PPow() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '7', '100 100000 1 100000 1000 100 10'], expected: '1000' },
        { params: ['3', '2', '100 100000'], expected: 'Nu exista' },
        { params: ['7', '7', '100 100000 1 100000 1000 100 10'], expected: '100000' },
        { params: ['1', '7', '100 100000 1 100000 1000 100 10'], expected: '1' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se dă un număr natural n (1 ≤ n ≤ 10<sup>6</sup> ) și un șir cu x elemente, numere naturale de forma 10<sup>p</sup> (0 ≤ p ≤ 9).
                    Se cere să se afișeze numărul care ar apărea pe poziția n în șirul ordonat crescător. Dacă șirul are mai puțin de n termeni, se afișează mesajul <strong style={{ color: 'red' }}>Nu exista</strong>.<br />
                    Pe prima linie se citește numărul n, iar pe a doua linie cele x elemente, separate prin spații.<br />
                    Se va afișa numărul care ar apărea pe poziția n în șirul ordonat crescător sau mesajul <strong style={{ color: 'red' }}>Nu exista</strong>, dacă șirul are mai puțin de n termeni.<br />

                    <br />
                    Mențiuni:<br />
                    1 ≤ x ≤ 1.000.000<br />
                    Pentru determinarea numărului cerut se utilizează un algoritm eficient din punctul de vedere al timpului de executare. Se recomandă evitarea memorării valorilor elementelor din șir într-un tablou sau în altă structură de date similară.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />7 7 <br /> 100 100000 1 100000 1000 100 10

                    </h4>
                    <h4> Date de iesire: <br />100000
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="P Puteri" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="P Puteri"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Progresie R"
            testPassed={testPassed}
        />
    )
}

export default PPow