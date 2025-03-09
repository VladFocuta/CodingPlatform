import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function EdgesDelete() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6', '7', '3', '1 2 \n1 3 \n2 4 \n2 5 \n3 5 \n4 5 \n5 6 \n1 3 \n 4 5 \n3 5'], expected: '0 1 0 0 0 0 \n1 0 0 1 1 0 \n0 0 0 0 0 0 \n0 1 0 0 0 0 \n0 1 0 0 0 1 \n0 0 0 0 1 0' },

    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un graf neorientat cu n vârfuri și m muchii. Se cere să se elimine k muchii la alegere și să se afișeze matricea de adiacență a grafului parțial obținut.
                    <br />
                    Pe prima linie se citeste n, m si k, reprezentand numarul de muchii care urmeaza sa fie eliminate.<br />
                    Fiecare muchie va fi introdusa pe o noua linie ca in exemplu.

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 6 7 3<br /> 1 2 <br /> 1 3 <br /> 2 4<br />2 5 <br /> 3 5<br />4 5<br />5 6 <br />1 3<br /> 4 5<br /> 3 5

                    </h4>
                    <h4> Date de iesire: <br />
                        0 1 0 0 0 0<br />
                        1 0 0 1 1 0<br />
                        0 0 0 0 0 0<br />
                        0 1 0 0 0 0<br />
                        0 1 0 0 0 1<br />
                        0 0 0 0 1 0<br />
                        
                    </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Eliminarea muchiilor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Eliminarea muchiilor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Subgraf conex"
            testPassed={testPassed}
        />
    )
}

export default EdgesDelete