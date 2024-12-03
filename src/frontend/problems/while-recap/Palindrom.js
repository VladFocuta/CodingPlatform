import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Palindrom() {
    const [testPassed, setTestPassed] = useState(false);

    const correctFormula = (number) => {
        if (typeof number === 'undefined') {
            return 'undefined';
        }
        let copieNumber = number;
        let palindrom = 0;
        while (number > 0) {
            const ultimaCifra = number % 10;
            palindrom = (palindrom * 10) + ultimaCifra;
            number = Math.floor(number / 10);
        }
        if (palindrom === copieNumber) {
            return "DA";
        } else {
            return "NU";
        }

    };

    const testCases = [
        { params: [121] },
        { params: [10] },
        { params: [9229] },
        { params: [83138] },
        { params: [1] }
    ];
    const testCasesCount = testCases.length;

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se primeste ca parametru, variabila  <strong style={{ color: '#00bfff' }}>number</strong>.Trebuie sa verificam daca numarul este un palindrom.
                    <br />
                    Un palindrom este un șir de caractere (de obicei cuvinte, fraze sau numere) care citit de la stânga la dreapta sau de la dreapta la stânga rămâne neschimbat.
                    <br />
                    Sa se returneze <strong style={{ color: '#00bfff' }}>DA</strong> in cazul in care este un palindrom sau <strong style={{ color: '#00bfff' }}>NU</strong> in caz contrar.<br />
                    Mentiuni: 1 ≤ number ≤ 1 000 000
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 124
                        <br />
                    </h4>
                    <h4> Date de iesire: <strong style={{ color: '#00bfff' }}>NU</strong>
                    </h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 121
                        <br />
                    </h4>
                    <h4> Date de iesire: <strong style={{ color: '#00bfff' }}>DA</strong>
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test correctFormula={correctFormula}
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    testCassesCount={testCasesCount}
                    problemName="Palindrom" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Palindrom"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/MaxSum"
            testPassed={testPassed}
        />
    )
}

export default Palindrom