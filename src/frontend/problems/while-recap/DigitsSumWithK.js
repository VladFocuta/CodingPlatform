import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function DigitsSumWithK() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '2', '232', '451', '256', '200'], expected: '22' },
        { params: ['4', '3', '25', '16', '7', '21'], expected: '0' },
        { params: ['1', '1', '20'], expected: '0' },
        { params: ['5', '9', '9232', '9451', '9256', '9200', '9123'], expected: '83' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dau două numere naturale n și k, urmate de n numere naturale.<br />
                    Dacă prima cifră a numărului este egală cu k, atunci se calculează suma tuturor cifrelor acelui număr.<br />
                    Se citesc două numere naturale n și k. Apoi se citesc n numere naturale.<br />
                    Programul afișează pe ecran suma cifrelor a tuturor numerelor care au început cu cifra k.
                    <br /><br />

                    Exemplu:

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4 >Date de intrare: <br /> 4 2 <br />
                        232 451 256 200
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br /> 22
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma numerelor cu prima cifra k" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Suma numerelor cu prima cifra k"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Numarul de factori primi"
            testPassed={testPassed}
        />
    )
}

export default DigitsSumWithK