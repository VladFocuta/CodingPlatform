import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function InterchangeMinAndMax() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '3', '1 20 21 4 30 5 7 8 40'], expected: '7 8 40 4 30 5 1 20 21' },
        { params: ['3', '4', '50 20 120 1000 4 30 5 2 7 8 100 244'], expected: '4 30 5 2 50 20 120 1000 7 8 100 244' },
        { params: ['3', '4', '50 20 120 10 4 30 5 2 7 8 100 244'], expected: '50 20 120 10 7 8 100 244 4 30 5 2' },
        { params: ['2', '2', '3 4 5 6'], expected: '5 6 3 4' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice n x m cu toate elementele diferite. Sa se interschimbe liniile pe care se afla cel mai mic si respectiv cel mai mare element din matrice.
                    <br />
                    Pe prima linie se citeste numarul n, apoi m.<br />
                    Se va afisa noua matrice.<br />
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 3 3 <br /> 1 20 21 <br /> 4 30 5 <br /> 7 8 40

                    </h4>
                    <h4> Date de iesire: <br /> 7 8 40 <br /> 4 30 5 <br /> 1 20 21</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Interschimbare linii" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Interschimbare linii"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Gaseste elementii"
            testPassed={testPassed}
        />
    )
}

export default InterchangeMinAndMax