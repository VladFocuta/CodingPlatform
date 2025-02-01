import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function Neighbours() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '1 1 1 1 1 0 0 1 0 0 0 0 1 0 1 1'], expected: '1 1 1 1 1 1 1 1 0 1 1 0 1 0 1 1' },
        { params: ['3', '0 0 0 0 0 0 0 0 0'], expected: '0 0 0 0 0 0 0 0 0' },
        { params: ['3', '1 1 1 1 1 1 1 1 1'], expected: '1 1 1 1 1 1 1 1 1' },
        { params: ['4', '0 0 1 1 0 1 0 1 0 1 0 1 0 0 0 1'], expected: '0 0 1 1 0 1 1 1 0 1 1 1 0 0 0 1' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice patratica n x n. Matricea va fi formata doar din elemente cu valori de 1 si 0. Trebuie sa preschimbam elementele cu valoarea 0, in 1.
                    Elementele cu valoarea 0 care se regasesc la marginea matricei, nu vor fi schimbate.
                    <br />
                    Pe prima linie se citeste numarul n.<br />
                    Pe a doua linie citim elementele matricei formate din 1 si 0. <br />
                    Se va afisa noua matrice.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 4 <br /> 1 1 1 1 <br /> 1 0 0 1 <br /> 0 0 0 0<br /> 1 0 1 1 <br />

                    </h4>
                    <h4> Date de iesire: <br /> 1 1 1 1 <br /> 1 1 1 1 <br />0 1 1 0 <br /> 1 0 1 1</h4>  

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Vecinii" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Vecinii"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Generare matrice"
            testPassed={testPassed}
        />
    )
}

export default Neighbours