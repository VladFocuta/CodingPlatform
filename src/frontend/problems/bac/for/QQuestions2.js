import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'
function QQuestions2() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '3', '1 2 3 4 5', '6 17 5'], expected: '3 \n 5 \n 2' },
        { params: ['6', '3', '20 10 35 77 100 984', '100 60 1000'], expected: '3 \n2 \n5' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se consideră un șir de numere naturale nenule a[1], a[2], ..., a[n]. Asupra șirului se efectuează Q interogări de forma: care este numărul maxim de elemente ale șirului a căror sumă nu depășește valoarea S ?<br />
                    Trebuie să răspundeți la cele Q interogări.<br />
                    Pe prima linie se citesc numerele n și Q. Pe a doua linie n numere naturale nenule, separate prin spații, ce reprezintă elementele șirului. Pe următoarele Q linii se află sumele aferente celor Q interogări.<br />
                    Se vor afișa pe câte o linie răspunsurile la cele Q interogări.
                    <br /><br />
                    Mențiuni:<br />
                    1 ≤ n ≤ 10.000<br />
                    1 ≤ Q ≤ 100.000<br />
                    1 ≤ S ≤ 2.000.000.000<br />
                    numerele de pe a doua linie a fișierului de intrare vor fi mai mici decât 1.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 3 <br /> 1 2 3 4 5 <br /> 6 <br />17 <br />5

                    </h4>
                    <h4> Date de iesire: <br />3<br />5<br />2
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Q interogari2" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Q interogari2"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default QQuestions2