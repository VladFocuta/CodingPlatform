import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function NumbersSum() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [1234], expected: [10] },
        { params: [1], expected: [1] },
        { params: [3432132], expected: [18] },
        { params: [10], expected: [1] },
        { params: [91], expected: [10] }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care calculeaza suma cifrelor unui numar intreg pozitiv.
                    <br />
                    Numarul se va citi de la tastatura.<br />
                    Sa se afiseze suma.<br />
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 1234
                        <br />
                    </h4>
                    <h4> Date de iesire: 10
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma cifrelor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Suma cifrelor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Debugging"
            testPassed={testPassed}
        />
    )
}

export default NumbersSum
