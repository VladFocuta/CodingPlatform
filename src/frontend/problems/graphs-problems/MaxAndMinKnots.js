import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function MaxAndMinKnots() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6', '7', '1 2 \n1 3 \n2 4 \n2 5 \n3 5 \n4 5 \n5 6'], expected: 'Nodurile cu grad maxim: 5 (Grad = 4) \nNodurile cu grad min: 6 (Grad = 1)' },

    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un graf neorientat cu N noduri și M muchii, reprezentat printr-o matrice de adiacență.<br />
                    Să se determine și afișeze:
                    <br />
                    Nodul (sau nodurile) cu gradul maxim.<br />
                    Nodul (sau nodurile) cu gradul minim.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 6 7 <br /> 1 2 <br /> 1 3 <br /> 2 4<br />2 5 <br /> 3 5<br />4 5<br />5 6 <br />

                    </h4>
                    <h4> Date de iesire: <br />
                        Nodurile cu grad maxim: 5 (Grad = 4)<br />
                        Nodurile cu grad min: 6 (Grad = 1)<br />
                    </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Nodurile cu grad maxim si minim" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Nodurile cu grad maxim si minim"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Partial-Subgraf-Complementar"
            testPassed={testPassed}
        />
    )
}

export default MaxAndMinKnots