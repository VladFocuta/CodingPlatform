import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function PrimeFactorsNumb() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '17', '66', '46', '36'], expected: '66' },
        { params: ['5', '72', '30', '12', '75', '17'], expected: '30' },
        { params: ['2', '78', '102'], expected: '78' },
        { params: ['1', '204'], expected: '204' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citește un număr natural n (0 &lt; n &lt; 1001), urmat de n numere naturale nenule, fiecare mai mic decât 2 000 000 000.<br />
                    Pentru fiecare număr din șir se determină numărul de factori primi distincți din descompunerea sa în factori primi.<br />
                    Să se afișeze numărul din șir care are cel mai mare număr de factori primi distincți.<br />
                    Dacă în șir există mai multe numere cu același număr maxim de factori primi distincți, se va afișa cel mai mic dintre acestea.
                    <br /><br />

                    Exemplu:

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4 >Date de intrare: <br /> 4 <br />
                        17 66 46 36
                        <br />
                    </h4>
                    <h4 style={{ marginLeft: '10px' }}> Date de iesire:  <br /> 66<br /> <strong style={{ color: 'red' }}>factori primi distincți (2, 3, 11)</strong>
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numarul de factori primi" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numarul de factori primi"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default PrimeFactorsNumb