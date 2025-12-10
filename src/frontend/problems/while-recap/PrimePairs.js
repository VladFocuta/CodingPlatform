import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function PrimePairs() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '9', '6', '10', '7', '14', '0'], expected: '2' },
        { params: ['4', '9', '25', '16', '7', '21', '0'], expected: '4' },
        { params: ['15', '63', '43', '129', '55', '15', '4', '0'], expected: '3' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Să se scrie un program care determină câte perechi de numere citite consecutiv sunt prime între ele.<br />
                    Numerele se citesc de la tastatură până la introducerea valorii 0.<br />
                    Programul afisează pe ecran numărul de perechi care respectă conditia cerută.
                    <br /><br />

                    Exemplu:

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4 >Date de intrare: <br /> 5 9 6 10 7 14 0 <br />
                        perechi de numere prime consecutive: <strong style={{ color: 'green' }}> (5, 9) (10, 7)</strong>
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br /> 2
                    </h4>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 4 9 25 16 7 21 0<br />
                        perechi de numere prime consecutive: <strong style={{ color: 'green' }}> (4, 9) (9, 25), (25, 16), (16, 7)</strong>
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br /> 4
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Perechi de numere prime" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Perechi de numere prime"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Suma numerelor cu prima cifra k"
            testPassed={testPassed}
        />
    )
}

export default PrimePairs