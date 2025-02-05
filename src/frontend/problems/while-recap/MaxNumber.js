import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function MaxNumber() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [98769], expected: 9},
        { params: [1], expected: 1},
        { params: [450100], expected: 5},
        { params: [145], expected: 5}
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care gaseste cea mai mare cifra dintr-un numar natural.<br />
                    Numarul se citeste de la tastatura si dupa ce cifra a fost gasita, se va afisa.<br />
                    <br />
                    Mentiuni: 1 ≤ numar ≤ 1 000 000
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 173045
                        <br />
                    </h4>
                    <h4> Date de iesire: 7
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test 
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numar maxim" />
            </div>
        </>
    )


    return (
        <ProblemPage
            problemName="Numar maxim"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/CMMD"
            testPassed={testPassed}
        />
    )
}

export default MaxNumber