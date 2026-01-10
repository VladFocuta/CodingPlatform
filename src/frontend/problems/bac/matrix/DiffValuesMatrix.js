import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function DiffValuesMatrix() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['2'], expected: '2 1 \n 3 2' },
        { params: ['1'], expected: '2' },
        { params: ['3'], expected: '2 1 1 \n 3 2 1 \n 3 3 2' },
        { params: ['5'], expected: '2 1 1 1 1 \n 3 2 1 1 1 \n 3 3 2 1 1 \n 3 3 3 2 1 \n 3 3 3 3 2' },
       
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieţi un program C++ care citeşte de la tastatură un număr natural n (0 &lt; n &lt; 23) şi apoi
                    construieşte în memorie o matrice cu n linii şi n coloane astfel încât elementele situate pe
                    diagonala principală sa fie egale cu 2, cele situate deasupra diagonalei principale să fie
                    egale cu 1, iar cele situate sub diagonala principală să fie egale cu 3.<br />
                    Programul va afişa matricea pe ecran ca în exemplul de mai jos.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />4


                    </h4>
                    <h4> Date de iesire: <br /> 2 1 1 1<br />3 2 1 1 <br />3 3 2 1 <br /> 3 3 3 2 </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Matrice cu valori diferite" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Matrice cu valori diferite"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Matrice cu sume diferite pe linii si coloane"
            testPassed={testPassed}
        />
    )
}

export default DiffValuesMatrix