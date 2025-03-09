import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function SubGraph() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '5', '\n1 2 \n2 3 \n3 4 \n4 5 \n1 5', '3', '1 3 5'], expected: 'Subgraful nu este conex' },

    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Avem un graf neorientat reprezentat printr-o matrice de adiacență și dorim să găsim un subgraf conex care conține exact k vârfuri din graf.
                    <br />
                    Un subgraf este definit ca un subset de vârfuri și muchii care sunt selectate din graf.<br />
                    Sa se citeasca de la tastatura n noduri si m muchii.<br />
                    Apoi, numarul k si cele k noduri care formeaza subgraful.<br />
                    Sa se afiseze daca subgraful este conex sau nu.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 5 5 <br /> 1 2 <br /> 2 3 <br /> 3 4 <br />4 5 <br /> 1 5<br />3 <br />1 3 5<br />

                    </h4>
                    <h4> Date de iesire: <br /> Subgraful nu este conex</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Subgraf conex" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Subgraf conex"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Graf complementar"
            testPassed={testPassed}
        />
    )
}

export default SubGraph