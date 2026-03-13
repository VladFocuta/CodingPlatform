import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function MountainNumber() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '15965 156 121 753'], expected: '1 \n 0 \n 1 \n 0' },
        { params: ['3', '111 123 12232'], expected: '0 \n 0 \n 0' },
        { params: ['3', '121 132 12432'], expected: '1 \n 1 \n 1' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Un număr este de tip “munte” dacă cifrele sale formează inițial un șir strict crescător, apoi un șir strict descrescător.<br />
                    Se dau n (1 ≤ n ≤ 10) numere naturale. Determinați, pentru fiecare dintre ele, dacă este de tip “munte”.<br />
                    Programul citește de la tastatură numărul n, iar apoi n numere naturale, separate prin spații.<br />
                    Programul afișează pentru fiecare dintre cele n numere citite, pe câte o linie a ecranului valoarea 1, dacă numărul corespunzător este de tip “munte”, respectiv valoarea 0 în caz contrar.<br />
                    <br /><br />
                    Mențiuni:<br />
                    - cele n numere citite vor fi mai mici decât 2.000.000.000<br />
                    - cele n numere citite vor fi mai mari decât 100<br />
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />4 <br />15965 156 121 753



                    </h4>
                    <h4> Date de iesire: <br />1<br />0<br />1<br />0</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numar munte" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numar munte"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default MountainNumber