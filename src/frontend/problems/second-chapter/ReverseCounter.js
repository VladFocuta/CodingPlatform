import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function ReverseCounter() {
    const [testPassed, setTestPassed] = useState(false);

    const correctFormula = (number) => {
        if (typeof number === 'undefined') {
            return 'undefined';
        }
        while (number >= 1) {
            console.log(number);
            number -= 1;
        }
        return number;
    };

    const testCases = [
        { params: [10] },
        { params: [1] },
        { params: [5] }
    ];
    const testCasesCount = testCases.length;

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se primeste un parametru, <strong style={{ color: '#00bfff' }}>number,</strong> cu valorea intre 1 si 10.
                    <br />
                    Folosește o buclă while pentru a afișa numerele de la <strong style={{ color: '#00bfff' }}>number </strong> la 1 în ordine descrescătoare.<br />
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 4
                        <br />
                    </h4>
                    <h4> Date de iesire:<br />
                        4<br />3<br />2<br />1

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
            problemName="Numaratoare inversa"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Counter"
            testPassed={testPassed}
        />
    )
}

export default ReverseCounter