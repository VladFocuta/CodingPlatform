import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function CodeRepeatDigits() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['abc', '\n243'], expected: 'aabbbbccc' },
        { params: ['abc', '\n22a'], expected: 'Al doilea sir nu este valid.' },
        { params: ['abcz', '\n5672'], expected: 'aaaaabbbbbbccccccczz' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dau două şiruri de caractere de lungimi egale. Al doilea şir conţine doar
                    cifre, în caz contrar programul terminându-se afişând mesajul <strong style={{ color: 'red' }}>Al doilea sir nu este valid.</strong>. Se cere
                    să se construiască un al treilea şir, prin repetarea pe rând, a fiecărui caracter
                    din primul şir, de un număr de ori egal cu cifra corespunzătoare din al doilea
                    şir.<br />
                    Să se afişeze noul şir.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />abc <br /> 243

                    </h4>
                    <h4> Date de iesire: <br /> aabbbbccc</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Codificare prin repetare ghidata de cifre" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Codificare prin repetare ghidata de cifre"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default CodeRepeatDigits