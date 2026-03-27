import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function SubNumber() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '393 17775787 72194942 12121774'], expected: '77 21' },
        { params: ['1', '10'], expected: '10' },
        { params: ['3', '10101010 2121212 232323232'], expected: '32 23 10' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Un număr natural x, format din exact două cifre, este numit sub-număr al unui număr natural y dacă cifrele lui x apar, în aceeași ordine, pe ranguri consecutive, în numărul y.<br />
                    Exemplu: 21 este sub-număr al lui 12145, al lui 213, al lui 21, dar nu și al lui 123 sau al lui 231.<br />
                    Se citesc cel mult 1.000.000 de numere naturale.<br />
                    Se cere să se afișeze, în ordine descrescătoare, sub-numerele care apar de cele mai multe ori în scrierea numerelor date.<br />
                    Se va citi de la tastatură numărul n, urmat de n de numere naturale cu cel puțin 2 cifre, separate prin câte un spațiu, dispuse pe mai multe linii.
                    <br /><br />
                    Mențiuni:<br />
                    - numerele citite vor fi din intervalul [10, 1.000.000.000]
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />4 <br />393 17775787 72194942 12121774

                    </h4>
                    <h4> Date de iesire: <br />77 21
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Sub-numar" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Sub-numar"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Inlocuire maxim"
            testPassed={testPassed}
        />
    )
}

export default SubNumber