import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function GenerateArrangements() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '2'], expected: '1 2 \n 1 3 \n 1 4 \n 2 1 \n 2 3 \n 2 4 \n 3 1 \n 3 2 \n 3 4 \n 4 1 \n 4 2 \n 4 3' },
        { params: ['3', '3'], expected: '1 2 3 \n 1 3 2 \n 2 1 3 \n 2 3 1 \n 3 1 2 \n 3 2 1' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Sa se genereze toate aranjamentele de k elemente din multimea (1, 2, ..., n).<br />
                    Se citesc doua numere naturale n si k (1 ≤ k ≤ n ≤ 10).<br />
                    Fiecare aranjament trebuie afisat pe un rand, iar elementele sa fie afisate in ordine de generare.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 4 2
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> 1 2<br />1 3<br /> 1 4<br />2 1<br />2 3<br /> 2 4<br />3 1 <br /> 3 2 <br /> 3 4<br />4 1 <br />4 2 <br /> 4 3
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Generare aranjamente" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Generare aranjamente"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Suma de numere naturale"
            testPassed={testPassed}
        />
    )
}

export default GenerateArrangements