import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function SpecialPalindrom() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '1121 1333 5414 1024'], expected: '3' },
        { params: ['3', '2212 1001 5555'], expected: '2' },
        { params: ['4', '9191 1000 1232 9999'], expected: '4' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Un număr natural este numit special dacă, după ce se efectuează următoarea transformare, rezultatul este un palindrom:<br />
                    Se extrage prima cifră a numărului și se adaugă la finalul acestuia.<br />
                    Se verifică dacă noul număr este palindrom (un număr care citit de la stânga la dreapta este egal cu cel citit de la dreapta la stânga).<br /><br />
                    Scrie un program care:<br />
                    Citește de la tastatură un număr natural n (1 ≤ n ≤ 50), reprezentând numărul de valori dintr-un șir.<br />
                    Citește un șir de n numere naturale, fiecare având cel puțin două cifre și cel mult 9 cifre.<br />
                    Toate numerele din șir, au același număr de cifre.
                    Pentru fiecare număr, aplică transformarea descrisă mai sus.<br />
                    Afișează câte dintre numerele astfel transformate devin palindrom.
                    <br /><br />

                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 3 <br />2212 1001 5555
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />2
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numere speciale palindromizate" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numere speciale palindromizate"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default SpecialPalindrom