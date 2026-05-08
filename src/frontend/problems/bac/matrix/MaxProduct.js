import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function MaxProduct() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '3', '2 1 2 1 1 1 2 2 2 1 2 1 0 2 2'], expected: '2 3' },
        { params: ['4', '4', '2 1 1 0 1 1 1 1 2 2 2 1 1 2 1 1'], expected: '1 2' },
        { params: ['2', '2', '0 0 0 0'], expected: '1 2' },
        { params: ['3', '3', '2 1 2 1 1 1 2 2 0'], expected: '1' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se consideră tabloul bidimensional cu m linii şi n coloane, care conţine doar valorile 0, 1, 2.<br />
                    Să se determine numerele de ordine ale coloanelor pentru care produsul elementelor este maxim.<br />
                    Pe prima linie se citesc numerele m şi n, iar pe următoarele m linii câte n numere naturale separate prin spaţii, reprezentând elementele tabloului.<br />
                    Se vor afişa numerele cerute, separate prin spaţii, în ordine crescătoare.<br /><br />

                    Mențiuni:<br />
                    2≤m,n≤100<br />
                    numere de ordine ale liniilor sunt între 1 şi m<br />
                    numere de ordine ale coloanelor sunt între 1 şi n
                    <br /><br />

                    Exemplu: <br />

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 3<br /> 2 1 2<br /> 1 1 1<br /> 2 2 2<br /> 1 2 1<br /> 0 2 2
                    </h4>
                    <h4> Date de iesire: <br />2 3</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Produs maxim" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Produs maxim"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Conturul matricei"
            testPassed={testPassed}
        />
    )
}

export default MaxProduct