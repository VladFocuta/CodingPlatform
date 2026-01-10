import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function MaxNrAndApp() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['8', '2 1 0 7 7 5 9 9'], expected: '9 2' },
        { params: ['11', '2 5 3 1 5 8 9 2 7 3 4'], expected: '9 1' },
        { params: ['8', '3 7 7 2 7 1 5 7'], expected: '7 4' },
        { params: ['5', '4 4 4 4 4'], expected: '4 5' },
        { params: ['6', '0 0 0 0 0 0'], expected: '0 6' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieţi un program C++ care determină în mod eficient, din punct de vedere al timpului
                    de executare, cea mai mare cifră şi numărul de apariţii ale acesteia.<br />
                    Valorile determinate se vor afişa pe ecran, separate printr-un spaţiu.<br />
                    Pe prima linie se citeşte n (0 &lt; n &lt; 100000), urmat de cele n cifre.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />8<br /> 2 1 0 7 7 5 9 9


                    </h4>
                    <h4> Date de iesire: <br />9 2</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cifra maxima si nr de aparitii" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cifra maxima si nr de aparitii"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Determinarea numerelor cu aparitii multiple"
            testPassed={testPassed}
        />
    )
}

export default MaxNrAndApp