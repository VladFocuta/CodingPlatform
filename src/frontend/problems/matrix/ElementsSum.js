import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function ElementsSum() {
    const [testPassed, setTestPassed] = useState(false);
// def teste
    const testCases = [
        { params: ['3', '1 2 3 4 5 6 7 8 9 10'], expected: ['45'] },
        { params: ['1', '3'], expected: ['3'] },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice patratica n x n (cu n ≤10). Scrie un program care citeste matricea si afiseaza suma elementelor.
                    <br />
                    Pe prima linie se citeste numarul n, dimensiunea matricei.<br />
                    Urmatoarele n linii contin cate n numere intregi, reprezentand elementele matricei.<br />
                    Programul va afisa suma elementelor.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 3 <br /> 1 2 3 <br /> 4 5 6 <br /> 7 8 9
                        <br />
                    </h4>
                    <h4> Date de iesire: 45
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma elementelor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Suma elementelor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Nota maxima si minima"
            testPassed={testPassed}
        />
    )
}

export default ElementsSum