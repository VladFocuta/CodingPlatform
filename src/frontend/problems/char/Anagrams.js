import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Anagrams() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['abcd', '\n dcba'], expected: 'DA' },
        { params: ['mere', '\n erem'], expected: 'DA' },
        { params: ['mere', '\n pere'], expected: 'NU' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dau doua siruri de caractere. Trebuie sa verifici daca cele doua siruri sunt anagrame.<br />
                    Doua siruri sunt anagrame daca, atunci cand sunt sortate, au aceleasi caractere (indiferent de ordine).<br />
                    Sa se afiseze <strong style={{color: 'red'}}>DA</strong>, daca sunt anagrame sau in caz contrar, <strong style={{color: 'red'}}>NU</strong>. <br />
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />abcd dcba

                    </h4>
                    <h4> Date de iesire: <br />DA</h4>

                </div>
                

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Anagrame" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Anagrame"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Copia unui sir de caractere"
            testPassed={testPassed}
        />
    )
}

export default Anagrams