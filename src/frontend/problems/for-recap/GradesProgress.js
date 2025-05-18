import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function GradesProgress() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '1 2 3 4 5'], expected: '1 2 3 4 5' },
        { params: ['7', '6 4 8 10 5 9 3'], expected: '10 5 9 3' },
        { params: ['5', '1 5 3 4 5'], expected: '1 5' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>La finalul semestrului, un elev a primit note la mai multe teste. Profesorul vrea să analizeze evoluția elevului între cel mai slab rezultat și cel mai bun.<br /><br />
                    Scrie un program care să:<br />

                    - citească de la tastatură un număr întreg n (1 ≤ n ≤ 100), reprezentând numărul de teste susținute,<br />

                    - citească apoi n numere întregi reprezentând notele obținute la fiecare test,<br />

                    - identifice nota minimă și nota maximă,<br />

                    - afișeze, în ordine, toate notele de la testul cu nota minimă până la testul cu nota maximă (inclusiv), indiferent de ordinea în care apar acestea în șir (programul decide corect care apare prima).

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />7<br />
                        6 4 8 10 5 9 3<br />
                    </h4>
                    <h4> Date de iesire:<br /> 10 5 9 3

                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Progresul notelor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Progresul notelor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default GradesProgress