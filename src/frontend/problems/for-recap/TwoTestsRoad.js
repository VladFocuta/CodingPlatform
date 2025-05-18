import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function TwoTestsRoad() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6', '1 2 3 4 5 6'], expected: '20' },
        { params: ['4', '2 2 2 2'], expected: '8' },
        { params: ['4', '1 3 5 7'], expected: '0' },
        { params: ['4', '1 3 2 7'], expected: '2' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>La ora de informatică, elevii dintr-o clasă au susținut n teste pe parcursul unui semestru.<br />
                    Fiecare test a fost notat cu un punctaj întreg, iar rezultatele au fost înregistrate într-un tabel.<br />

                    Profesorul vrea să afle care a fost efortul total al unui elev între primul și ultimul test reușit, unde un test este considerat „reușit” dacă punctajul său este par.<br /><br />

                    Astfel, trebuie să identifici:<br />

                    prima notă pară înregistrată (primul test reușit),<br />

                    ultima notă pară (ultimul test reușit),<br />

                    și apoi să calculezi suma tuturor punctajelor dintre aceste două teste, inclusiv ele.<br />

                    Ajută profesorul să calculeze acest „efort total între succese”!<br />
                    La final, să se afișeze suma.

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />6<br />
                        1 2 3 4 5 6<br />
                    </h4>
                    <h4> Date de iesire:<br /> 20

                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Drumul dintre doua teste reusite" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Drumul dintre doua teste reusite"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Progresul notelor"
            testPassed={testPassed}
        />
    )
}

export default TwoTestsRoad