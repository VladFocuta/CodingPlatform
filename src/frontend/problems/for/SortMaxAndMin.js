import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function SortMaxAndMin() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '10 20 15 7 12'], expected: '10 7 15 20 12' },
        { params: ['7', '0 55 3 1 12 9 66'], expected: '0 1 3 9 12 55 66' },
                        
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Să se ordoneze crescător elementele dintr-un şir dat cuprinse între elementul de valoare maximă şi cel de valoare minimă.<br />
                    Programul citește de la tastatură numărul n, iar apoi n numere naturale distincte, separate prin spaţii.<br />
                    Programul afișează pe ecran elementele şirului după ordonare.
                    <br /><br />
                    Menţiuni:
                    0 &lt; n &lt;= 1000<br />
                    cele n numere citite vor fi mai mici decât 1.000.000.000
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 5 <br />10 20 15 7 12
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />10 7 15 20 12
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Sortare intre maxim si minim" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Sortare intre maxim si minim"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Linear Search"
            testPassed={testPassed}
        />
    )
}

export default SortMaxAndMin