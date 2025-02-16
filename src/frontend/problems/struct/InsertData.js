import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function InsertData() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', 'Maria 25', 'Marius 18', 'George 30'], expected: 'Nume: Maria, Varsta: 25 \n Nume: Marius, Varsta: 18 \n Nume: George, Varsta: 30' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Se citește un număr n care reprezintă numărul de persoane. Pentru fiecare persoană, se vor introduce numele și vârsta.<br />
                Programul trebuie să afișeze lista tuturor persoanelor introduse.
                
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />3<br /> Maria 25 <br /> Marius 18 <br /> George 30
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> Nume: Maria, Varsta: 25 <br /> Nume: Marius, Varsta: 18 <br /> Nume: George, Varsta: 30
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Gestionarea unei liste de persoane" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Gestionarea unei liste de persoane"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Sortarea unei liste de persoane"
            testPassed={testPassed}
        />
    )
}

export default InsertData