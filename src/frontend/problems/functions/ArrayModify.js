import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function ArrayModify() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '1 2 3 4 5'], expected: '1 4 9 16 25' }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citeste un tablou (vector) cu n elemente. Scrie o functie care primeste acest tablou prin referinta si modifica fiecare element astfel incat sa fie egal cu patratul sau.<br />
                    In main() vom citi numarul n si elementele sale. Apoi folosim functia scrisa de noi si afisam noul vector.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />5 <br /> 1 2 3 4 5

                    </h4>
                    <h4> Date de iesire: 1 4 9 16 25 </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Modificarea unui tablou" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Modificarea unui tablou"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Vecinii"
            testPassed={testPassed}
        />
    )
}

export default ArrayModify