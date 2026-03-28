import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function OddNumbersProduct() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['296385', '3'], expected: '15' },
        { params: ['572913', '4'], expected: '27' },
        { params: ['572913', '1'], expected: '3' },
        { params: ['357', '3'], expected: '105' },
        { params: ['2468', '3'], expected: '1' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citesc de la tastatură două numere naturale n (1 &lt;= n &lt; 10<sup>6</sup>), k (0 &lt; k).<br />
                    Să se determine și să se afișeze produsul cifrelor impare dintre ultimele k cifre ale numărului n.
                    Dacă nu există astfel de cifre, să se afișeze <strong style={{ color: 'red' }}>1</strong>.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />296385 3


                    </h4>
                    <h4> Date de iesire: <br /> 15</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Produsul cifrelor impare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Produsul cifrelor impare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Numere cu cifre impare intr-un interval"
            testPassed={testPassed}
        />
    )
}

export default OddNumbersProduct