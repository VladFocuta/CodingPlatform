import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function MajorOdd() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['16', '30'], expected: '18' },
        { params: ['2', '10'], expected: '9' },
        { params: ['9', '15'], expected: '9' },
        { params: ['2', '5'], expected: '0' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Un număr natural se numește major impar dacă suma divizorilor săi proprii impari este strict mai mare decât
                    suma divizorilor săi proprii pari.<br />Divizorii proprii ai unui număr sunt divizorii săi naturali diferiți de 1 și de el însuși. <br />
                    Ca exemplu: 18 este număr major impar (divizorii săi proprii pari sunt 2, 6, cei impari 3, 9, iar 3+9 &gt; 2+6).<br />
                    Subprogramul majImp are doi parametri, a și b, prin care primește câte un număr natural (2≤a≤b≤104). <br />
                    Subprogramul returnează cel mai mic număr major impar din intervalul [a,b], sau valoarea 0, dacă în
                    interval nu există un astfel de număr.<br />
                    Scrieţi în C++ definiţia completă a subprogramului, iar după apelarea lui, se va afișa cel mai mic număr major impar sau valoarea 0,dacă nu există.

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />16 30 <br />


                    </h4>
                    <h4> Date de iesire: <br />18</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Major impar" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Major impar"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Schimb"
            testPassed={testPassed}
        />
    )
}

export default MajorOdd