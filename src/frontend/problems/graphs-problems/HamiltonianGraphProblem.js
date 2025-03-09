import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function HamiltonianGraphProblem() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '0 1 1 1\n1 0 1 1 \n1 1 0 1 \n1 1 1 0'], expected: 'DA' },
        { params: ['4', '0 1 1 0 \n1 0 1 1 \n1 1 0 0 \n0 1 0 0'], expected: 'NU' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un graf neorientat cu n vârfuri (1 ≤ n ≤ 10) reprezentat printr-o matrice de adiacență.<br />
                    Să se verifice dacă graful este hamiltonian, adică dacă există un ciclu hamiltonian (un ciclu care trece exact o dată prin fiecare nod și revine la nodul inițial).<br />
                    Prima linie conține un număr întreg n (numărul de noduri).<br />
                    Următoarele n linii conțin câte n numere binare (0 sau 1), reprezentând matricea de adiacență a grafului.<br />
                    Se afișează <strong style={{ color: 'red' }}>DA</strong> dacă graful conține un ciclu hamiltonian sau <strong style={{ color: 'red' }}>NU</strong> in caz contrar.
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 4<br />
                    0 1 1 1 <br />
                    1 0 1 1<br />
                    1 1 0 1<br />
                    1 1 1 0
                    </h4>
                    <h4> Date de iesire: <br /> DA
                    </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Verificare graf Hamiltonian" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Verificare graf Hamiltonian"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Verificare graf Eulerian"
            testPassed={testPassed}
        />
    )
}

export default HamiltonianGraphProblem