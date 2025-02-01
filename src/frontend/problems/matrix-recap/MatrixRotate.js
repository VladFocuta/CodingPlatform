import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function MatrixRotate() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '5', '6 1 8 1 1 3 1 4 2 3 4 1 3 8 5'], expected: '4 3 6 1 1 1 3 4 8 8 2 1 5 3 1' },
        { params: ['4', '4', '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16'], expected: '13 9 5 1 14 10 6 2 15 11 7 3 16 12 8 4' },
        { params: ['2', '2', '1 2 3 4'], expected: '3 1 4 2' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice n x m. Sa se roteasca cu 90° in sensul acelor de ceasornic matricea data.
                    <br />
                    Pe prima linie se citeste numarul n, apoi m.<br />
                    Pe a doua linie se citesc elementele matricei.<br />
                    Se va afisa matricea rotita la 90°.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 3 5 <br /> 6 1 8 1 1 <br /> 3 1 4 2 3 <br /> 4 1 3 8 5

                    </h4>
                    <h4> Date de iesire: <br /> 4 3 6 <br /> 1 1 1 <br /> 3 4 8 <br /> 8 2 1 <br /> 5 3 1</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Rotire la 90 de grade" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Rotire la 90 de grade"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Permutari la stanga"
            testPassed={testPassed}
        />
    )
}

export default MatrixRotate