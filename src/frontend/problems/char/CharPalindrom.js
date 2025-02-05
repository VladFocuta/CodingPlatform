import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function CharPalindrom() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['ana'], expected: 'Este palindrom' },
        { params: ['programare'], expected: 'Nu este palindrom' },
        { params: ['radar'], expected: 'Este palindrom' },
        { params: ['fructe'], expected: 'Nu este palindrom' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Sa se creeze o functie de tip bool (returneaza true sau false) care primeste ca parametru un sir de caractere si verifica daca sirul este palindrom.
                    <br />
                    In main() se va citi textul de la tastatura si apoi se va verifica cu functia creata de noi,daca este palindrom sau nu.<br />
                    Textul este format din litere mici si va contine un singur cuvant.<br />
                    Sa se afiseze <strong style={{ color: 'red' }}>Este palindrom</strong> sau <strong style={{ color: 'red' }}>Nu este palindrom</strong>.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: ana

                    </h4>
                    <h4> Date de iesire: Este palindrom</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Palindrom-siruri de caractere" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Palindrom-siruri de caractere"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Numarul total de vocale"
            testPassed={testPassed}
        />
    )
}

export default CharPalindrom