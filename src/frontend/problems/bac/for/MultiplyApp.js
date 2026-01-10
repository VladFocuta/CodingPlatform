import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function MultiplyApp() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['8', '44 2 54 74 2 44 9 2'], expected: '2 44' },
        { params: ['10', '3 5 2 3 7 5 9 2 2 8'], expected: '2 3 5' },
        { params: ['6', '1 4 6 8 9 11'], expected: 'Nu exista' },
        { params: ['7', '4 4 4 4 4 4 4'], expected: '4' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieţi un program C++ care determină în mod eficient, din punct de vedere al timpului
                    de executare, toate numerele dintr-un vector v cu lungimea maxima de 100 elemente, care apar de cel puţin
                    două ori. Programul va afişa pe ecran numerele determinate, o singură dată,
                    în ordine crescatoare, pe aceeaşi linie, separate prin câte un spaţiu. <br />
                    Dacă nu există niciun element care să respecte condiţia, se va afişa <strong style={{ color: 'red' }}>Nu exista</strong>.<br />
                    Pe prima linie se citeşte n (0 &lt; n &lt; 1000), urmat de cele n numere.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />10<br /> 3 5 2 3 7 5 9 2 2 8


                    </h4>
                    <h4> Date de iesire: <br />2 3 5</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Determinarea numerelor cu aparitii multiple" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Determinarea numerelor cu aparitii multiple"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Rearanjarea elementelor"
            testPassed={testPassed}
        />
    )
}

export default MultiplyApp