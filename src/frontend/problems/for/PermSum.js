import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'
function PermSum() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '2 3 5'], expected: '1110' },
        { params: ['3', '2 5 4'], expected: '1221' },
        { params: ['7', '5 9 1 2 4 3 7'], expected: '34444441' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dau n cifre zecimale: a<sub>1</sub>, a<sub>2</sub>, … , a<sub>n</sub>. Determinaţi suma: S = a<sub>1</sub>a<sub>2</sub>...a<sub>n</sub> + a<sub>n</sub>a<sub>1</sub>...a<sub>n-1</sub> +...+a<sub>2</sub>a<sub>3</sub>...a<sub>n</sub>a<sub>1</sub>,
                    în care fiecare termen este obţinut prin permutarea circulară spre dreapta a cifrelor termenului precedent cu o poziţie.<br />
                    Pe prima linie se va citi numărul n, iar pe a doua linie cele n cifre separate prin spații.<br />
                    Se va afișa numărul S, reprezentând suma calculată.
                    <br /><br />
                    Menţiuni:<br />
                    2 ≤ n ≤ 9

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 3  <br />2 3 5
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />1110
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma permutari" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Suma permutari"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Inserarea unui element"
            testPassed={testPassed}
        />
    )
}

export default PermSum