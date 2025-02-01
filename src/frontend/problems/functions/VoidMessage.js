import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function VoidMessage() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3'], expected: 'Invat programare de 3 luni!' }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Sa se creeze o functie void care afiseaza un mesaj dat. <br />
                   Functia primeste ca parametru variabila time de tip int. Functia trebuie sa afiseze, <strong style={{color: 'red'}}>Invat programare de &lt;time&gt; luni!</strong>.<br />

                    In int main() declaram variabila time, de tip int, si o citim de la tastatura. Apoi, apelam functia scrisa de noi.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 3

                    </h4>
                    <h4> Date de iesire: <br />Invat programare de 3 luni! </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Afisare mesaj" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Afisare mesaj"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Schimbarea valorilor"
            testPassed={testPassed}
        />
    )
}

export default VoidMessage