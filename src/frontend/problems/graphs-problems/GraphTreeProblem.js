import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function GraphTreeProblem() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '3', '0 1 \n1 2 \n2 3'], expected: 'DA' },
        { params: ['4', '3', '0 1 \n1 2 \n2 0'], expected: 'NU' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Un graf este un arbore dacă îndeplinește următoarele două condiții:<br />
                1. Este conex (există un drum între orice pereche de vârfuri).<br />
                2. Nu conține cicluri.<br />
                Se citește de la tastatură un număr n (numărul de vârfuri din graf) si m muchii.<br />
                Următoarele M linii conțin câte două numere u și v, reprezentând o muchie între nodurile u și v.<br />
                Verificați dacă graful este un arbore.<br />
                Să se afișeze <strong style={{color:'red'}}>DA</strong> sau in caz contrar <strong style={{color:'red'}}>NU</strong>.
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 4 3<br />
                        0 1<br />
                        1 2<br />
                        2 3<br />
                       
                    </h4>
                    <h4> Date de iesire: <br /> DA
                    </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Verificare graf arbore" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Verificare graf arbore"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Verificare graf Hamiltonian"
            testPassed={testPassed}
        />
    )
}

export default GraphTreeProblem