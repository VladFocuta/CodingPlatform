import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function ComplementGraph() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '\n0 1 0 1 \n1 0 1 0 \n0 1 0 1 \n1 0 1 0'], expected: '0 0 1 0 \n0 0 0 1 \n1 0 0 0 \n 0 1 0 0' },

    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un graf neorientat cu n noduri, reprezentat printr-o matrice de adiacență.
                    <br />Graful nu conține bucle (adică nu există muchii de la un nod la el însuși).<br />
                    Construiți și afișați graful complementar al acestui graf.<br />
                    Pe prima linie se citeste numărul întreg n, numărul de noduri.<br />
                    Următoarele n linii conțin câte n numere binare (0 sau 1) reprezentând matricea de adiacență a grafului inițial.<br />
                    Se afișează n linii, fiecare conținând n valori (0 sau 1), reprezentând matricea de adiacență a grafului complementar.

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 4<br />
                        0 1 0 1<br />
                        1 0 1 0<br />
                        0 1 0 1<br />
                        1 0 1 0<br />

                    </h4>
                    <h4> Date de iesire: <br /> 0 0 1 0<br />
                        0 0 0 1<br />
                        1 0 0 0<br />
                        0 1 0 0<br /></h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Graf complementar" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Graf complementar"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Nul-Complet-Regulat-Bipartit"
            testPassed={testPassed}
        />
    )
}

export default ComplementGraph