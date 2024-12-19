import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'


function TemperatureConversion() {
    const [testPassed, setTestPassed] = useState(false);


    const testCases = [
        { params: [3], expected: [37.4] },
        { params: [0], expected: [32] },
        { params: [25.3], expected: [77.54] },
        { params: [-25.5], expected: [-13.9] },
        { params: [-17], expected: [1.4] },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Astazi ai invatat ca temperatura se masoara si in Fahrenheit, nu doar in grade Celsius.
                    <br />
                    Scrie un program care te ajuta sa faci conversia din Celsius in Fahrenheit.<br />
                    <br />
                    Numarul se citeste de la tastatura si apoi se va afisa conversia.<br /><br />
                    <h5 style={{ color: 'red' }}>Mentiuni:</h5>
                    Numerele sunt rationale.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 3
                        <br />
                    </h4>
                    <h4> Date de iesire: 37.4
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Conversia temperaturii" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Conversia temperaturii"
            problemPoints={1}
            testPassed={testPassed}
            problemContent={problemContent}
            nextRoute="/problems/Divizibilitate"
        />
    )
}

export default TemperatureConversion