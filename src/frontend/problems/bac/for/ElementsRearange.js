import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function ElementsRearange() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6', '18 9 3 13 4 6'], expected: 'DA' },
        { params: ['4', '8 5 11 6'], expected: 'DA' },
        { params: ['4', '5 6 7 9'], expected: 'NU' },
        { params: ['5', '3 3 4 6 9'], expected: 'NU' },
        { params: ['1', '7'], expected: 'DA' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieţi un program C++ care citeşte de la tastatură un număr natural n (1 ≤ n ≤50) şi apoi
                    un şir de n numere naturale cu cel mult 4 cifre fiecare şi care verifică dacă elementele şirului
                    pot fi rearanjate astfel încât să respecte regula: al doilea element este cu 1 mai mare decât
                    primul, al treilea cu 2 mai mare decât al doilea, ... , ultimul este cu n-1 mai mare decât
                    penultimul.<br />
                    Programul afişează pe ecran mesajul <strong style={{ color: 'red' }}>DA</strong> în caz afirmativ şi mesajul <strong style={{ color: 'red' }}>NU</strong> în caz
                    contrar.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />6<br /> 18 9 3 13 4 6


                    </h4>
                    <h4> Date de iesire: <br />DA</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Rearanjarea elementelor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Rearanjarea elementelor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default ElementsRearange