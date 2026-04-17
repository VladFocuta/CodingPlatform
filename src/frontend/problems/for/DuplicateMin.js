import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function DuplicateMin() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7', '7 9 4 2 1 6 1'], expected: '7 9 4 2 1 1 6 1 1' },
        { params: ['6', '9 0 1 2 5 13'], expected: '9 0 0 1 2 5 13' },
        { params: ['6', '1 1 1 1 1 1'], expected: '1 1 1 1 1 1 1 1 1 1 1 1' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un vector cu n elemente numere naturale. Să se transforme vectorul, duplicând fiecare apariție a valorii minime.<br />
                    Programul citește de la tastatură numărul n, iar apoi n numere naturale, separate prin spaţii, reprezentând elementele vectorul.<br />
                    Programul afișează pe ecran, separate prin spații, elementele vectorului obținut în urma duplicărilor.
                    <br /><br />
                    Menţiuni:<br />
                    0 &lt; n ≤ 1000<br />
                    elementele vectorului vor fi mai mici decât 2<sup>30</sup>
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 7 <br />7 9 4 2 1 6 1
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> 7 9 4 2 1 1 6 1 1
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Duplicare minim" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Duplicare minim"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Bubble Sort"
            testPassed={testPassed}
        />
    )
}

export default DuplicateMin