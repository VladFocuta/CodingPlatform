import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function DigitalCatalog() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '122 123 222 344'], expected: '3' },
        { params: ['5', '152 21 9 7684 10001'], expected: '0' },
        { params: ['3', '122 244 777'], expected: '3' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>La final de semestru, doamna profesoară de matematică decide să își digitalizeze catalogul.<br />
                    Fiecare elev are o medie finală notată cu un număr întreg între 0 și 100.<br />

                    Într-un moment de curiozitate, profesoara vrea să afle câte dintre aceste medii au o particularitate interesantă:
                    ultimele două cifre ale mediei (zecile și unitățile) sunt egale. De exemplu, media 77 sau 88 ar fi considerate „note gemene”.<br />

                    Tu ești responsabil să scrii un program care o ajută să numere aceste „note gemene” din lista notelor elevilor.<br /><br />

                    Scrie un program care citește un număr n (1 ≤ n ≤ 100), reprezentând numărul elevilor, și apoi n numere întregi (mediile lor).<br />
                    Programul va afișa câte dintre aceste medii au ultimele două cifre egale.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />3<br />
                        122 243 88<br />
                    </h4>
                    <h4> Date de iesire:<br /> 2

                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Catalogul digital" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Catalogul digital"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default DigitalCatalog