import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function StructAddRemoveSearch() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['2', 'George 42', 'Vasile 12', 'Matei 40'], expected: 'Nume: George, Varsta: 42 \n Nume: Vasile, Varsta: 12 \n Nume: Matei, Varsta: 40'}
    ]

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Se citește un număr n de la tastatura care reprezintă numărul de persoane. Pentru fiecare persoană, se vor introduce numele și vârsta.<br />
                    Sa se creeze o functie care ne permite sa mai adaugam o persoana.<br />
                    Citim numele si varsta de la tastatura pentru persoana care urmeaza sa fie adaugata.<br />
                    Apoi apelam functia creata de noi incat sa avem n + 1 persoane in vector.<br />
                    Sa se afiseze vectorul de persoane.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />2<br />George 42  <br /> Vasile 12<br /> adaugaPersoana(numele, varsta)
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> Nume: George, Varsta: 42 <br /> Nume: Vasile, Varsta: 12 <br /> Nume: Matei, Varsta: 40
                   
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Gestionarea unui vector de structuri" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Gestionarea unui vector de structuri"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Cautarea unei persoane"
            testPassed={testPassed}
        />
    )
}

export default StructAddRemoveSearch