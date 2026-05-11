import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function IntervalXY() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['20', '5 9 0 8 10 11 12 13 15 14 6 7 40 10 0 0 5 41 95 7'], expected: '0 5 \n 15 40 \n 41 95' },
        { params: ['5', '1 2 3 4 5'], expected: 'nu exista' },
        { params: ['10', '1 2 99 4 5 8 3 9 13 17'], expected: '5 8 \n 9 13 \n 13 17 \n 17 99' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se dă un șir cu n (1 &lt;= n &lt;= 1000000) numere naturale din intervalul [0,10<sup>2</sup>]. Se cere să se determine toate perechile distincte formate din termeni ai șirului dat, x și y (y-x≥2), astfel încât să nu existe niciun termen al șirului care să aparțină intervalului (x,y).
                    Dacă nu există nicio astfel de pereche, se afișează mesajul <strong style={{ color: 'red' }}>nu exista</strong>.<br />
                    Pe prima linie se citește n și pe a doua, elementele șirului, separate prin spații.<br />
                    Se vor afișa perechile găsite, câte una pe linie, în ordine strict crescătoare, separate printr-un spațiu, iar dacă nu există nicio astfel de pereche, se afișează mesajul <strong style={{ color: 'red' }}>nu exista</strong>.

                    <br /><br />
                    Mențiuni:<br />
                    pentru determinarea numerelor cerute utilizați un algoritm eficient din punctul de vedere al timpului de executare: recomandă evitarea memorării elementelor șirului într-un tablou sau în altă structură de date similară
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />10 <br /> 1 2 99 4 5 8 3 9 13 17

                    </h4>
                    <h4> Date de iesire: <br />5 8<br />9 13 <br /> 13 17 <br /> 17 99
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Interval X Y" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Interval X Y"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default IntervalXY