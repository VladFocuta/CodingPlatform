import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function EulerianGraphProblem() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '0 1 1 1 1\n1 0 1 0 0 \n1 1 0 0 0 \n1 0 0 0 1 \n1 0 0 1 0'], expected: 'Graful este eulerian' },
        { params: ['5', '0 1 1 1 1 \n1 0 1 1 0 \n1 1 0 1 0 \n1 0 1 0 1 \n1 0 1 1 0'], expected: 'Graful nu este eulerian' },
    ];



    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un graf neorientat reprezentat printr-o matrice de adiacență.<br />
                    Verificați dacă graful este eulerian.<br />
                    Un graf este eulerian dacă este conex și toate vârfurile au grad par.<br />
                    Prima linie conține un număr întreg n reprezentând numărul de vârfuri ale grafului.<br />
                    Următoarele n linii conțin câte n numere binare (0 sau 1), reprezentând matricea de adiacență a grafului.<br />

                    Se afișează <strong style={{ color: 'red' }}>Graful este eulerian</strong> dacă graful este eulerian sau <strong style={{ color: 'red' }}>Graful nu este eulerian</strong> in caz contrar.
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 5<br />
                        0 1 1 1 1 <br />
                        1 0 1 0 0<br />
                        1 1 0 0 0<br />
                        1 0 0 0 1<br />
                        1 0 0 1 0
                    </h4>
                    <h4> Date de iesire: <br /> Graful este eulerian
                    </h4>

                </div>

            </div>

            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Verificare graf Eulerian" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Verificare graf Eulerian"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default EulerianGraphProblem