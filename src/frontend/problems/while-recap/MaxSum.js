import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function MaxSum() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [1, 1], expected: "SUMELE SUNT EGALE" },
        { params: [101, 1001], expected: "SUMELE SUNT EGALE" },
        { params: [9229, 982], expected: [9229] },
        { params: [1000000000, 83138], expected: [83138] }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Sa se scrie un program care calculeaza suma cifrelor a doua numere si sa se afiseze numarul care are suma cea mai mare.
                    <br /><br />
                    Mentiuni: 1 ≤ a, b ≤ 1 000 000<br /> In cazul in care sumele sunt egale, sa se returneze <strong style={{ color: '#00bfff' }}>SUMELE SUNT EGALE</strong>.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 803 88
                        <br />
                    </h4>
                    <h4> Date de iesire: 88
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test 
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma maxima" />
            </div>
        </>
    )



    return (
        <ProblemPage
            problemName="Suma maxima"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Numar impar"
            testPassed={testPassed}
        />
    )
}

export default MaxSum