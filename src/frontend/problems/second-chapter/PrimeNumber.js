import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function PrimeNumber() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [2], expected: "Numarul este prim"},
        { params: [4], expected: "Nu este prim" },
        { params: [293], expected: "Numarul este prim" },
        { params: [31], expected: "Numarul este prim" },
        { params: [322], expected: "Nu este prim" },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care verifica daca un numar este prim.
                    <br />
                    Numarul se citeste de la tastatura si apoi se afiseaza <strong style={{color: 'red'}}>Numarul este prim</strong> sau <strong style={{color: 'red'}}>Nu este prim</strong>. <br />
                    <br />
                    
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 7
                        <br />
                    </h4>
                    <h4> Date de iesire: Numarul este prim
                    </h4>
                </div> <br />
               

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test 
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numar prim" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numar prim"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Concatenarea"
            testPassed={testPassed}
        />
    )
}

export default PrimeNumber