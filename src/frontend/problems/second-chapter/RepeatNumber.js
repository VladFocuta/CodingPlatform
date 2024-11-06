import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function RepeatNumber() {
    const [testPassed, setTestPassed] = useState(false);

    const correctFormula = (a, b) => {
        if (typeof a === 'undefined' || typeof b === 'undefined') {
            return 'undefined';
        }
        let counter = 0;
        while (a > 0) {
            const lastDigit = a % 10;
            if (lastDigit === b) {
                ++counter;
            }
            a = Math.floor(a / 10);
        }
        return counter;
    };

    const testCases = [
        { params: [1, 1] },
        { params: [122, 2] },
        { params: [450100, 0] },
        { params: [39929, 9] }
    ];
    const testCasesCount = testCases.length;

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se primesc ca parametri, doua numere. Trebuie sa aflam de cate ori se regaseste al doilea numar in primul.
                    <br />
                    Primul numar este reprezentat de variabila <strong style={{ color: '#00bfff' }}>a</strong>, iar al doilea de variabila <strong style={{ color: '#00bfff' }}>b</strong>. <br />Al doilea numar este format dintr-o singura cifra. <br />Sa se returneze de cate ori a fost gasit.<br />
                    <br />
                    Mentiuni: 1 ≤ a ≤ 1 000 000 si 0 ≤ b ≤ 9
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 24321 2
                        <br />
                    </h4>
                    <h4> Date de iesire: 2
                    </h4>
                </div> <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 32982919 9
                        <br />
                    </h4>
                    <h4> Date de iesire: 3
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test correctFormula={correctFormula}
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    testCassesCount={testCasesCount}
                    problemName="Numere repetate" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numere repetate"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Return"
            testPassed={testPassed}
        />
    )
}

export default RepeatNumber