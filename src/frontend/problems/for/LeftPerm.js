import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function LeftPerm() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6', '12 7 6 3 8 5'], expected: '7 6 3 8 5 12' },
        { params: ['1', '100'], expected: '100' },
        { params: ['10', '1 2 3 4 5 6 7 8 9 10'], expected: '2 3 4 5 6 7 8 9 10 1' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieți un program care citește un număr natural n și un tablou unidimensional cu n componente. Fiecare componentă a acestui tablou este un număr întreg care are cel mult 8 cifre.<br />
                    Programul permută circular cu o poziţie spre stânga primele n elemente ale tabloului x.<br />
                    Programul citește de la tastatură numărul n.<br />
                    Să se afișeze elementele vectorului după efectuarea permutărilor.
                    <br /><br />
                    Menţiuni:<br />
                    0 &lt; n &lt;= 100<br />
                    tabloul x are elementele indexate de la zero
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 6  <br /> 12 7 6 3 8 5
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />7 6 3 8 5 12
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Permutare la stanga" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Permutare la stanga"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Permutari circulare"
            testPassed={testPassed}
        />
    )
}

export default LeftPerm