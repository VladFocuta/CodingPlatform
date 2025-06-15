import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function DecompPrimeFactors() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3268'], expected: '3268 | 2 \n1634 | 2 \n817 | 19 \n43 | 43 \n1 | ' },
        { params: ['256'], expected: '256 | 2 \n128 | 2 \n64 | 2 \n32 | 2 \n16 | 2 \n8 | 2 \n4 | 2 \n2 | 2 \n 1 | ' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Să se scrie un program care determină descompunerea în factori primi ai
                    unui număr natural nenul dat.<br />
                    Numarul este citit de la tastatura.<br />
                    Afisarea se va face ca in exemplul de mai jos.
                    <br /><br />

                    Exemplu:

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 3268
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br /> 3268 | 2 <br /> 1634 | 2 <br /> 817 | 19 <br /> 43 | 43 <br />1 | 
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Descompunere in factori primi" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Descompunere in factori primi"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default DecompPrimeFactors