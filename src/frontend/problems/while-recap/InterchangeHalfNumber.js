import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function InterchangeHalfNumber() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [3405], expected: [534] },
        { params: [3010], expected: [1030] },
        { params: [12], expected: [21] },
        { params: [10], expected: [1] },
        { params: [12345678], expected: [56781234] },
        { params: [1], expected: [1] }
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Scrie un program care interschimba prima jumatate a unui numar cu cealalta jumatate. Se garanteaza ca numarul are un numar par de cifre. <br />
                    Se citeste numarul de la tastatura si apoi se afiseaza noul numar.
                    <br /><br />
                   
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 453879
                        <br />
                    </h4>
                    <h4> Date de iesire: 879453
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Interschimbare doua jumatati" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Interschimbare doua jumatati"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default InterchangeHalfNumber