import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function AverageDigit() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['135'], expected: 'DA' },
        { params: ['124'], expected: 'NU' },
        { params: ['1035'], expected: 'NU' },
        { params: ['27989'], expected: 'DA' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Scrieţi programul C++ care citeşte de la tastatură un număr natural n (10 ≤n ≤1000000) şi
                    verifică, folosind apeluri utile ale subprogramului cifre, creat în problema anterioară, dacă în scrierea în baza 10 a lui n
                    se găseşte cel puţin o cifră care să fie media aritmetică a celorlalte cifre din componenţa lui
                    n.<br />
                    Programul afişează pe ecran mesajul <strong style={{ color: 'red' }}>DA</strong> în caz afirmativ şi <strong style={{ color: 'red' }}>NU</strong> în caz contrar.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />135


                    </h4>
                    <h4> Date de iesire: <br /> DA </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cifra cu proprietate de medie aritmetica" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cifra cu proprietate de medie aritmetica"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Fractii ireductibile"
            testPassed={testPassed}
        />
    )
}

export default AverageDigit