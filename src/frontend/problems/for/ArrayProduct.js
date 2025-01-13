import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function ArrayProduct() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: [3628800] },
        { params: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: [0] }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care citeste un sir de 10 numere intregi si calculeaza produsul acestora.
                    <br />
                    Numerele se citesc de la tastatura si apoi se va afisa produsul.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 1 2 3 4 5 6 7 8 9 10
                        <br />
                    </h4>
                    <h4> Date de iesire: 3628800
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Produsul numerelor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Produsul numerelor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Pozitii pare"
            testPassed={testPassed}
        />
    )
}

export default ArrayProduct