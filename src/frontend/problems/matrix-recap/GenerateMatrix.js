import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function GenerateMatrix() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4'], expected: '8' },
        { params: ['1'], expected: '1' },
        { params: ['6'], expected: '18' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da un numar n. Sa se genereze o matrice de dimensiunea n x n. Elementele matricei vor fi formate din indicele randurilor + indicele coloanelor.
                    Programul va afisa cate numere pare s-au generat.
                    <br />
                    Pe prima linie se citeste numarul n.<br />
                    Se va afisa numarul total de elemente pare.<br />
                    0 se va calcula ca fiind numar par.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 6

                    </h4>
                    <h4> Date de iesire: <br /> 18</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Generare matrice" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Generare matrice"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Interschimbare linii"
            testPassed={testPassed}
        />
    )
}

export default GenerateMatrix