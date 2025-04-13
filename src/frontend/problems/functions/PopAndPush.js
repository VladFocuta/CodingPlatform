import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function PopAndPush() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '1 20 1 30 0 0'], expected: '20 \n Stiva este goala \n' },
        { params: ['6', '1 33 1 59 1 45 0 0 0'], expected: '59 \n 33 \n Stiva este goala \n' },
        { params: ['5', '0 0 0 0 0'], expected: 'Stiva este goala \n Stiva este goala \n Stiva este goala \n Stiva este goala \n Stiva este goala \n' },
        { params: ['5', '0 1 22 1 33 1 55 1 66'], expected: 'Stiva este goala \n' },

    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă o secvență de operații aplicate asupra unei stive goale. Operațiile sunt de două tipuri:<br />
                    <br />
                    PUSH x – se adaugă numărul x în stivă(in loc de push folosim cifra 1)<br />

                    POP – se elimină elementul din vârful stivei (dacă există). (în loc de pop folosim cifra 0) <br /><br />
                    După fiecare operație POP, dacă stiva nu este goală, se va afișa valoarea din vârful stivei. Dacă stiva este goală, se va afișa <strong style={{ color: 'red' }}>Stiva este goala</strong>.<br /><br />
                    Pe prima linie se află un număr natural n – numărul de operații (1 ≤ n ≤ 100).<br />

                    Pe următoarele n linii se află fie o instrucțiune de tipul:<br />

                    PUSH x (x este un număr întreg cu -1000 ≤ x ≤ 1000),<br />

                    fie POP.<br />
                    Să se creeze o functie pentru push si una pentru pop.<br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />4<br />
                        1 20<br />
                        1 30<br />
                        0<br />
                        0

                    </h4>
                    <h4> Date de iesire:<br /> 20<br />
                        Stiva este goala </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Simularea unei stive" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Simularea unei stive"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default PopAndPush