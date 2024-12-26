import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Product() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [1024], expected: [8] },
        { params: [2390], expected: [54] },
        { params: [1000], expected: [1] },
        { params: [903], expected: [27] },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Scrie un program care calculeaza produsul cifrelor nenule ale unui numar. Ignora cifrele
                    0 în timpul calculului. <br />
                    Numarul se citeste de la tastatura si apoi se va afisa produsul.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 1024
                        <br />
                    </h4>
                    <h4> Date de iesire: 8
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Produsul" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Produsul"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Numere perfecte"
            testPassed={testPassed}
        />
    )
}

export default Product