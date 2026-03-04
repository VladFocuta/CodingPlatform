import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function Change() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['12587', '6', '3'], expected: '16587' },
        { params: ['12587', '6', '4'], expected: '62587' },
        { params: ['12587', '6', '0'], expected: '12586' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Subprogramul schimb are trei parametri:<br />
                    n şi x, prin care primeşte câte un număr natural n (0 ≤ n ≤ 10<sup>8</sup>) , x  (1 ≤ x ≤ 9);<br />
                    p, prin care primește un număr natural reprezentând poziția unei cifre a numărului n (0≤p). Pozițiile
                    cifrelor sunt numerotate de la dreapta la stânga, astfel: cifra unităților este pe poziția 0, cifra zecilor
                    este pe poziția 1 ș.a.m.d.<br />
                    Subprogramul transformă numărul n, înlocuind cifra de pe poziția p cu cifra x, și furnizează numărul
                    obținut tot prin parametrul n. Scrieţi definiţia completă a subprogramului.<br />
                    N, x şi p se vor citi de la tastatură şi după apelarea subprogramului, se va afişa noul n.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />12587 6 3


                    </h4>
                    <h4> Date de iesire: <br />16587</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Schimb" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Schimb"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Rest"
            testPassed={testPassed}
        />
    )
}

export default Change