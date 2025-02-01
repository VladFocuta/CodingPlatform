import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function ValuesCounter() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '3', '0 -2 3 5 0 -1 2 -4 0'], expected: 'Pozitive: 3 Negative: 3 Zero: 3' },
        { params: ['3', '3', '0 0 0 0 0 0 0 0 0'], expected: 'Pozitive: 0 Negative: 0 Zero: 9' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice n x m. Determina cate elemente pozitive, negative si zero sunt in matrice.
                    <br />
                    Pe prima linie se citesc numerele n si m.<br />
                    Pe a doua linie citim elementele matricei. <br />
                    Programul va afisa rezultatele in felul urmator:<br />
                    <strong style={{color: 'red'}}>Pozitive: (valoarea)</strong><br />
                    <strong style={{color: 'red'}}>Negative: (valoarea)</strong><br />
                    <strong style={{color: 'red'}}>Zero: (valoarea)</strong><br />
                  
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 3 3 <br /> 0 -2 3 <br /> 5 0 -1 <br /> 2 -4 0<br />
                        
                    </h4>
                    <h4> Date de iesire: <br /> Pozitive: 3 <br /> Negative: 3 <br /> Zero: 3 </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Contorizarea valorilor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Contorizarea valorilor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Matrice simetrica"
            testPassed={testPassed}
        />
    )
}

export default ValuesCounter