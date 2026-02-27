import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function DistinctValues() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['20', '2', '9', '1 1 1 2 2 3 5 5 5 5 6 6 7 8 10 10 12 15 21 21'], expected: '6' },
        { params: ['12', '10', '20', '2 3 4 9 10 10 11 12 12 13 13 13'], expected: '4' },
        { params: ['2', '2', '4', '3 3'], expected: '1' },
        { params: ['13', '3', '23', '9 4 5 6 7 8 9 10 11 11 24 25 25'], expected: '9' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieţi un program C++ care citeşte de la tastatură pe prima linie numărul n (1 &lt;= n &lt; 10<sup>6</sup>) și alte două numere [1,10<sup>9</sup>], x
                    și y (x&lt;y), iar pe a doua linie un șir de n numere, ordonate crescător.<br />
                    Se cere să se afişeze pe ecran numărul de valori distincte din șir, care
                    aparțin intervalului [x,y].<br />
                    Proiectați un algoritm eficient din punctul de vedere al timpului de executare
                    și al memoriei utilizate.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />20 2 9 <br /> 1 1 1 2 2 3 5 5 5 5 6 6 7 8 10 10 12 15 21 21


                    </h4>
                    <h4> Date de iesire: <br /> 6</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Valori distincte" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Valori distincte"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default DistinctValues