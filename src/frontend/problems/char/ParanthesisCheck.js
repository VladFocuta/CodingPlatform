import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function ParanthesisCheck() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['{[()()]}'], expected: 'CORECT' },
        { params: ['([)]'], expected: 'INCORECT' },
        { params: ['({(}))'], expected: 'INCORECT' },
        { params: ['((({{[]}})))'], expected: 'CORECT' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un șir format din caracterele (, ), [, ], {'{'}, {'}'}. Se cere să se verifice dacă parantezele sunt corect închise și ordonate, conform regulilor:<br />
                    Fiecare paranteză deschisă trebuie să fie închisă de același tip de paranteză.<br />

                    Parantezele trebuie să fie închise în ordinea corectă (conform principiului LIFO — ultimul deschis, primul închis).<br />
                    Programul citește de la tastatură un șir format doar din caracterele ( ), [ ], { } cu cel mult 1000 de caractere.<br />
                    Programul va afișa pe ecran:<br />

                    <strong style={{color: 'red'}}>CORECT</strong> dacă parantezele sunt corect închise și ordonate.<br />

                    <strong style={{color: 'red'}}>INCORECT</strong> în caz contrar.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />{'{'}[()()]{'}'}

                    </h4>
                    <h4> Date de iesire: <br />CORECT</h4>

                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />({'['}){']'} <br />

                    </h4>
                    <h4> Date de iesire: <br />INCORECT</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Verificarea corectitudinii parantezelor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Verificarea corectitudinii parantezelor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Verificarea rimelor"
            testPassed={testPassed}
        />
    )
}

export default ParanthesisCheck