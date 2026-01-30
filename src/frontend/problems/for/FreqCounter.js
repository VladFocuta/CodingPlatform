import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function FreqCounter() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7', '1 5 3 5 1 2 8'], expected: '1 5' },
        { params: ['5', '1 2 3 4 5'], expected: 'Nu exista' },
        { params: ['6', '10 0 3 100 99 10'], expected: '10' },
        { params: ['4', '1 1 1 1'], expected: '1' },
        { params: ['6', '1 2 1 2 1 2'], expected: '1 2' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un număr natural n și un vector cu n numere naturale, fiecare cu valoarea cuprinsă între 0 și 100.<br />
                    Să se construiască șirul de frecvență al numerelor citite.<br />
                    Să se afișeze toate valorile care apar de cel puțin două ori, în ordine crescătoare.<br />
                    Dacă nu există astfel de valori, să se afișeze mesajul: <strong style={{ color: 'red' }}>Nu exista</strong>.<br />
                    De la tastatură se citește n și apoi cele n elemente.
                    <br /><br />

                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 7  <br />1 5 3 5 1 2 8
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />1 5
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numarari de aparitii" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numarari de aparitii"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default FreqCounter