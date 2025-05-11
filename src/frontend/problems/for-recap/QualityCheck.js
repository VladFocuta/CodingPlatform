import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function QualityCheck() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '24 4 8 10'], expected: '24' },
        { params: ['4', '1 1 1 1'], expected: '0' },
        { params: ['7', '0 122 100 7 973 19 222'], expected: '0 973 19' },
        
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>La o fabrică de componente electronice, fiecare piesă produsă este asociată cu un cod numeric.<br />
                    Pentru a verifica calitatea componentelor, inginerii folosesc un algoritm intern: se calculează suma divizorilor codului numeric,
                    iar dacă această sumă este divizibilă cu 10, piesa este considerată "echilibrată electric" și trece controlul de calitate.<br />

                    Tu ești responsabil cu scrierea unui program care citește codurile a n piese și afișează care dintre acestea trec testul de echilibru.<br /><br />

                    Scrie un program care citește un număr natural n (1 ≤ n ≤ 100) și apoi n numere întregi (codurile pieselor).<br />
                    Programul va afișa care dintre acestea trec testul de echilibru. Dacă niciuna dintre ele nu trece, se va afișa 0.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />4<br />
                        24 4 8 10<br />
                    </h4>
                    <h4> Date de iesire:<br /> 24

                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Controlul de calitate" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Controlul de calitate"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Catalogul digital"
            testPassed={testPassed}
        />
    )
}

export default QualityCheck