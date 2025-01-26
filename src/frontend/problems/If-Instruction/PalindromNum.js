import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function PalindromNum() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [111], expected: "Numarul este palindrom" },
        { params: [122], expected: "Numarul nu este palindrom" },
        { params: [121], expected: "Numarul este palindrom" },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care verifica daca un numar întreg de 3 cifre este palindrom.<br />
                    Numarul se citeste de la tastatura si apoi se afiseaza <strong style={{ color: 'red' }}>Numarul este palindrom </strong>sau <strong style={{ color: 'red' }}>Numarul nu este palindrom</strong>.<br />
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 123

                        <br />
                    </h4>
                    <h4> Date de iesire: Numarul nu este palindrom
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Palindrom numeric"
                />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Palindrom numeric"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Triunghi valid"
            lecture={false}
            testPassed={testPassed}
        />
    )
}

export default PalindromNum