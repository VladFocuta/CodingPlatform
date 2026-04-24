import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'
function RProgress() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7', '250 190 160 100 130 220 70'], expected: '30' },
        { params: ['11', '180 30 80 280 130 330 230 30 30 330 80'], expected: '50' },
        { params: ['4', '1 5 10 12'], expected: 'NU' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Un șir de numere este o progresie aritmetică de rație r dacă oricare termen al său, cu excepția primului, se obține din cel care îl precede, prin adunarea la acesta a numărului r. Exemplu: șirul 12, 14, 16, 18, 20 este o progresie de rație 2.<br />
                    Se dă un șir de cel mult 10<sup>6</sup> numere naturale din intervalul [0,10<sup>3</sup>]. Se cere să se verifice dacă există un număr natural r, astfel încât toate numerele distincte din șir să poată fi rearanjate, pentru a forma o progresie aritmetică de rație r. Se afișează numărul r, sau mesajul <strong style={{ color: 'red' }}>NU</strong>, dacă nu există un astfel de număr.<br />
                    Pe prima linie se citește numărul n, iar pe a doua linie cele n elemente ale șirului, separate prin spații.<br />
                    Se va afișa numărul r, sau mesajul <strong style={{ color: 'red' }}>NU</strong>, dacă nu există un astfel de număr.
                    <br /><br />
                    Mențiuni:<br />
                    în șirul dat există cel puțin două valori distincte<br />
                    proiectați un algoritm eficient din punctul de vedere al timpului de executare.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />7 <br /> 250 190 160 100 130 220 70

                    </h4>
                    <h4> Date de iesire: <br />30
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Progresie R" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Progresie R"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Scriere zecimala"
            testPassed={testPassed}
        />
    )
}

export default RProgress