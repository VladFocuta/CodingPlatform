import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function MaxAndMin() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [3492], expected: "Max: 9 Min: 2" },
        { params: [2099], expected: "Max: 9 Min: 0" },
        { params: [999], expected: "Max: 9 Min: 9" },
        { params: [123], expected: "Max: 3 Min: 1" },
        { params: [321], expected: "Max: 3 Min: 1" },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care determina cea mai mare si cea mai mica cifra dintr-un numar. <br />
                    Numarul se citeste de la tastatura si apoi se va afisa cea mai mare si cea mai mica cifra.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 3492
                        <br />
                    </h4>
                    <h4> Date de iesire: <strong style={{ color: 'red' }}>Max: </strong> 9 <strong style={{ color: 'red' }}>Min: </strong> 2
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Maxim si minim" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Maxim si minim"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Produsul"
            testPassed={testPassed}
        />
    )
}

export default MaxAndMin