import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function Average() {
    const [testPassed, setTestPassed] = useState(false);


    const testCases = [
        { params: [1, 1, 1], expected: "Respins" },
        { params: [10, 10, 10], expected: "Admis cu media 10" },
        { params: [9, 8, 5], expected: "Admis cu media 7" }
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Scrie un program care calculeaza media a trei note si afiseaza daca studentul este <strong style={{ color: 'red' }}>Admis cu media x</strong> (media =&gt; 5) sau <strong style={{ color: 'red' }}>Respins</strong> (media &lt; 5).
                    <br />
                    Notele sunt numere naturale cuprinse intre 1 - 10 si vor fi citite de la tastatura, apoi se va afisa mesajul corespunzator.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:  8 9 5
                        <br />
                    </h4>
                    <h4> Date de iesire: Admis cu media 7
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Media notelor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Media notelor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Convertirea orelor"
            lecture={false}
            testPassed={testPassed}
        />
    )
}

export default Average
