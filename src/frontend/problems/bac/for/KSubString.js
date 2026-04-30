import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function KSubString() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['11', '3', '7 5 4 3 1 6 8 9 11 10 2'], expected: '3 1 4 7 2 6 8 5 11 10 9' },
        { params: ['5', '1', '3 99 0 5 12'], expected: '0 3 5 12 99' },
        { params: ['10', '5', '3 99 0 5 12 33 44 92 29 2'], expected: '3 44 0 5 2 33 99 92 29 12' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se dă un șir cu n elemente, numere naturale, numerotate începând cu 1 și un număr k. Considerăm k subșiruri ale șirului, astfel:<br />
                    primul subșir este format din elementele din șir numerotate cu 1, k+1, 2*k+1, …<br />
                    al doilea subșir este format din elementele din șir numerotate cu 2, k+2, 2*k+2, …<br />
                    …<br />
                    al k-lea subșir este format din elementele din șir numerotate cu k, 2*k, 3*k, …<br />
                    Ordonați crescător fiecare dintre aceste subșiruri și afișați șirul obținut.<br />
                    Programul citește de la tastatură numerele n și k, iar apoi n numere naturale, reprezentând elementele șirului.<br />
                    Programul va afișa pe ecran elementele șirului, separate prin exact un spațiu, după efectuarea operațiilor cerute.
                    <br /><br />
                    Explicație pentru exemplul de mai jos:<br />
                    Cele trei subșiruri sunt: (7 3 8 10), (5 1 9 2) și (4 6 11). După sortare, ele devin: (3 7 8 10), (1 2 5 9) și (4 6 11).

                    <br /><br />
                    Mențiuni:<br />
                    1 ≤ k &lt; n ≤ 1000<br />
                    cele n numere citite vor fi mai mici decât 1.000.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />11 3 <br /> 7 5 4 3 1 6 8 9 11 10 2

                    </h4>
                    <h4> Date de iesire: <br />3 1 4 7 2 6 8 5 11 10 9
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Subsiruri" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Subsiruri"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default KSubString