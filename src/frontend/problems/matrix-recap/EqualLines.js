import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function EqualLines() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '4', '1 2 3 4 4 5 6 7 1 2 3 4 8 3 1 56'], expected: 'Linia 1 cu linia 3' },
        { params: ['5', '3', '1 2 3 0 2 4 1 2 3 9 8 0 0 2 4'], expected: 'Linia 1 cu linia 3\n Linia 2 cu linia 5' },
        { params: ['3', '3', '1 2 3 1 2 3 1 2 3'], expected: 'Linia 1 cu linia 2 \n Linia 1 cu linia 3 \n Linia 2 cu linia 3' },
        { params: ['3', '3', '1 2 3 3 4 5 6 7 8'], expected: 'Nu s-au gasit.' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieţi un program care verifică dacă într-o matrice A cu n linii şi m coloane
                    cel puţin două linii sunt identice sau nu.<br />
                    n, m şi elementele matricei se citesc de la tastatură.<br />
                    Sa se afle indexul liniilor identice .<br />
                    Afişarea se va face ca în exemplul de mai jos.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 4 4<br /> 1 2 3 4 <br /> 4 5 6 7<br /> 1 2 3 4<br /> 8 3 1 56

                    </h4>
                    <h4> Date de iesire: <br /> Linia 1 cu linia 3</h4>

                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 4 4<br /> 1 2 3 4 <br /> 4 5 6 7<br /> 7 8 9 10<br /> 0 1 2 3

                    </h4>
                    <h4> Date de iesire: <br /> Nu s-au gasit.</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Linii egale" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Linii egale"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Gaseste elementii"
            testPassed={testPassed}
        />
    )
}

export default EqualLines