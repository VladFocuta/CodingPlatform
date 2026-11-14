import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function InserareCifraDupaCifrelePare() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['1234'], expected: '123345' },
        { params: ['2468'], expected: '23456789' },
        { params: ['13579'], expected: '13579' },
        { params: ['2024'], expected: '23012345' },
        { params: ['8'], expected: '89' },
        { params: ['888888888'], expected: '898989898989898989' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Se citește un număr natural n. Să se construiască și să se afișeze numărul obținut prin inserarea, imediat după fiecare cifră pară a lui n, a cifrei următoare acesteia.
                    De exemplu, după cifra 2 se inserează cifra 3, după cifra 4 se inserează cifra 5, iar după cifra 8 se inserează cifra 9.
                    <br /><br />
                    Mențiuni:<br />
                    0 ≤ n ≤ 999.999.999<br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />1234</h4>
                    <h4 style={{ marginLeft: '10px' }}>Date de ieșire:<br />123345</h4>
                </div>
            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Inserare cifra dupa cifrele pare" />
            </div>
        </>
    )

    return (
        <ProblemPage
            problemName="Inserare cifra dupa cifrele pare"
            problemPoints={2}
            problemContent={problemContent}
            nextRoute="/problems/Cel mai mic si cel mai mare divizor impar"
            testPassed={testPassed}
        />
    )
}

export default InserareCifraDupaCifrelePare
