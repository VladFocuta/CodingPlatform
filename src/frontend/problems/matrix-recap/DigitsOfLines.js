import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function DigitsOfLines() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['2', '4', '0 0 1 2 0 4 0 7'], expected: '12 \n407' },
        { params: ['3', '3', '1 0 3 0 3 0 0 0 1'], expected: '103 \n 30 \n 1' },
        { params: ['3', '3', '0 0 0 1 0 0 0 0 0'], expected: '100' },
        { params: ['4', '4', '0 0 1 0 0 0 0 1 1 0 0 0 1 0 0 1'], expected: '10 \n 1 \n 1000 \n 1001' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citeşte o matrice A cu n linii şi m coloane, conţinând caracterele 0,
                    1, …, 9.<br />
                    Să se afişeze numerele ce se obţin din cifrele fiecărei linii.<br />
                    n, m şi elementele matricei se citesc de la tastatură.<br />
                    Să se afişeze numerele găsite.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 2 4<br /> 0 0 1 2 <br /> 0 4 0 7

                    </h4>
                    <h4> Date de iesire: <br /> 12 <br /> 407</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numere din liniile unei matrice de cifre" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numere din liniile unei matrice de cifre"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Linii egale"
            testPassed={testPassed}
        />
    )
}

export default DigitsOfLines