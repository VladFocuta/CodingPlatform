import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function LeftPermutation() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '4', '1 2 3 4 5 6 7 8 9 10 11 12'], expected: '2 3 4 1 6 7 8 5 10 11 12 9' },
        { params: ['3', '2', '1 2 5 6 0 7'], expected: '2 1 6 5 7 0' },
        { params: ['3', '5', '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15'], expected: '2 3 4 5 1 7 8 9 10 6 12 13 14 15 11' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice n x m, unde fiecare element este un numar intreg. Trebuie sa efectuam o permutare spre stanga a fiecarui rand al matricei cu o pozitie.
                    Elementul din prima coloana trebuie mutat la finalul randului.
                    <br />
                    Pe prima linie se citesc doua numere intregi n si m(dimensiunea matricei).<br />
                    Pe urmatoarele n linii sunt date m numere intregi, reprezentand elementele matricei.<br />
                    Se va afisa matricea dupa permutarea spre stanga a fiecarui rand.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 3 4 <br /> 1 2 3 4 <br /> 5 6 7 8 <br /> 9 10 11 12

                    </h4>
                    <h4> Date de iesire: <br /> 2 3 4 1 <br /> 6 7 8 5 <br /> 10 11 12 9 </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Permutari la stanga" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Permutari la stanga"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Triunghi inferior"
            testPassed={testPassed}
        />
    )
}

export default LeftPermutation