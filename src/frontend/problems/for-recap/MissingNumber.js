import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function MissingNumber() {
    const [testPassed, setTestPassed] = useState(false);
//stergem [] de la fiecare test care are in output in string
    const testCases = [
        { params: ['5', '1 2 3 4 5', '1 2 3 4'], expected: [5] },
        { params: ['6', '4 3 3 8 9 100', '4 3 8 9 100'], expected: [3] },
        { params: ['8 ', '6 0 2 12 3 43 100 399', '0 2 12 3 43 100 399'], expected: [6] },
        { params: ['6', '12 0 3 25 24 19', '12 3 25 24 19'], expected: [0] },
        { params: ['2', '1 2', '1'], expected: [2] },
        { params: ['3', '7 7 7', '7 7'], expected: [7] },

    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dau doua siruri de numere, N si N - 1. Sa se afiseze numarul lipsa din al doilea sir.
                    <br />
                    Pe prima linie se citeste de la tastatura un numar întreg N (2 ≤ N ≤ 50).<br />
                    Pe a doua linie se citesc de la tastatura N numere intregi separate prin spatiu, apoi N - 1 numere intregi.<br />
                    Al doilea sir, are N - 1 elemente din primul sir.
                    Programul trebuie sa afiseze numarul lipsa.<br />
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 6 <br /> 12 0 3 25 24 19
                        <br />
                        12 3 25 24 19
                    </h4>
                    <h4> Date de iesire: 0
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numar lipsa" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numar lipsa"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Element majoritar"
            testPassed={testPassed}
        />
    )
}

export default MissingNumber