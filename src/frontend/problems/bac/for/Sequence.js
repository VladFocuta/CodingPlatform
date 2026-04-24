import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function Sequence() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['17', '3 1 5 2 4 5 5 2 5 9 5 7 4 6 8 0 8'], expected: '9 \n 4 5' },
        { params: ['2', '2 2'], expected: '2 \n 2' },
        { params: ['4', '2 2 3 3'], expected: '2 \n 2 3' },
        { params: ['12', '1 2 3 4 1 0 5 5 6 7 5 0'], expected: '7 \n 0' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Numim secvență încadrată a unui șir de numere naturale un subșir al acestuia, format din termeni aflați pe poziții consecutive în șirul dat, subșir care începe și se termină cu aceeași valoare. Lungimea secvenței este egală cu numărul de termeni ai acesteia.<br />
                    Să se determine secvențele încadrate dintr-un șir, care au lungimea maximă.<br />
                    Vectorul x conține n numere naturale din intervalul [0,9], separate printr-un spațiu.<br />
                    Pe prima linie se va afișa numărul L, reprezentând lungimea maximă a secvențelor încadrate, iar pe a doua linie, valoarea primului termen al fiecărei secvențe încadrate de lungime maximă, în ordine crescătoare și separate printr-un spațiu.
                    <br /><br />
                    Mențiuni:<br />
                    2 ≤ n ≤ 10<sup>6</sup><br />
                    în șir există ce puțin doi termeni egali<br />
                    proiectați un algoritm eficient din punctul de vedere al timpului de executare și a memoriei utilizate<br />
                    se recomandă o soluție care să evite stocarea tuturor valorilor citite într-un tablou sau într-o altă structură de date similară
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />12 <br /> 1 2 3 4 1 0 5 5 6 7 5 0

                    </h4>
                    <h4> Date de iesire: <br />7 <br />0
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Secvente" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Secvente"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default Sequence