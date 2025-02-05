import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function FibonacciRecursiv() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6'], expected: '8' },
        { params: ['1'], expected: '1' },
        { params: ['0'], expected: '0' },
        { params: ['10'], expected: '55' },

    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Sa se creeze o functie recursiva care ne returneaza al n-lea numar din sirul lui Fibonacci.
                    <br />
                    Numarul n se citeste in main() de la tastatura si apoi se apeleaza functia creata de noi.<br />
                    La final afisam numarul transmis de functie. <br />

                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 6
                        
                    </h4>
                    <h4> Date de iesire: 8 </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Fibonacci recursiv" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Fibonacci recursiv"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Functie-Factorialul unui numar"
            testPassed={testPassed}
        />
    )
}

export default FibonacciRecursiv