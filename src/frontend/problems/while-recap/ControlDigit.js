import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function ControlDigit() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['999'], expected: '9' },
        { params: ['1579'], expected: '4' },
        { params: ['10'], expected: '1' },
        { params: ['574897'], expected: '4' },
    ];
    
    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un număr natural n (0 &lt; n &lt; 10⁹). Se cere să se determine cifra de control a acestuia, obținută astfel:<br />
    
                &nbsp;&nbsp;Se calculează suma cifrelor numărului.<br />

                &nbsp;&nbsp;Dacă rezultatul are mai mult de o cifră, se repetă procesul: se calculează suma cifrelor rezultatului anterior.<br />

                &nbsp;&nbsp;Se repetă până când se obține o singură cifră.<br />

                &nbsp;&nbsp;Această cifră se numește cifra de control a numărului.
                    <br /><br />

                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 999
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br /> 9
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cifra de control" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cifra de control"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default ControlDigit