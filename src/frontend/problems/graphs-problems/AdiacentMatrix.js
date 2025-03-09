import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function AdiacentMatrix() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '6', '1 2 \n1 3 \n2 4 \n2 5 \n3 5 \n4 5'], expected: '0 1 1 0 0 \n1 0 0 1 1 \n1 0 0 0 1 \n0 1 0 0 1 \n0 1 1 1 0' },
       
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un graf neorientat cu N noduri și M muchii. Graful este reprezentat printr-o listă de M perechi de noduri (x, y) care sunt conectate printr-o muchie.
                    <br />
                    Construiește matricea de adiacență a grafului și afișeaz-o.
                    Citim n si m de la tastatura, urmate de muchiile x si y.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 5 6 <br /> 1 2 <br /> 1 3 <br /> 2 4<br />2 5 <br /> 3 5<br />4 5<br />

                    </h4>
                    <h4> Date de iesire: <br /> 0 1 1 0 0<br />
                        1 0 0 1 1<br />
                        1 0 0 0 1<br />
                        0 1 0 0 1<br />
                        0 1 1 1 0<br /></h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Matrice de adiacenta" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Matrice de adiacenta"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Calculul gradului unui varf"
            testPassed={testPassed}
        />
    )
}

export default AdiacentMatrix