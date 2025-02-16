import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function SearchData() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['2', 'Ana 22', 'Viorel 16', 'Viorel', '1'], expected: 'Viorel a fost sters'},
        { params: ['2', 'Ana 22', 'Viorel 16', 'Viorel', '2'], expected: 'Nume: Viorel, Varsta: 16'},
        { params: ['2', 'Ana 22', 'Viorel 16', 'Matei', '1'], expected: 'Matei nu a fost gasit'},
        { params: ['2', 'Ana 22', 'Viorel 16', 'Matei', '2'], expected: 'Matei nu a fost gasit'},
        
    ]

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Se citește un număr n de la tastatura care reprezintă numărul de persoane. Pentru fiecare persoană, se vor introduce numele și vârsta.<br />
                    Sa se creeze o functie care ne permite sa cautam o persoana si una care ne permite sa stergem o persoana.<br />
                    Citim numele de la tastatura pentru persoana care urmeaza sa fie cautata. In cazul in care persoana cautata nu se regaseste in vector, afisam <strong style={{color: 'red'}}>"numele" nu a fost gasit</strong>.<br />
                    Apoi introducem tasta 1 daca vrem sa stergem persoana sau 2 daca vrem sa o afisam (afisarea se face sub forma <strong style={{color:'red'}}>Nume: nume, Varsta: varsta</strong> ).<br />
                    In cazul in care o stergem, sa se afiseze mesajul <strong style={{color: 'red'}}>"numele" a fost sters</strong>.<br /> 
                    Dar daca nu gasim persoana cautata ca sa o putem sterge, afisam <strong style={{color: 'red'}}>"numele" nu a fost gasit</strong>.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />2<br />Ana 22  <br /> Viorel 16<br /> Viorel <br /> 1
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> Viorel a fost sters
                   
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cautarea unei persoane" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cautarea unei persoane"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Cea mai mare medie"
            testPassed={testPassed}
        />
    )
}

export default SearchData
