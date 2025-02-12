import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function LongestSentence() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', 'C++ este un limbaj puternic. \nProgramarea este distractiva. \nInvatarea continua este cheia succesului.'], expected: 'Invatarea continua este cheia succesului.' },
        { params: ['2', 'Invatam siruri de caractere. \nNu este asa de greu.'], expected: 'Invatam siruri de caractere.' },
        { params: ['3', 'Invatam siruri.\nNu este asa de greu.\nNu este asa de greu.'], expected: 'Nu este asa de greu.\nNu este asa de greu.' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care citeste mai multe propozitii si le copiaza pe cele mai lungi intr-un nou vector de siruri de caractere.<br />
                    Pe prima linie se va citi numarul n care reprezinta numarul total de propozitii care vor fi introduse.<br />
                    Pe a doua linie, citim propozitiile de la tastatura.
                    La final, se afiseaza propozitiile cele mai lungi.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />3<br />C++ este un limbaj puternic. <br />Programarea este distractiva. <br />Invatarea continua este cheia succesului.

                    </h4>
                    <h4> Date de iesire: <br />Invatarea continua este cheia succesului.</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cea mai lunga propozitie" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cea mai lunga propozitie"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Concatenarea a doua siruri"
            testPassed={testPassed}
        />
    )
}

export default LongestSentence