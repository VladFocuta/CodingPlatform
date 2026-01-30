import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function SeqReplace() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['202535250'], expected: '202635260' },
        { params: ['25525'], expected: '26526' },
        { params: ['12345'], expected: '12345' },
        { params: ['25252525'], expected: '26262626' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Subprogramul Plus are un singur parametru, n, prin care primește un număr natural 10 ≤ n &lt; 10<sup>9</sup><br />
                    Subprogramul înlocuiește în n fiecare secvență 25 cu câte o secvență 26 și furnizează, prin același parametru,
                    numărul obținut.<br />
                    Dacă nu se înlocuiește nicio secvență, subprogramul furnizează numărul nemodificat.<br />
                    Scrie definiția completă a subprogramului C++ și citeşte de la tastatură numărul n.<br />
                    La apelarea subprogramului, se va afișa numărul n modificat sau nu.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />202535250 <br />


                    </h4>
                    <h4> Date de iesire: <br />202635260</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Inlocuire secventa" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Inlocuire secventa"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default SeqReplace