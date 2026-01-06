import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function SequenceReverse() {
 const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '1 1', '1 2', '1 3', '1 4', '1 5'], expected: '5 4 3 2 1' },
        { params: ['1', '1 42'], expected: '42' },
        { params: ['6', '1 0', '1 -1', '1 5', '1 -3', '1 8', '1 2'], expected: '2 8 -3 5 -1 0' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un număr natural n (0 &lt; n &lt; 101) și o secvență de n numere întregi.<br />
                    Să se inverseze ordinea elementelor secvenței folosind o stivă implementată manual.<br />
                    Să se afișeze fiecare element din stivă.<br />
                    De la tastatură se citește n – numărul de operații de tip PUSH.
                    <br /><br />

                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 5  <br />1 1 <br /> 1 2  <br /> 1 3 <br /> 1 4 <br /> 1 5
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />5 4 3 2 1
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Inversarea unei secvente" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Inversarea unei secvente"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Sir de frecventa"
            testPassed={testPassed}
        />
    )
}

export default SequenceReverse