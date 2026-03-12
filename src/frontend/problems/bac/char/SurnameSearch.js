import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function SurnameSearch() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['DAN MARIS; DANILA PREPELEAC; DAN POPA; EDANA DAN;', '\n DAN'], expected: 'MARIS POPA' },
        { params: ['DAN MARIS; DANILA PREPELEAC;', '\n DAN'], expected: 'MARIS' },
        { params: ['LUCIAN MATEI; BRATU LUCIAN; MARIA POGOR;', '\n LUCIAN'], expected: 'MATEI' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Un text, de cel mult 250 de caractere, reprezintă o listă cu date de identificare ale invitaților la o petrecere;
                    fiecare invitat are un prenume și un nume, care apar în listă în această ordine, urmate de simbolul ;
                    (punct și virgulă), ca în exemplu. <br />
                    Numele și prenumele sunt formate din câte un singur cuvânt, compus din
                    litere mari ale alfabetului englez, și sunt separate printr-un spațiu.<br />
                    Scrieți un program C++ care citește de la tastatură un text de tipul precizat mai sus apoi, de pe rândul
                    următor, un cuvânt, x, și afișează pe ecran, separate prin câte un spațiu, numele tuturor invitaților care au
                    prenumele x, ca în exemplu, sau mesajul <strong style={{ color: 'red' }}>NU</strong>  dacă nu există astfel de invitați.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />DAN MARIS; DANILA PREPELEAC; DAN POPA; EDANA DAN;<br /> DAN


                    </h4>
                    <h4> Date de iesire: <br />MARIS POPA</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cautare prenume" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cautare prenume"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Primele k cuvinte"
            testPassed={testPassed}
        />
    )
}

export default SurnameSearch