import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function DepoCode() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '23 345 67 3 234'], expected: '3' },
        { params: ['5', '23 344 44 4 234'], expected: '4' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Într-un mare depozit logistic, fiecare colet primește un cod numeric unic pentru urmărire.<br />
                     Managerul depozitului dorește să afle care cifră apare cel mai frecvent în codurile acestor colete, pentru a identifica dacă anumite cifre sunt folosite mai des și astfel să optimizeze sistemul de codificare.<br />

                    Ai fost însărcinat să scrii un program care să citească codurile de pe toate coletele primite într-o zi și să determine cifra care apare cel mai des în total.<br />

                    Astfel, parcurgi lista codurilor, numeri aparițiile fiecărei cifre în toate codurile și la final afișezi cifra cu frecvența maximă.<br /><br />
                    <strong style={{ color: 'red' }}>Restricții și precizări:</strong><br />
                    1 ≤ n ≤ 1000<br />
                    0 ≤ valori ≤ 1000<br />

                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />5<br />
                    23 345 67 3 234<br />
                    </h4>
                    <h4> Date de iesire:<br /> 3

                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Analiza cifrelor în codurile unui depozit" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Analiza cifrelor în codurile unui depozit"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Codurile secrete"
            testPassed={testPassed}
        />
    )
}

export default DepoCode