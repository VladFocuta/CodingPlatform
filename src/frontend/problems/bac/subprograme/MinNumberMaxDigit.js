import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function MinNumberMaxDigit() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['10', '23 12 64 12 72 345 67 23 71 634'], expected: '7 67' },
        { params: ['5', '19 92 49 91 29'], expected: '9 19' },
        { params: ['4', '56 65 59 95'], expected: '9 59' },
        { params: ['6', '123 456 78 234 567 12'], expected: '8 78' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Se consideră subprogramul cmax care prin parametrul a primeşte un număr natural nenul
                    mai mic decât 30000, iar prin parametrul b furnizează cifra maximă din numărul a.<br />
                    a. Scrieţi, folosind limbajul C++, doar antetul subprogramului cmax.<br />
                    b. Scrieţi programul C++ care citeşte de la tastatură un număr n şi un şir cu n numere, cu valori mai mici decât 30000.<br />
                    Determină cea mai mare cifră din scrierea lor şi cel mai mic
                    dintre numerele care conţin această cifră, folosind apeluri utile ale subprogramului cmax.<br />
                    Cifra şi numărul determinate se vor afişa pe ecran, separate printr-un spaţiu.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />6 <br />123 456 78 234 567 12


                    </h4>
                    <h4> Date de iesire: <br /> 8 78 </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numar minim cu cifra maxima" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numar minim cu cifra maxima"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Inlocuire secventa"
            testPassed={testPassed}
        />
    )
}

export default MinNumberMaxDigit