import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function Ascending() {
    const [testPassed, setTestPassed] = useState(false);

    const correctFormula = (a, b) => {

        if (typeof a === 'undefined' || typeof b === 'undefined') {
            return 'undefined';
        }
        if (a > b) {
            return [b, a];
        }
        if (b === a) {
            return [a, b];
        }
        if (a < b) {
            return [a, b];
        }

    };

    const testCases = [
        { params: [202, -22] },
        { params: [122, 122] },
        { params: [10, 66] }
    ];
    const testCasesCount = testCases.length;
    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se primesc ca parametrii, doua numere <strong style={{ color: '#00bfff' }}>a</strong> si <strong style={{ color: '#00bfff' }}>b</strong>.
                    <br />
                    Sa se afiseze numerele in ordine crescatoare, cu spatiu intre ele.<br />
                    <br />
                    Mentiuni: -1 000 000 ≤ a, b ≤ 1 000 000
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:  65 -32
                        <br />
                    </h4>
                    <h4> Date de iesire: -32, 65
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test correctFormula={correctFormula}
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    testCassesCount={testCasesCount} />
            </div>
        </>
    )

    return (
        <ProblemPage
        problemName="Ordonam crescator"
        problemPoints={1}
        problemContent={problemContent}
        nextRoute="/Ascending3"
        lecture={false}
        testPassed={testPassed}
    />
    )
}

export default Ascending