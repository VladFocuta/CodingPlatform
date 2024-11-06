import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function Ascending3() {
    const [testPassed, setTestPassed] = useState(false);

    const correctFormula = (a, b, c) => {
        if (typeof a === 'undefined' || typeof b === 'undefined' || typeof c === 'undefined') {
            return 'undefined';
        }
        if (a >= b && b >= c) return [c, b, a];
        if (a >= c && c >= b) return [b, c, a];
        if (b >= a && a >= c) return [c, a, b];
        if (b >= c && c >= a) return [a, c, b];
        if (c >= a && a >= b) return [b, a, c];
        if (c >= b && b >= a) return [a, b, c];
    };

    const testCases = [
        { params: [202, -22, 33] },// mare, micut , mic
        { params: [122, 122, 122] }, // egal, egal ,egal
        { params: [10, 66, 0] }, //mic, mare, micut
        { params: [200, 100, 30] },// mare,mic, micut
        { params: [40, 100, 300] },//micut, mic, mare
        { params: [40, 300, 100] },// micut, mare, mare
        { params: [20, 10, 40] },//mic, micut, mare  a > b && b < c
        { params: [20, 20, 40] },
        { params: [20, 10, 10] },
        { params: [20, 10, 20] },

    ];
    const testCasesCount = testCases.length;
    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se primesc ca parametri, trei numere <strong style={{ color: '#00bfff' }}>a</strong>, <strong style={{ color: '#00bfff' }}>b </strong>si <strong style={{ color: '#00bfff' }}>c</strong>.
                    <br />
                    Sa se afiseze numerele in ordine crescatoare, cu spatiu intre ele.<br />
                    <br />
                    Mentiuni: -1 000 000 ≤ a, b ≤ 1 000 000
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 12 -100 1225

                        <br />
                    </h4>
                    <h4> Date de iesire: -100, 12, 1225
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test correctFormula={correctFormula}
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    testCassesCount={testCasesCount}
                    problemName="Ordonam crescator 2.0"
                />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Ordonam crescator 2.0"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            lecture={false}
            testPassed={testPassed}
        />
    )
}

export default Ascending3