import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function HoursConvertor() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [50], expected: "2 zile si 2 ore" },
        { params: [2], expected: "0 zile si 2 ore" },
        { params: [0], expected: "0 zile si 0 ore" },
        { params: [24], expected: "1 zile si 0 ore" }
    ];
 
    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care primeste un numar de ore si îl converteste in zile si ore.
                    <br />
                    Numarul de ore este un numar natural si se citeste de la tastatura.<br />
                    Sa se afiseze numarul de zile si ore ca in exemplul de mai jos.
                    <br /> <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:  50
                        <br />
                    </h4>
                    <h4> Date de iesire: 2 zile si 2 ore
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test 
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Convertirea orelor" />
            </div>
        </>
    )

    return (
        <ProblemPage
            problemName="Convertirea orelor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Palindrom numeric"
            lecture={false}
            testPassed={testPassed}
            
        />
    )
}

export default HoursConvertor