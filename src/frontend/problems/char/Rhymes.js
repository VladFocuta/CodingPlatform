import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Rhymes() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['2 mere pere'], expected: 'Sunt rime' },
        { params: ['3 ananas capsuni'], expected: 'Nu sunt' },
        { params: ['2 rostogolit fugarit'], expected: 'Sunt rime' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Să se verifice dacă două cuvinte introduse de la tastatură sunt rime (dacă
                    ultimele p caractere ale celor două cuvinte coincid, unde p este o valoare
                    dată).<br />
                    P se citeste de la tastatura,urmat de cele doua cuvinte.<br />
                    Programul afișează <strong style={{ color: 'red' }}>Sunt rime</strong> sau <strong style={{ color: 'red' }}>Nu sunt</strong>, în caz contrar.

                    
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />2 mere pere

                    </h4>
                    <h4> Date de iesire: <br />Sunt rime</h4>

                </div>
                

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Verificarea rimelor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Verificarea rimelor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Filtrarea cuvintelor dupa lungime"
            testPassed={testPassed}
        />
    )
}

export default Rhymes