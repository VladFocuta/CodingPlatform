import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function AbsoluteNumber() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [5], expected: [5] },
        { params: [0], expected: [0] },
        { params: [-6], expected: [6] }
    ];
    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care citeste un numar intreg de la tastatura si afisează valoarea sa absoluta.
                    <br />
                    Numarul se citeste de la tastatura.<br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: ∣5∣

                        <br />
                    </h4>
                    <h4> Date de iesire: 5
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numar absolut"
                />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numar absolut"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Conversia temperaturii"
            lecture={false}
            testPassed={testPassed}
        />
    )
}

export default AbsoluteNumber