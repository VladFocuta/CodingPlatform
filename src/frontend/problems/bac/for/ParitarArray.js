import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function ParitarArray() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '20 3 11 4 15 25 49 18 53 16'], expected: 'DA' },
        { params: ['3', '8 16 4 10 10 6'], expected: 'DA' },
        { params: ['3', '8 6 4 10 7 6'], expected: 'NU' },
        { params: ['3', '20 30 5 8 18 6'], expected: 'DA' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Un șir format din 2•n numere naturale se numește paritar dacă fiecare dintre primii săi n termeni fie are aceeași paritate cu oricare dintre ultimii săi n termeni,
                    fie este strict mai mic decât oricare număr de paritate diferită aflat printre aceștia.<br />
                    Dându-se un șir de 2•n numere naturale, să se afișeze mesajul <strong style={{ color: 'red' }}>DA</strong>, în cazul în care șirul este paritar, sau mesajul <strong style={{ color: 'red' }}>NU</strong>, în caz contrar.<br />
                    Proiectați un algoritm eficient din punctul de vedere al timpului de executare și al memoriei utilizate.<br />
                    Pe prima linie se va citi numărul n (1 ≤ n ≤ 250.000), iar pe a doua linie 2•n numere naturale mai mici decât 1.000.000 separate prin spații reprezentând elementele șirului.
                   
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />3<br /> 20 30 5 8 18 6


                    </h4>
                    <h4> Date de iesire: <br />DA</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Sir paritar" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Sir paritar"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Scara crescatoare"
            testPassed={testPassed}
        />
    )
}

export default ParitarArray