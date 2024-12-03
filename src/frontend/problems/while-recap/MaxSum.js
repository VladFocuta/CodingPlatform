import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function MaxSum() {
    const [testPassed, setTestPassed] = useState(false);


    const correctFormula = (a, b) => {
        if (typeof a === 'undefined' || typeof b === 'undefined') {
            return 'undefined';
        }
        let aMaxSum = 0;
        let bMaxSum = 0;
        let aCopy = a;
        let bCopy = b;

        while (a > 0) {
            let lastDigit = a % 10;
            aMaxSum += lastDigit;
            a = Math.floor(a / 10);
        }

        while (b > 0) {
            let lastDigit = b % 10;
            bMaxSum += lastDigit;
            b = Math.floor(b / 10);
        }

        if (aMaxSum > bMaxSum) {
            return aCopy;
        } else if (bMaxSum > aMaxSum) {
            return bCopy;
        } else {
            return "SUMELE SUNT EGALE";
        }

    };

    const testCases = [
        { params: [1, 1] },
        { params: [100, 1001] },
        { params: [9229, 982] },
        { params: [1000000000, 83138] }
    ];
    const testCasesCount = testCases.length;

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se primesc ca parametri, doua numere naturale <strong style={{ color: '#00bfff' }}>a</strong> si <strong style={{ color: '#00bfff' }}>b</strong>.
                    <br />
                    Sa se returneze numarul care are suma cifrelor mai mare.<br /><br />
                    Mentiuni: 1 ≤ a, b ≤ 1 000 000 000<br /> In cazul in care sumele sunt egale, sa se returneze <strong style={{ color: '#00bfff' }}>SUMELE SUNT EGALE</strong>.
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 803 88
                        <br />
                    </h4>
                    <h4> Date de iesire: 88
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test correctFormula={correctFormula}
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    testCassesCount={testCasesCount}
                    problemName="Suma maxima" />
            </div>
        </>
    )



    return (
        <ProblemPage
            problemName="Suma maxima"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default MaxSum