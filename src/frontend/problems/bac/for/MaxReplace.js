import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function MaxReplace() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '170 104 24 2500'], expected: '5200 42 410 710' },
        { params: ['5', '1234 253 9000 104 9999'], expected: '9999 410 9000 532 4321' },
        { params: ['1', '104263'], expected: '643210' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se dă un vector cu n numere naturale. Să se înlocuiască fiecare element cu cel mai mare număr care se poate obține din cifrele lui și să se afișeze elementele astfel obținute în ordine inversă.<br />
                    Programul citește de la tastatură numărul n, iar apoi n numere naturale, separate prin spaţii, reprezentând elementele vectorului.<br />
                    Programul afișează pe ecran elementele vectorului, după înlocuire, în ordine inversă, separate prin exact un spațiu.
                    <br /><br />
                    Mențiuni:<br />
                    1 ≤ n ≤ 200<br />
                    elementele vectorului vor fi cuprinse între 1 și 1.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />4 <br />170 104 24 2500

                    </h4>
                    <h4> Date de iesire: <br />5200 42 410 710
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Inlocuire maxim" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Inlocuire maxim"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Pachete de carti"
            testPassed={testPassed}
        />
    )
}

export default MaxReplace