import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function StackStimulating() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '1 10', '1 20', '2', '3'], expected: '10' },
        { params: ['6', '2', '3', '1 10', '2', '3', '2'], expected: 'Stiva goala \n Stiva goala' },
        { params: ['10', '1 1', '1 2', '1 3', '3', '2', '3', '1 4', '1 5', '2', '3'], expected: '3 \n 2 \n4' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă o secvență de operații asupra unei stive inițial goală.<br />
                    1 x → PUSH (adaugă valoarea x în stivă)<br />
                    2 → POP (elimină elementul din vârf, dacă există)<br />
                    3 → AFIȘEAZĂ elementul din vârf (dacă există)<br />
                    Să se simuleze aceste operații folosind o stivă implementată manual.<br /><br />
                    De la tastatură se citește n – numărul de operații și următoarele n linii conțin operațiile.<br />
                    Pentru fiecare operație de tip 3, afișează elementul din vârf.<br />
                    Dacă stiva este goală, afișează <strong style={{ color: 'red' }}>Stiva goala</strong>.
                    <br /><br />

                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 4  <br />1 10 <br /> 1 20  <br /> 2 <br /> 3
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />10
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Simulare stiva" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Simulare stiva"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Suma elementelor din stiva"
            testPassed={testPassed}
        />
    )
}

export default StackStimulating