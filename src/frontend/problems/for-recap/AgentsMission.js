import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function AgentsMission() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6', '10 2 5 8 13 20'], expected: '3' },
        { params: ['4', '1 1 1 1'], expected: '4' },
        { params: ['7', '22 122 100 7 973 19 222'], expected: '2' },
        { params: ['4', '12 4 8 10'], expected: '0' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Într-o galaxie îndepărtată, Agenții P (de la prime) sunt trimiși pe planete necunoscute pentru a descifra coduri.<br />
                    Doar acei agenți care au un cod numeric prim sunt considerați de încredere.<br />

                    Ție ți s-a încredințat o listă cu numerele de identificare ale unor potențiali agenți.<br />
                    Misiunea ta este să scrii un program care verifică câți dintre acești agenți pot fi recrutați, adică au un cod care este număr prim.<br /><br />

                    Scrie un program care citește un număr natural N (1 ≤ N ≤ 100), apoi un șir de N numere naturale (codul fiecărui agent).
                    Programul va afișa câți dintre acești agenți pot fi recrutați.
                    
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />6<br />
                    10 2 5 8 13 20<br />
                    </h4>
                    <h4> Date de iesire:<br /> 3

                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Misiunea Agentilor P" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Misiunea Agentilor P"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Controlul de calitate"
            testPassed={testPassed}
        />
    )
}

export default AgentsMission