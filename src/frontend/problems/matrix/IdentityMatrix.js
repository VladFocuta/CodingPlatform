import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function IdentityMatrix() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4'], expected: '1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1' },
        { params: ['1'], expected: '1' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice patratica N x N de identitate. O matrice de identitate are valoarea 1 pe diagonala principala si 0 in rest.<br />
               
                    Pe prima linie se citeste numarul intreg N (1 ≤ N ≤ 100), reprezentand dimensiunile matricei.<br />
                    Programul va afisa matricea generata.
                    <br /><br />
 
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 4
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> 1 0 0 0<br /> 0 1 0 0 <br />0 0 1 0 <br /> 0 0 0 1
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Matrice de identitate" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Matrice de identitate"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Inlocuirea unei coloane"
            testPassed={testPassed}
        />
    )
}

export default IdentityMatrix