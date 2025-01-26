import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function GeneratePrimeNumbers() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [12], expected: [2, 3, 5, 7, 11] },
        { params: [3], expected: [2] },
        { params: [56], expected: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53] }
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Scrie un program care afiseaza toate numerele prime mai mici decat un numar n dat de utilizator. <br />
                    Se citeste numarul n de la tastatura si apoi se afiseaza numerele cu spatiu intre ele.

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 10
                        <br />
                    </h4>
                    <h4> Date de iesire: 2 3 5 7
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Generare numere" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Generare numere"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Factorialul unui numar"
            testPassed={testPassed}
        />
    )
}

export default GeneratePrimeNumbers