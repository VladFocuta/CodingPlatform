import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function GraphBipartitProblem() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '4', '1 2 \n2 3 \n3 4 \n4 1'], expected: 'DA' },
        { params: ['3', '3', '1 2 \n2 3 \n3 1'], expected: 'NU' },

    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un graf neorientat cu n noduri si cu m muchii. Se cere să se verifice dacă graful este bipartit.<br />
                    Un graf este bipartit dacă putem colora nodurile în două culori astfel încât două noduri adiacente să nu aibă aceeași culoare.<br />
                    Prima linie conține două numere întregi n si m (1 ≤ n ≤ 100, 1 ≤ m ≤ 1000), numărul de noduri și muchii.<br />
                    Următoarele m linii conțin câte două numere u si v, reprezentând o muchie între nodul u și nodul v.<br />
                    Se afișează DA dacă graful este bipartit, altfel NU
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 4 4<br />
                        1 2<br />
                        2 3<br />
                        3 4<br />
                        4 1

                    </h4>
                    <h4> Date de iesire: <br /> DA
                    </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Graf bipartit" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Graf bipartit"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Conexitate-Lant-Ciclu"
            testPassed={testPassed}
        />
    )
}

export default GraphBipartitProblem