import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function Labirinth() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '0 1 0 0 0 \n 0 1 0 1 0 \n 0 0 0 1 0 \n 0 1 0 1 0 \n 0 0 0 1 0'], expected: 'Numarul minim de pasi: 13' },
        { params: ['3', '0 1 0 \n 0 0 0 \n 0 0 0'], expected: 'Numarul minim de pasi: 5' },
        { params: ['5', '0 1 0 0 0 \n 0 1 0 1 0 \n 0 1 0 1 0 \n 0 1 0 1 0 \n 0 1 0 0 0'], expected: 'Nu exista drum spre iesire!' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Imaginează-ți că ai un labirint 5 x 5 desenat ca o hartă cu pătrățele, unde:
                    <br />
                    0 = drum liber (poți merge)<br />
                    1 = perete (nu poți trece)<br />
                    Ai un punct de start și un punct de final.<br />
                    Scopul este să găsești cel mai scurt drum de la start la final mergând doar pe drumuri libere.<br />
                    <br />
                    Urmează acești pași:<br /><br />
                    Pleci din punctul de start.<br />

                    Încerci să te muți în una din direcțiile: sus, jos, stânga, dreapta.<br />

                    Dacă ajungi la un perete (1) sau în afara labirintului, te întorci și încerci altă direcție.<br />

                    Dacă ajungi la final, ai găsit o soluție.<br /><br />

                    Se citește un număr N de tip int, de la tastatură care reprezintă lungimea labirintului și N * N elemente ale labirintului care vor fi formate din 0 și 1. <br />
                    Să se afișeze cel mai mic numar de pași parcurși pentru a ajunge la final sau <strong style={{ color: 'red' }}>Nu există drum spre ieșire!</strong> în cazul în care nu putem ajunge la final.<br /><br />
                    S = start (0,0)<br />
                    F = final (4,4)<br /><br />

                    0  1  0  0  0<br />
                    0  1  0  1  0<br />
                    0  0  0  1  0<br />
                    1  1  0  1  0<br />
                    0  0  0  0  F<br /><br />

                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 <br /> 0 1 0 0 0 <br />0 1 0 1 0 <br /> 0 0 0 1 0 <br />
                        0 1 0 1 0 <br /> 0 0 0 1 0
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> Numarul minim de pasi: 13
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cautarea drumului intr-un labirint" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cautarea drumului intr-un labirint"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default Labirinth