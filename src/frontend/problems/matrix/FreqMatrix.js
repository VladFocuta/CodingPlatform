import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function FreqMatrix() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '123 231 312'], expected: '1 2 3' },
        { params: ['2', '123 456'], expected: 'NU EXISTA' },
        { params: ['5', '541 991 561 100 1234'], expected: '1' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>În regatul Numeria, două case nobile, Casa Unu-Doi-Trei și Casa Patru-Cinci-Șase, se pregătesc pentru un turnir legendar: Turnirul Cifrărilor.<br />
                    Fiecare casă își trimite campionii, fiecare campion purtând însemnele caselor: cifrele lor reprezentative.<br />

                    Înainte de începerea bătăliei, maeștrii regatului creează o hartă de frecvență – o tablă uriașă în care marchează ce cifre are fiecare casă.<br />
                    Dacă o cifră este prezentă, se pune o stea ✨ în dreptul numelui casei și al cifrei.<br /><br />

                    Regula supremă a turnirului spune:<br />

                    "O casă poate revendica coroana doar dacă toate casele participante dețin cel puțin o cifră comună."<br />

                    Așa că, după ce au completat harta, maeștrii Numeriei verifică: există oare o cifră care să aparțină tuturor caselor?<br />

                    În cazul nostru, Casa Unu-Doi-Trei și Casa Patru-Cinci-Șase nu împărtășesc nicio cifră. Astfel, niciun campion nu poate câștiga coroana, iar turnirul rămâne fără un învingător.
                    <br /><br />
                    Pe prima linie se află un număr N (1 ≤ N ≤ 100).<br />
                    Pe a doua linie se află N numere naturale, separate prin spațiu.<br />
                    Se vor afișa cifrele dominante, separate prin spațiu. Dacă nu există nicio cifră dominantă, se afișează <strong style={{color: 'red'}}>NU EXISTA</strong>.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 3 <br /> 123 231 312 
                        
                    </h4>
                    <h4> Date de iesire: <br />1 2 3
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Turnirul Cifrarilor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Turnirul Cifrarilor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default FreqMatrix