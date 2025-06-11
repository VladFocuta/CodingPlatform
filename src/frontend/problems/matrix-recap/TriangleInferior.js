import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function TriangleInferior() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4'], expected: '1 0 0 0 2 3 0 0 4 5 6 0 7 8 9 10' },
        { params: ['1'], expected: '1' },
        { params: ['2'], expected: '1 0 2 3' },
        { params: ['10'], expected: '1 0 0 0 0 0 0 0 0 0 2 3 0 0 0 0 0 0 0 0 4 5 6 0 0 0 0 0 0 0 7 8 9 10 0 0 0 0 0 0 11 12 13 14 15 0 0 0 0 0 16 17 18 19 20 21 0 0 0 0 22 23 24 25 26 27 28 0 0 0 29 30 31 32 33 34 35 36 0 0 37 38 39 40 41 42 43 44 45 0 46 47 48 49 50 51 52 53 54 55' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice patratica n x n. Sa se genereze un triunghi in partea inferioara a matricei, sub diagonala principala.<br />
                    Elementele de deasupra diagonalei principale vor avea valoarea 0, iar cele de sub diagonala vor avea valori crescatoare, 1, 2, 3, ... .
                    <br />
                    Pe prima linie se citeste numarul n (dimensiunea matricei).<br />
                    Pe urmatoarea linie se va genera noua matrice.<br />
                    Se va afisa matricea.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 4 

                    </h4>
                    <h4> Date de iesire: <br /> 1 0 0 0 <br /> 2 3 0 0 <br /> 4 5 6 0 <br /> 7 8 9 10 </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Triunghi inferior" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Triunghi inferior"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Conversie binara pe linii"
            testPassed={testPassed}
        />
    )
}

export default TriangleInferior