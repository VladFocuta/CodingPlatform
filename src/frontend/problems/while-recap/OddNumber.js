import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function OddNumber() {
    const [testPassed, setTestPassed] = useState(false);
    
        const testCases = [
            { params: [48], expected: [3] },
            { params: [54], expected: [27] },
            { params: [1], expected: [1] },
            { params: [2], expected: [1] },
            { params: [123512], expected: [15439] },
            { params: [123513], expected: [123513] }
        ];

        const problemContent = (
            <>
                <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                    <h4>Scrie un program care citeste un numar întreg pozitiv si il imparte la 2 pana cand devine impar.
                        <br />
                        Numarul se citeste de la tastatura.
                        <br />
                        Sa se afiseze numarul cand a devenit impar.<br />
    
                        <br />
                        Exemplu:
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                        <h4>Date de intrare: 48 
                            <br />
                        </h4>
                        <h4> Date de iesire: 3
                        </h4>
                    </div>
    
    
                </div>
                <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                    <Test
                        testCases={testCases}
                        testPassedSet={setTestPassed}
                        problemName="Numar impar" />
                </div>
            </>
        )
        return (
            <ProblemPage
                problemName="Numar impar"
                problemPoints={1}
                problemContent={problemContent}
                nextRoute="/problems/Maxim si minim"
                testPassed={testPassed}
            />
        )
}

export default OddNumber