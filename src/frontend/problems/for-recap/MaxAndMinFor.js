import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function MaxAndMinFor() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [7, 10, 5, 7, 9, 6, 4, 8], expected: [4, 10] },
        { params: [3, 10, 10, 10], expected: [10, 10] },
        { params: [5, 3, 1, 3, 2, 10], expected: [1, 10] }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Într-o zi de toamnă târzie, profesorul Andronic a decis să-și actualizeze vechiul catalog magic.<br />
                    Fiecare elev din clasa sa primise o notă în urma unei evaluări surpriză. Pentru a afla cine are nevoie de ajutor și cine merită laude, profesorul trebuie să sorteze toate notele elevilor.<br />

                    Astfel, el vrea să afle:<br />

                    Cine a obținut cea mai mică notă (pentru a-i oferi îndrumare)<br />

                    Cine a obținut cea mai mare notă (pentru a-l felicita în fața clasei)<br />

                    Ajută-l pe profesorul Andronic să ordoneze notele elevilor săi și să afle valorile extremelor.
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
            nextRoute="/problems/Sortare si interschimbare"
            testPassed={testPassed}
        />
    )
}

export default MaxAndMinFor