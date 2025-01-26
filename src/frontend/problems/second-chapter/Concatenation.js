import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function Concatenation() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [2, 1245], expected: [21245] },
        { params: [999, 0], expected: [9990] },
        { params: [1234567, 989302], expected: [1234567989302] },
        { params: [30, 67], expected: [3067] }
    ];
    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care concateneaza doua numere, mai precis, care lipeste doua numere.
                    <br />
                    Numerele sunt naturale si se citesc de la tastatura.<br />
                    La final afisam noul numar.<br /><br />
                    Mentiuni:<br /> 1 &lt;= numar1 <br /> 0 &lt;= numar2
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 2 1245
                        <br />
                    </h4>
                    <h4> Date de iesire: 21245
                    </h4>
                </div> <br />

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 30 67
                        <br />
                    </h4>
                    <h4> Date de iesire: 3067
                    </h4>
                </div> 


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Concatenarea" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Concatenarea"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Trenul"
            testPassed={testPassed}
        />
    )
}

export default Concatenation