import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Triangle() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [5, 5, 5], expected: 'Echilateral' },

        { params: [5, 5, 3], expected: 'Isoscel' },
        { params: [3, 5, 5], expected: 'Isoscel' },
        { params: [5, 3, 5], expected: 'Isoscel' },

        { params: [7, 8, 10], expected: 'Scalene' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care citeste lungimile a trei laturi și determina daca aceste laturi pot forma un triunghi. Daca da, specificati tipul triunghiului:
                    <br />
                    <strong style={{ color: 'red' }}>Echilateral </strong>(toate laturile sunt egale).<br />
                    <strong style={{ color: 'red' }}>Isoscel </strong>(două laturi sunt egale).<br />
                    <strong style={{ color: 'red' }}>Scalene </strong>(toate laturile sunt diferite).<br />
                    <br />
                    Numerele sunt pozitive si rationale si vor fi citite de la tastatura.<br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 1 2 3

                        <br />
                    </h4>
                    <h4> Date de iesire: Scalene
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Triunghi valid"
                />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Triunghi valid"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Calculator"
            lecture={false}
            testPassed={testPassed}
        />
    )
}

export default Triangle