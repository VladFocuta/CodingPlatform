import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function ConsonantDelete() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['informatica'], expected: 'ioaia' },
        { params: ['bacalaureat'], expected: 'aaauea' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Un cuvânt s, de cel mult 20 caractere, format doar din litere mici ale alfabetului englez,
                    conţine cel puţin o consoană şi cel puţin o vocală.<br />
                    Scrieţi programul C++ care citeşte de la
                    tastatură cuvântul s, construieşte în memorie şi afişează pe ecran cuvântul obţinut prin
                    eliminarea tuturor consoanelor din cuvântul s.<br />
                    Se consideră consoană oricare literă care nu
                    se află în mulţimea (a, e, i, o, u).
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />informatica


                    </h4>
                    <h4> Date de iesire: <br /> ioaia </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Eliminarea consoanelor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Eliminarea consoanelor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default ConsonantDelete