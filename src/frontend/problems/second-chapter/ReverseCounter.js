import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function ReverseCounter() {
    const [testPassed, setTestPassed] = useState(false);


    const testCases = [
        { params: [5], expected: [5, 4, 3, 2, 1, 0] },
        { params: [1, 0], expected: [1, 0] },
        { params: [12], expected: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0] }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care numara invers de la un numar dat pana la 0.
                    <br />
                    Numarul se citeste de la tastatura si apoi se va afisa numaratoarea cu spatiu intre numere.<br />
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 4
                        <br />
                    </h4>
                    <h4> Date de iesire:<br />
                        4 3 2 1 0

                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numaratoare inversa" />
            </div>
        </>
    )

    return (
        <ProblemPage
            problemName="Numaratoare inversa"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Numerele pare"
            testPassed={testPassed}
        />
    )
}

export default ReverseCounter