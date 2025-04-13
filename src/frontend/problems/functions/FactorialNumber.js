import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function FactorialNumber() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5'], expected: '120' },
        { params: ['1'], expected: '1' },
        { params: ['0'], expected: '1' },
        { params: ['7'], expected: '5040' },

    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Sa se creeze o functie recursiva care calculeaza factorialul unui numar.
                    <br />
                    Numarul n se citeste in main() de la tastatura si apoi se apeleaza functia creata de noi.<br />
                    La final afisam factorialul lui n. <br />

                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 5
                        
                    </h4>
                    <h4> Date de iesire: 120 </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Functie-Factorialul unui numar" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Functie-Factorialul unui numar"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Simularea unei stive"
            testPassed={testPassed}
        />
    )
}

export default FactorialNumber