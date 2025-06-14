import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function PrimeInterval() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['10', '25'], expected: '11 13 17 19 23' },
        { params: ['1', '100'], expected: '1 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Să se afişeze toate numerele prime situate în intervalul p - q, precum
                    numărul acestora, unde p şi q sunt două numere naturale date.<br />
                    p si q se citesc de la tastatura.
                    <br />

                    Exemplu:

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 10 25 
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br /> 11 13 17 19 23
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Intervalul primelor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Intervalul primelor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default PrimeInterval