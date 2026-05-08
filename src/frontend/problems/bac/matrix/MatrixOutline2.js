import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function MatrixOutline2() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '4', '0 5 2 11 3 2 10 2 7 3 1 4 4 5 0 12 8 13 7 5', '5'], expected: 'DA' },
        { params: ['3', '3', '1 2 100 3 4 5 6 7 8', '0'], expected: 'NU' },
        { params: ['5', '5', '0 5 2 11 99 3 2 10 2 21 7 3 1 4 67 4 5 0 12 123 8 13 7 5 55', '13'], expected: 'DA' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Scrieți un program C++ care citește de la tastatură numere naturale din intervalul [3, 100], în această ordine: n și m, apoi elementele unui tablou bidimensional cu n linii și m coloane, iar la final un număr x.<br />
                    Programul afișează pe ecran mesajul DA, dacă există cel puțin un element egal cu x aflat pe conturul tabloului (format din prima linie, ultima linie, prima coloană și ultima coloană), sau mesajul NU în caz contrar.<br />
                    Programul citește de la tastatură de la tastatură numere naturale n și m, apoi elementele unui tablou bidimensional cu n linii și m coloane, iar la final un număr x.<br />
                    Programul va afișa pe ecran mesajul <strong style={{ color: 'red' }}>DA</strong> sau mesajul <strong style={{ color: 'red' }}>NU</strong>, conform cerinței.<br />

                    Mențiuni:<br />
                    toate valorile citite sunt numere naturale din intervalul [3, 100].
                    <br /><br />

                    Exemplu: <br />

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 4<br /> 0 5 2 11 <br /> 3 2 10 2 <br /> 7 3 1 4 <br /> 4 5 0 12 <br /> 8 13 7 5 <br />5
                    </h4>
                    <h4> Date de iesire: <br />DA</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Conturul matricei2.0" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Conturul matricei2.0"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Interschimbare minima"
            testPassed={testPassed}
        />
    )
}

export default MatrixOutline2