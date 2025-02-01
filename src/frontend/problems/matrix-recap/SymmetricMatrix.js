import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function SymmetricMatrix() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '1 2 3 2 4 5 3 5 6'], expected: 'Matricea este simetrica' },
        { params: ['3', '1 2 3 4 5 6 7 8 9'], expected: 'Matricea nu este simetrica' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice patratica n x n. Scrie un program care verifica daca o matrice patratica este simetrica.
                    <br />
                    Pe prima linie se citeste numarul n.<br />
                    Pe a doua linie citim elementele matricei. <br />
                    Programul va afisa unul din mesaje in functie de rezultat:<br />
                    <strong style={{ color: 'red' }}>Matricea este simetrica</strong><br />
                    <strong style={{ color: 'red' }}>Matricea nu este simetrica</strong><br />
                    O matrice patratica A de dimensiune n x n este simetrica daca este egala cu transpusa sa.<br />
                    Cu alte cuvinte, elementele aflate deasupra diagonalei principale trebuie sa fie egale cu elementele corespunzatoare de sub diagonala principala.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 3 <br /> 1 2 3 <br /> 2 5 6 <br /> 3 6 9<br />

                    </h4>
                    <h4> Date de iesire: <br /> Matricea este simetrica </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Matrice simetrica" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Matrice simetrica"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Vecinii"
            testPassed={testPassed}
        />
    )
}

export default SymmetricMatrix