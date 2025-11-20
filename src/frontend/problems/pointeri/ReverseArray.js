import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function ReverseArray() {
     const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7', '1 2 3 4 5 6 7'], expected: '7 6 5 4 3 2 1' },
        { params: ['1', '20'], expected: '20' },
        { params: ['6', '5 5 5 5 5 1'], expected: '1 5 5 5 5 5' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Folosind un pointer la primul element al vectorului, inversează vectorul (primele elemente schimbate cu ultimele) fără să folosești indecși normali.<br />
                    Lungimea și elementele vectorului se citesc de la tastatură.<br />
                    Să se afișeze elementele inversate.
                    <br /><br />

                    Exemplu:

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 7<br /> 1 2 3 4 5 6 7
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />
                        7 6 5 4 3 2 1
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Inversarea vectorului" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Inversarea vectorului"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default ReverseArray