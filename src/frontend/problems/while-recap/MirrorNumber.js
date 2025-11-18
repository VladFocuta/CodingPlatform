import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function MirrorNumber() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [3492], expected: [2943] },
        { params: [10], expected: [1] },
        { params: [1000], expected: [1] },
        { params: [0], expected: [0] },
        { params: [1001], expected: [1001] },
        { params: [992129], expected: [921299] },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care citeste un numar intreg pozitiv si calculeaza oglinditul acestuia. Oglinditul unui numar este format prin inversarea cifrelor sale. <br />                    
                 
                    Numarul se citeste de la tastatura. Dupa calcul, programul va afisa numarul oglindit.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 3492
                        <br />
                    </h4>
                    <h4> Date de iesire: 2943
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Oglindire" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Oglindire"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Factori primi"
            testPassed={testPassed}
        />
    )
}

export default MirrorNumber