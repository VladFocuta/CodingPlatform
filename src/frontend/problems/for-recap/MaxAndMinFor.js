import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function MaxAndMinFor() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [7, 10, 5, 7, 9, 6, 4, 8], expected: [4, 10] },
        { params: [3, 10, 10, 10], expected: [10, 10] },
        { params: [1, 2], expected: [2] },
        { params: [5, 3, 1, 3, 2, 10], expected: [1, 10] }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citesc notele a N elevi si trebuie sa le sortezi in ordine crescatoare pentru a vedea cine are cele mai mici si cele mai mari note.
                    <br /> <br />
                    Pe prima linie se citeste un numar întreg N (1 ≤ N ≤ 50), reprezentand numarul de elevi.<br />
                    Pe a doua linie se citesc N numere intregi separate prin spatiu, notele elevilor.<br />
                    Programul va afisa cea mai mica si ce mai mare nota.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 7 <br /> 10 5 7 9 6 4 8
                        <br />
                    </h4>
                    <h4> Date de iesire: 4 10
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Nota maxima si minima" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Nota maxima si minima"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Stergerea unui element"
            testPassed={testPassed}
        />
    )
}

export default MaxAndMinFor