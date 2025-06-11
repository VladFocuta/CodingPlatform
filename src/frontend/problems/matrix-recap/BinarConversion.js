import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function BinarConversion() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '7', '1 0 0 1 1 0 1 \n0 1 1 0 1 1 1 \n1 1 1 0 1 0 1 '], expected: '77 55 117' },
        { params: ['4', '7', '1 0 0 1 1 0 1 \n0 1 1 0 1 1 1 \n1 1 1 0 1 0 1 \n1 1 1 1 1 1 1 '], expected: '77 55 117 127' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un tablou bidimensional cu n linii şi m coloane (1 ≤ n, m ≤ 50) având
                    componente binare.
                    <br />
                    Fiecare linie constituie reprezentarea câte unui număr
                    natural în baza 2. Se cere să se afişeze aceste numere.<br />

                    Pe prima linie se citeste numarul n, apoi m.<br />
                    Pe a doua linie se citesc elementele matricei formate din 1 si 0.<br /><br />

                    In exemplu, s-a afișat 77, 55, 117 pentru că fiecare linie a matricei reprezintă un număr binar, iar aceste numere au fost convertite în baza 10 (zecimal).
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 3 7 <br />  1 0 0 1 1 0 1 <br /> 0 1 1 0 1 1 1 <br /> 1 1 1 0 1 0 1

                    </h4>
                    <h4> Date de iesire: <br />77 55 117</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Conversie binara pe linii" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Conversie binara pe linii"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default BinarConversion