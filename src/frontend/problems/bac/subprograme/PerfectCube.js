import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function PerfectCube() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5'], expected: '125 64 27 8 1' },
        { params: ['7'], expected: '343 216 125 64 27 8 1' },
        { params: ['1'], expected: '1' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Un număr natural n care se citește de la tastatură, se numește cub perfect dacă există un număr natural b, astfel încât n=b3.<br />
                    Subprogramul cuburi are un singur parametru, n, prin care primește un număr natural (n∈[1,10<sup>3</sup>]).<br />
                    Subprogramul afișează pe ecran, separate prin câte un spațiu, în ordine descrescătoare, primele n
                    cuburi perfecte nenule.<br />
                    Scrieți definiția completă a subprogramului.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5


                    </h4>
                    <h4> Date de iesire: <br />125 64 27 8 1</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cub perfect" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cub perfect"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Divizori primi la putere impara"
            testPassed={testPassed}
        />
    )
}

export default PerfectCube