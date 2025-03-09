import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function ChainProblem() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '5', '1 2 \n2 3 \n3 4 \n4 5 \n2 4 \n4 \n1 2 4 3'], expected: 'ELEMENTAR' },
        { params: ['5', '5', '1 2 \n2 3 \n3 4 \n4 5 \n2 4 \n6 \n1 2 4 2 4 5'], expected: 'COMPUS' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un graf neorientat cu n vârfuri si cu m muchii, reprezentat prin liste de adiacență.<br />
                    Un lanț este o secvență de vârfuri adiacente conectate prin muchii. Să se determine dacă un lanț dat este elementar sau compus.<br /><br />
                    Elementar = nu are vârfuri repetate.<br />
                    Compus = are muchii repetate.<br /><br />
                    Citim de la tastatura N, M (numărul de noduri și muchii).<br />
                    M linii cu câte două numere întregi x y, reprezentând o muchie între nodurile x și y.<br />
                    Un număr L (lungimea lanțului).<br />
                    L vârfuri, reprezentând lanțul.<br />
                    Să se afișeze tipul lanțului: <strong style={{color:'red'}}>ELEMENTAR</strong>, <strong style={{color:'red'}}>COMPUS</strong>.
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 5 5<br />
                        1 2<br />
                        2 3<br />
                        3 4<br />
                        4 5<br />
                        2 4<br />
                        4<br />
                        1 2 4 3
                    </h4>
                    <h4> Date de iesire: <br /> ELEMENTAR
                    </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Determinarea tipului de lant" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Determinarea tipului de lant"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Conex-Componente conexe-Biconex"
            testPassed={testPassed}
        />
    )
}

export default ChainProblem