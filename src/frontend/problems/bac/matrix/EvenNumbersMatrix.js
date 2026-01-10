import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function EvenNumbersMatrix() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3'], expected: '2 4 6 \n 8 10 12 \n 14 16 18' },
        { params: ['2'], expected: '2 4 \n 6 8' },
        { params: ['5'], expected: '2 4 6 8 10 \n 12 14 16 18 20 \n 22 24 26 28 30 \n 32 34 36 38 40 \n 42 44 46 48 50' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieţi un program C++ care citeşte de la tastatură un număr natural n (2 &lt; n &lt; 10) şi
                    care construieşte în memorie şi afişează pe ecran un tablou bidimensional cu n linii şi n
                    coloane astfel încât parcurgându-l linie cu linie de sus în jos şi fiecare linie de la stânga
                    la dreapta se obţin primele n<sup>2</sup> numere pare nenule în ordine strict crescătoare, ca în exemplu.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />3


                    </h4>
                    <h4> Date de iesire: <br /> 2 4 6<br />8 10 12 <br />14 16 18 </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Generarea unei matrice cu numere pare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Generarea unei matrice cu numere pare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Produs sub diagonala secundara"
            testPassed={testPassed}
        />
    )
}

export default EvenNumbersMatrix