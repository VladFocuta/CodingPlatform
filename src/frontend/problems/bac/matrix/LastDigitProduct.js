import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function LastDigitProduct() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4'], expected: '5' },
        { params: ['5'], expected: '3' },
        { params: ['2'], expected: '3' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citește un număr natural n (2 ≤ 𝑛 ≤ 100).<br />
                    Se construiește în memorie un tablou bidimensional cu n linii și n coloane, ale cărui elemente sunt numerele naturale de la 1 la
                    n<sup>2</sup>, așezate în spirală, pornind din colțul din stânga sus al tabloului și continuând în sens invers trigonometric (sensul acelor de ceasornic).<br />
                    Programul determină ultima cifră a produsului numerelor impare aflate strict sub diagonala secundară a tabloului și o afișează pe ecran.
                    <br /><br />
                    Exemplu: <br /><strong style={{color:'red'}}>Matricea generata cand n = 4</strong><br />
                    1 2 3 4 <br />12 13 14 5 <br /> 11 16 15 6<br />10 9 8 7
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />4

                    </h4>
                    <h4> Date de iesire: <br /> 3 </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Produs sub diagonala secundara" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Produs sub diagonala secundara"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Eliminarea diagonalei secundare"
            testPassed={testPassed}
        />
    )
}

export default LastDigitProduct