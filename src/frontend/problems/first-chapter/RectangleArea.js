import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'


function RectangleArea() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [12, 25], expected: [300] },
        { params: [5, 5], expected: [25] },
        { params: [32, 10], expected: [320] }
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care calculeaza aria unui dreptunghi pe baza lungimii și latimii introduse de utilizator.
                    <br />
                    <strong style={{ color: '#00bfff' }}>Lungimea</strong> si <strong style={{ color: '#00bfff' }}>latimea</strong> se vor citi de la tastatura.
                    <br />
                    Sa se afiseze aria.<br /><br />
                    <h5 style={{ color: 'red' }}>Mentiuni:</h5>
                    Valorile lungimii si latimii sunt numere naturale.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 12 25
                        <br />
                    </h4>
                    <h4> Date de iesire: 300
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Aria unui dreptunghi" />
            </div>
        </>
    )
    return (
        <ProblemPage problemName="Aria unui dreptunghi"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Structuri de baze"
            testPassed={testPassed} />

    )
}

export default RectangleArea