import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function Clasament() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '120 100 80 80', '3', '60 90 110'], expected: '4 \n 3 \n 2' },
        { params: ['3', '9 6 4', '3', '2 4 6'], expected: '4 \n 3 \n 2' },
        { params: ['5', '1000000000 125342 100000 99999 123', '2', '99999 1000000000'], expected: '4 \n 1' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Un jucător de jocuri video pe calculator vrea să ajungă primul în clasament. El cunoaște punctajele celorlalți jucători și vrea să știe care este poziția sa în clasament după fiecare rundă a jocului. Jucătorul cu cel mai mare punctaj este clasat pe prima poziție. Dacă sunt jucători cu același punctaj se consideră că se află pe același loc clasament.<br />
                    De exemplu: dacă sunt 4 jucători cu punctajele: 120, 100, 80, 80 clasamentul celor 4 jucători este 1, 2, 3, 3.<br />
                    Se citește de la tastură numărul natural n care reprezintă numărul de jucători și n numere naturale care reprezintă punctajele celor n jucători. Apoi se citește numărul r care reprezintă numărul de runde pe care le-a jucat jucătorul și apoi r numere naturale care reprezintă punctajele obținute.<br />
                    Programul va afișa pe ecran, pe câte o linie, r valori, reprezentând poziția în clasament pentru fiecare dintre cele r runde de joc.
                    <br /><br />
                    Mențiuni:<br />
                    1 ≤ r,n ≤ 200000<br />
                    punctajele jucătorilor vor fi mai mici decât 1.000.000.000<br />
                    cele n valori ale jucătorilor se află în ordine descrescătoare în clasament<br />
                    valorile celor r runde sunt în ordine crescătoare.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />4 <br /> 120 100 80 80 <br /> 3 <br />60 90 110

                    </h4>
                    <h4> Date de iesire: <br />4<br />3<br />2
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Clasament" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Clasament"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Q interogari"
            testPassed={testPassed}
        />
    )
}

export default Clasament