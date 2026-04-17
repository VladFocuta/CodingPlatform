import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function MinDelete() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7', '9 2 4 2 7 3 2'], expected: '9 4 7 3' },
        { params: ['7', '7 1 4 2 1 6 1'], expected: '7 4 2 6' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un vector cu n elemente numere naturale. Să se șteargă din vector toate elementele egale cu cea mai mică valoare din vector.<br />
                    Programul citește de la tastatură numărul n, iar apoi n numere naturale, separate prin spaţii, reprezentând elementele vectorul.<br />
                    Programul afișează pe ecran, separate prin spații, elementele vectorului obținut în urma ștergerilor.
                    <br /><br />
                    Menţiuni:
                    0 &lt; n &lt;= 1000<br />
                    elementele vectorului vor fi mai mici decât 2<sup>30</sup>
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 7  <br /> 9 2 4 2 7 3 2
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />9 4 7 3
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Eliminare minim" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Eliminare minim"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Eliminare numere repetate"
            testPassed={testPassed}
        />
    )
}

export default MinDelete