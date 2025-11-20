import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function PointersInterchange() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['132 768'], expected: 'a = 768 \n b = 132' },
        { params: ['0 1'], expected: 'a = 1 \n b = 0' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care, folosind NUMAI pointerii, schimbă valorile a doua variabile a și b între ele.<br />
                    Cele două variabile se citesc de la tastatură.<br />
                    Afișează valoarea lui a si b ca în exemplul de mai jos.
                    <br /><br />

                    Exemplu:

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 132 768
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />
                        <strong style={{ color: 'red' }}>a =  </strong> 768<br />
                        <strong style={{ color: 'red' }}>b =  </strong> 132
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Interschimbare cu pointeri" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Interschimbare cu pointeri"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Pointeri si tablouri"
            testPassed={testPassed}
        />
    )
}

export default PointersInterchange