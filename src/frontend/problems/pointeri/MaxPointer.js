import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function MaxPointer() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '100 101 0 1001 1'], expected: '1001' },
        { params: ['1', '20'], expected: '20' },
        { params: ['6', '5 5 5 5 5 1'], expected: '5' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Folosind un vector și un pointer, determină valoarea maximă din vector.<br />
                    Lungimea și elementele vectorului se citesc de la tastatură.<br />
                    Să se afișeze cel mai mare element.
                    <br /><br />

                    Exemplu:

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 5<br /> 100 101 0 1001 1
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />
                        1001
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Valoarea maxima cu pointer" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Valoarea maxima cu pointer"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Inversarea vectorului"
            testPassed={testPassed}
        />
    )
}

export default MaxPointer