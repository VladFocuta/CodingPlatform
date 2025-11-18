import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function PrimeDiv() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['52'], expected: 'Divizorul prim 2 divide pe n de 2 ori \n Divizorul prim 13 divide pe n de 1 ori' },
        { params: ['3268'], expected: 'Divizorul prim 2 divide pe n de 2 ori \n Divizorul prim 19 divide pe n de 1 ori \n Divizorul prim 43 divide pe n de 1 ori' },
        { params: ['30'], expected: 'Divizorul prim 2 divide pe n de 1 ori \n Divizorul prim 3 divide pe n de 1 ori \n Divizorul prim 5 divide pe n de 1 ori' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un număr natural n. Descompuneți numărul n în factori primi.
                    Pentru fiecare divizor prim d, afișați de câte ori divide pe n (exponentul factorului d).<br />
                    Numărul n se citește de la tastatură.<br />
                    Afișarea se va face ca în exemplul de mai jos.
                    <br /><br />

                    Exemplu:

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4 >Date de intrare: <br />52

                    </h4>
                    <h4> Date de iesire:  <br /> <strong style={{ color: 'red' }}>Divizorul prim </strong> 2 <strong style={{ color: 'red' }}> divide pe n de  </strong> 2 <strong style={{ color: 'red' }}> ori </strong><br />
                        <strong style={{ color: 'red' }}>Divizorul prim </strong> 13 <strong style={{ color: 'red' }}> divide pe n de </strong> 1 <strong style={{ color: 'red' }}> ori </strong>
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Factori primi" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Factori primi"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Interschimbare doua jumatati"
            testPassed={testPassed}
        />
    )
}

export default PrimeDiv