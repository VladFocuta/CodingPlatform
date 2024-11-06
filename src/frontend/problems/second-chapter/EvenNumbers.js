import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function EvenNumbers() {
    const [testPassed, setTestPassed] = useState(false);

    const correctFormula = (number) => {
        if (typeof number === 'undefined') {
            return 'undefined';
        }
        let counter = 0;
        while (number >= 1) {
            if (number % 2 === 0) {
                ++counter;
            }
            number -= 1;
        }
        return counter;
    };

    const testCases = [
        { params: [1] },
        { params: [122] },
        { params: [45] },
        { params: [34321] }
    ];
    const testCasesCount = testCases.length;

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se primeste ca parametru, variabila  <strong style={{ color: '#00bfff' }}>number</strong>.
                    <br />
                    Trebuie sa aflam cate numere pare se regasesc intre 1 si <strong style={{ color: '#00bfff' }}>number</strong>.<br /> Sa se afiseze totalul de numere gasite.<br />
                    <br />
                    Mentiuni: 1 ≤ number ≤ 100 000 
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 23
                        <br />
                    </h4>
                    <h4> Date de iesire: 11
                    </h4>
                </div> <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 1
                        <br />
                    </h4>
                    <h4> Date de iesire: 0
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test correctFormula={correctFormula}
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    testCassesCount={testCasesCount}
                    problemName="Numerele pare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numerele pare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Concatenation"
            testPassed={testPassed}
        />
    )
}

export default EvenNumbers
