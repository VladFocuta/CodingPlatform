import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function KPows() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6 2', '32 1 317 809 256 2'], expected: '32 1 256 2' },
        { params: ['5 1', '1 2 1 3 1'], expected: '1 1 1' },
        { params: ['6 3', '2 5 7 10 14 20'], expected: 'NU' },
        { params: ['8 2', '32 56 317 809 256 2 1 60'], expected: '32 256 2 1' },
        { params: ['6 3', '2 0 7 27 14 20'], expected: '27' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieţi un program C++ care citeşte de la tastatură un număr natural n  (n &lt; 100), k (k &lt; 50) precum şi
                    n numere naturale, mai mici decât 30000 fiecare.<br />
                    Afişează pe ecran, cu câte un spaţiu între ele, care dintre cele n
                    numere sunt puteri ale lui k.<br />
                    Dacă nu există un asemenea număr, se afişează pe ecran mesajul <strong style={{ color: 'red' }}>NU</strong>. <br />

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />6 2 <br /> 32 1 317 809 256 2


                    </h4>
                    <h4> Date de iesire: <br /> 32 1 256 2 </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Puteri ale lui k" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Puteri ale lui k"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default KPows