import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function PermCircle2() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '7 2 8 4 5'], expected: '7 2 8 4 5 \n 2 8 4 5 7 \n 8 4 5 7 2 \n 4 5 7 2 8 \n 5 7 2 8 4' },
        { params: ['6', '12 7 6 3 8 5'], expected: '12 7 6 3 8 5 \n 7 6 3 8 5 12 \n 6 3 8 5 12 7 \n 3 8 5 12 7 6 \n 8 5 12 7 6 3 \n 5 12 7 6 3 8' },
        { params: ['3', '1 2 3'], expected: '1 2 3 \n 2 3 1 \n 3 1 2' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un vector cu n elemente numere naturale. Determinați toate permutările circulare spre stânga ale vectorului.<br />
                    Programul citește de la tastatură numărul n, iar apoi n numere naturale, separate prin spaţii, reprezentând elementele vectorului.<br />
                    Programul afișează pe ecran, fiecare pe câte o linie, permutările circulare spre stânga ale vectorului, elementele fiecărei permutări fiind separate printr-un spațiu.
                    <br /><br />
                    Menţiuni:<br />
                    0 &lt; n &lt; 16<br />
                    elementele vectorului vor fi cuprinse între -1000 și 1000

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 6  <br />12 7 6 3 8 5
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />12 7 6 3 8 5<br />7 6 3 8 5 12 <br />6 3 8 5 12 7 <br />3 8 5 12 7 6<br />8 5 12 7 6 3 <br />5 12 7 6 3 8
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Permutari circulare2.0" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Permutari circulare2.0"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Suma permutari"
            testPassed={testPassed}
        />
    )
}

export default PermCircle2