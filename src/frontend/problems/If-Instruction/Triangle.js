import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Triangle() {
    const [testPassed, setTestPassed] = useState(false);

    function generateTestCases() {
        const testCases = [];

        // Teste pentru laturi care NU formează triunghiuri
        testCases.push({ params: [1, 2, 3], expected: "Laturile nu formeaza un triunghi" });
        testCases.push({ params: [5, 1, 1], expected: "Laturile nu formeaza un triunghi" }); 
        testCases.push({ params: [1, 10, 2], expected: "Laturile nu formeaza un triunghi" });

        // Teste pentru triunghiuri echilaterale
        testCases.push({ params: [5, 5, 5], expected: "Echilateral" });

        // Teste pentru triunghiuri isoscele
        testCases.push({ params: [5, 5, 3], expected: "Isoscel" });
        testCases.push({ params: [3, 5, 5], expected: "Isoscel" });
        testCases.push({ params: [5, 3, 5], expected: "Isoscel" });

        // Teste pentru triunghiuri scalene
        testCases.push({ params: [7, 8, 10], expected: "Scalene" });
        testCases.push({ params: [6, 7, 9], expected: "Scalene" });

        return testCases;
    }

    const testCases = generateTestCases();

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care citeste lungimile a trei laturi și determina daca aceste laturi pot forma un triunghi. Daca da, specificati tipul triunghiului:
                    <br />
                    <strong style={{ color: 'red' }}>Echilateral </strong>(toate laturile sunt egale).<br />
                    <strong style={{ color: 'red' }}>Isoscel </strong>(două laturi sunt egale).<br />
                    <strong style={{ color: 'red' }}>Scalene </strong>(toate laturile sunt diferite).<br />
                    <br />
                    Daca nu, sa se afiseze <strong style={{ color: 'red' }}>Laturile nu formeaza un triunghi</strong>.<br />
                    Numerele sunt pozitive si rationale si vor fi citite de la tastatura.<br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 1 2 3

                        <br />
                    </h4>
                    <h4> Date de iesire: Laturile nu formeaza un triunghi
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Triunghi valid"
                />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Triunghi valid"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            lecture={false}
            testPassed={testPassed}
        />
    )
}

export default Triangle