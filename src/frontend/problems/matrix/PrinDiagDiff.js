import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function PrinDiagDiff() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '20 2 3 4 30 6 7 8 40'], expected: '-50' },
        { params: ['3', '0 2 3 4 0 6 7 8 0'], expected: '0' },
        { params: ['1', '1'], expected: '1' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice patratica n x n (cu n ≤ 10). Scrie un program care calculeaza si afiseaza diferenta elementelor de pe diagonala principala.
                    <br />
                    Pe prima linie se citeste numarul n, dimensiunea matricei.<br />
                    Urmatoarele n linii contin cate n numere intregi, reprezentand elementele matricei.<br />
                    Programul va afisa diferenta elementelor de pe diagonala principala.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 3 <br /> 20 2 3 <br /> 4 30 6 <br /> 7 8 40
                        <br />
                    </h4>
                    <h4> Date de iesire: -50
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Diferenta diagonalei principale" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Diferenta diagonalei principale"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Minim pe diagonala secundara"
            testPassed={testPassed}
        />
    )
}

export default PrinDiagDiff