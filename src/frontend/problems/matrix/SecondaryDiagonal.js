import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function SecondaryDiagonal() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '15 26 3 20 9 23 99 1 132 8 12 0 212 30 99 122'], expected: '8' },
        { params: ['2', '9 -1000 -3 22'], expected: '-1000' },
        { params: ['2', '9 0 -3 22'], expected: '-3' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice patratica n x n (cu n ≤10). Scrie un program care indentifica cel mai mic element de pe diagonala secundara.
                    <br />
                    Pe prima linie se citeste numarul n, dimensiunea matricei.<br />
                    Urmatoarele n linii contin cate n numere intregi cu valori cuprinse intre (-1000 -&gt; 1000), reprezentand elementele matricei.<br />
                    Programul va afisa cel mai mic element de pe diagonala secundara.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 4 <br /> 15 26 3 20 <br /> 9 23 99 1 <br /> 132 8 12 0 <br /> 212 30 99 122
                        <br />
                    </h4>
                    <h4> Date de iesire: 8
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Minim pe diagonala secundara" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Minim pe diagonala secundara"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Extragerea unei submatrici"
            testPassed={testPassed}
        />
    )
}

export default SecondaryDiagonal