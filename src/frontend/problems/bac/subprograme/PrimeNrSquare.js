import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function PrimeNrSquare() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['66 2'], expected: '4 9 25 49' },
        { params: ['40 1'], expected: '4 9 25' },
        { params: ['20 68', '1 2'], expected: '25 49' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieţi definiţia completă a unui subprogram P, cu doi parametri, a şi b, numere naturale cu
                    cel mult 4 cifre fiecare şi afişează pe ecran, separate prin câte un spaţiu, numerele aflate în
                    intervalul închis determinat de valorile a şi b, care sunt pătratele unor numere prime. <br /><br />
                    A şi b se vor citi de la tastatură şi apoi se va apela subprogramul creat.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />66 2


                    </h4>
                    <h4> Date de iesire: <br /> 4 9 25 49</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Patratul numerelor prime" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Patratul numerelor prime"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Suma si numarul de cifre"
            testPassed={testPassed}
        />
    )
}

export default PrimeNrSquare