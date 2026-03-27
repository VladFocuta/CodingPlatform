import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function QQuestions() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['10', '-2 4 4 4 7 7 7 7 8 11', '4', '1 5 2 5 3 7 3 9'], expected: '4 \n 6 \n 4 \n 0' },
        { params: ['10', '-2 4 4 4 7 7 7 7 8 11', '4', '1 11 2 11 3 -2 3 4'], expected: '10 \n0 \n1 \n3' },
        { params: ['10', '-2 4 4 4 7 7 7 7 8 11', '3', '1 -3 2 -3 3 -1'], expected: '0 \n10\n0' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se dă un șir ordonat crescător a1, a2, …, an de numere întregi. Asupra șirului putem efectua trei tipuri de interogări:<br />
                    1 x – Câte numere din șir sunt mai mici sau egale decât x?<br />
                    2 x – Câte numere din șir sunt mai strict mai mari decât x?<br />
                    3 x – De câte ori apare în șir valoarea x?<br />
                    Să se răspundă la Q interogări.<br />
                    Pe prima linie se citește numărul n, pe a doua linie n numere naturale separate prin câte un spațiu, elementele șirului. Pe a treia linie se află un număr natural Q, iar pe următoarele Q linii se găsesc câte două numere op x, unde op este numărul operației.<br />
                    Se vor afișa exact Q linii. Pe fiecare linie i, i=1..Q, se va afla un singur număr natural reprezentând răspunsul la a i-a interogare.
                    <br /><br />
                    Mențiuni:<br />
                    1 ≤ n ≤ 50.000<br />
                    3 ≤ Q ≤ 100.000<br />
                    numerele din șir sunt în ordine crescătoare și sunt cuprinse între -1.000.000.000 și 1.000.000.000.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />10 <br />-2 4 4 4 7 7 7 7 8 11 <br /> 4 <br />1 5<br />2 5<br />3 7<br />3 9

                    </h4>
                    <h4> Date de iesire: <br />4<br />6<br />4<br />0
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Q interogari" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Q interogari"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Q interogari2"
            testPassed={testPassed}
        />
    )
}

export default QQuestions