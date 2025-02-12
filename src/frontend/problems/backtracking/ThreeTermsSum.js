import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function ThreeTermsSum() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4'], expected: '4 \n 3 1 \n 2 2 \n 2 1 1 \n 1 1 1 1' },
        { params: ['2'], expected: '2 \n 1 1' },
        { params: ['5'], expected: '5 \n 4 1 \n 3 2 \n 3 1 1 \n 2 2 1 \n 2 1 1 1 \n 1 1 1 1 1' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citeste un numar natural n (1 ≤ n ≤ 20).<br />
                    Sa se afiseze toate modalitatile de a scrie n ca suma de numere naturale, fiecare suma pe un rand.<br />
                    Sumele trebuie sa fie afisate in ordine descrescatoare a termenilor.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 4
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> 4<br />3 1<br /> 2 2<br />2 1 1<br />1 1 1 1
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma de numere naturale" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Suma de numere naturale"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Fructe si legume"
            testPassed={testPassed}
        />
    )
}

export default ThreeTermsSum