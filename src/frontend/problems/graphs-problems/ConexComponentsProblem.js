import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function ConexComponentsProblem() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6', '4', '1 2 \n2 3 \n4 5 \n5 6'], expected: '2' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un graf neorientat cu n vârfuri si cu m muchii. Graful este reprezentat printr-o matrice de adiacență.<br />
                    Determinați câte componente conexe are graful.<br />
                    Pe prima linie se află două numere întregi n și m. <br />
                    Următoarele m linii conțin câte două numere întregi x și y (1 ≤ x, y ≤ n), reprezentând o muchie între nodurile x și y.<br />
                    Se va afișa un singur număr: numărul de componente conexe ale grafului.
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 6 4<br />
                        1 2<br />
                        2 3<br />
                        4 5<br />
                        5 6<br />
                    </h4>
                    <h4> Date de iesire: <br /> 2
                    </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numarul de componente conexe" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numarul de componente conexe"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Arbore-Hamiltonian-Eulerian"
            testPassed={testPassed}
        />
    )
}

export default ConexComponentsProblem