import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function FindElements() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '3', '1 20 21 4 30 5 7 8 40', '3', '2', '40', '21'], expected: 'NU DA DA' },
        { params: ['3', '4', '1 20 21 2 4 30 5 100 7 8 40 123', '1', '1111'], expected: 'NU' },
        { params: ['3', '4', '1 20 21 2 4 30 5 100 7 8 40 123', '1', '123'], expected: 'DA' },
        { params: ['2', '2', '2 4 0 1', '4', '2', '4', '0', '1'], expected: 'DA DA DA DA' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice n x m si q numere intregi. Pentru fiecare dintre acestea, sa se determine daca apare pe fiecare linie a matricei.
                    <br />
                    Pe prima linie se citeste numarul n, apoi m.<br />
                    Pe a doua linie se citesc elementele matricei.<br />
                    Pe a treia linie se va citi numarul q, urmat de q numere.<br />
                    Pentru fiecare dintre cele q numere intregi, sa se afiseze <strong style={{ color: 'red' }}>DA</strong> daca se regasesc in matrice sau <strong style={{ color: 'red' }}>NU</strong> in caz contrar.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 3 3 <br /> 1 20 21 <br /> 4 30 5 <br /> 7 8 40<br /> 3 <br /> 2 40 21

                    </h4>
                    <h4> Date de iesire: <br /> NU <br /> DA <br /> DA</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Gaseste elementii" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Gaseste elementii"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Rotire la 90 de grade"
            testPassed={testPassed}
        />
    )
}

export default FindElements