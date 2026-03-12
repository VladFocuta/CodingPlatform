import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function ArrrayTermsY() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['21', '31'], expected: '31 21 13 7 3 1' },
        { params: ['43', '57'], expected: '57 43 31 21 13 7 3 1' },
        { params: ['7', '13'], expected: '13 7 3 1' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se consideră șirul 1, 3, 7, 13, 21, 31, 43 ... definit astfel: f0=1, iar fn=fn-1+2*n, dacă n≥1 (unde n
                    este un număr natural).<br />
                    Se citesc de la tastatură două numere naturale din intervalul [1,10<sup>9</sup>], x și y (x&lt;y), reprezentând doi
                    termeni aflați pe poziții consecutive în șirul dat.<br />
                    Să se afișeze separați prin câte un spațiu, toți termenii șirului mai mici sau egali cu y, în ordine inversă a apariției lor în șir.<br />
                    Proiectați un algoritm eficient din punctul de vedere al spațiului de memorie și al timpului de executare.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />21 31



                    </h4>
                    <h4> Date de iesire: <br /> 31 21 13 7 3 1</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Termenii sirului mai mici sau egali cu y" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Termenii sirului mai mici sau egali cu y"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default ArrrayTermsY