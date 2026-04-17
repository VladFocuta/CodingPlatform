import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function PrimNumbDelete() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6', '11 2 4 1 17 18'], expected: '4 1 18' },
        { params: ['5', '7 8 9 17 1'], expected: '8 9 1' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un vector cu n elemente numere naturale. Să se șteargă din vector toate elementele care sunt numere prime.<br />
                    Programul citește de la tastatură numărul n, iar apoi n numere naturale, separate prin spaţii, reprezentând elementele vectorul.<br />
                    Programul afișează pe ecran, separate prin spații, elementele vectorului obținut prin ștergerea elementelor prime.<br />
                    <br />
                    Menţiuni:
                    0 &lt; n &lt;= 1000<br />
                    elementele vectorului vor fi mai mici decât 2<sup>30</sup>
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 6  <br /> 11 2 4 1 17 18
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />4 18
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Eliminare numere prime" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Eliminare numere prime"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Eliminare minim"
            testPassed={testPassed}
        />
    )
}

export default PrimNumbDelete