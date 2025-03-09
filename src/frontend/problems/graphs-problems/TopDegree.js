import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function TopDegree() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '6', '1 2 \n1 3 \n2 4 \n2 5 \n3 5 \n4 5'], expected: 'Nodul 1 are 2 grade. \nNodul 2 are 3 grade. \nNodul 3 are 2 grade. \nNodul 4 are 2 grade. \nNodul 5 are 3 grade.' },

    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un graf neorientat cu N noduri și M muchii, reprezentat prin lista muchiilor. Să se determine gradul fiecărui nod.
                    <br />
                    Prima linie conține două numere N și M (numărul de noduri și numărul de muchii).<br />
                    Următoarele M linii conțin câte două numere x y, care indică o muchie între nodurile x și y.<br />
                    Se afișează gradul fiecărui nod, pe linii separate.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 5 6 <br /> 1 2 <br /> 1 3 <br /> 2 4<br />2 5 <br /> 3 5<br />4 5<br />

                    </h4>
                    <h4> Date de iesire: <br /> Nodul 1 are 2 grade.<br />
                        Nodul 2 are 3 grade.<br />
                        Nodul 3 are 2 grade.<br />
                        Nodul 4 are 2 grade.<br />
                        Nodul 5 are 3 grade.<br /></h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Calculul gradului unui varf" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Calculul gradului unui varf"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Nodurile cu grad maxim si minim"
            testPassed={testPassed}
        />
    )
}

export default TopDegree