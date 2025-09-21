import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function FibonacciMatrix() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3'], expected: '1 1 2 \n3 5 8 \n13 21 34' },
        { params: ['5'], expected: '1 1 2 3 5 \n 8 13 21 34 55 \n 89 144 233 377 610 \n987 1597 2584 4181 6765 \n 10946 17711 28657 46368 75025' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Să se construiască o matrice A cu n linii şi n coloane ce se completează cu
                    termenii şirului lui Fibonacci.<br />
                    Completarea se va face în ordinea liniarizării pe
                    linii a matricei.<br />
                    Nu se vor folosi structuri de date auxiliare.<br />
                    n se va citi de la tastatură şi apoi se va genera matricea.<br />
                    Să se afişeze matricea generată.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 3

                    </h4>
                    <h4> Date de iesire: <br /> 1 1 2 <br /> 3 5 8 <br /> 13 21 34</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Generare sir Fibonacci" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Generare sir Fibonacci"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Numere din liniile unei matrice de cifre"
            testPassed={testPassed}
        />
    )
}

export default FibonacciMatrix