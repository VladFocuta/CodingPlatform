import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function AscendingVerify() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6 1 3 5 7 9 12'], expected: 'DA' },
        { params: ['5 2 4 4 6 8'], expected: 'NU' },
        { params: ['7 1 3 5 2 6 9 10'], expected: 'NU' },
        { params: ['1 7'], expected: 'DA' },
        { params: ['7 3 5 2 1 5 23 1'], expected: 'NU' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieţi un program care determină în mod eficient, din punct de vedere al timpului
                    de executare, dacă numerele şirului sunt în ordine strict
                    crescătoare. <br />
                    În caz afirmativ, programul va afişa pe ecran mesajul DA, altfel va afişa mesajul
                    NU.<br />
                    Pe prima linie se citeşte n (0 &lt; n &lt; 100000), lungimea şirului, urmat de cele n elemente.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />7<br /> 3 5 2 1 5 23 1


                    </h4>
                    <h4> Date de iesire: <br />NU</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Verificarea numerelor crescatoare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Verificarea numerelor crescatoare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default AscendingVerify