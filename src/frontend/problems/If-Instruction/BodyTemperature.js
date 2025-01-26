import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function BodyTemperature() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [36.1], expected: 'Temperatura este normala' },
        { params: [37.3], expected: 'Febra' },
        { params: [36], expected: 'Temperatura scazuta' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieti un program care verifica temperatura corpului în Celsius.<br />
                    Valoarea temperaturii va fi introdusa de la tastatura de catre utilizator.<br />
                    Sa se afiseze mesajul corespunzator in functie de temperatura introdusa.<br />
                    <strong style={{ color: 'red' }}>Temperatura este normala</strong> daca este intre 36.1°C si 37.2°C.<br />
                    <strong style={{ color: 'red' }}>Febra</strong> daca este peste 37.2°C.<br />
                    <strong style={{ color: 'red' }}>Temperatura scazuta</strong> daca este sub 36.1°C.
                    <br /><br />
                    Mentiuni: <br />
                    35.0°C &lt; <strong style={{ color: '#00bfff' }}>temperatura</strong> &lt; 40.0°C<br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:  38.2
                        <br />
                    </h4>
                    <h4> Date de iesire: Febra
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Temperatura corpului" />
            </div>
        </>
    )

    return (
        <ProblemPage
            problemName="Temperatura corpului"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Numar absolut"
            lecture={false}
            testPassed={testPassed}
        />
    )
}

export default BodyTemperature