import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Congruences() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['1999'], expected: '1807 \n1447 \n1087 \n727 \n367 \n7' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Să se afle toate numerele naturale mai mici decât 2000, care împărţite la<br />
                    24, 30, 18 dau restul 7.<br />
                    Fiecare număr va fi afișat pe o nouă linie.<br />
                   
                    <br />

                    Exemplu:<br />
                    1447:24=60 rest 7;<br /> 1447:30=48 rest 7,<br /> 1447:18=80
                    rest 7.
                </h4>



            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Congruente simultane cu acelasi rest" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Congruente simultane cu acelasi rest"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Intervalul primelor"
            testPassed={testPassed}
        />
    )
}

export default Congruences