import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function ListSort() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', 'Marian 42', 'Ioana 18', 'Cristina 28'], expected: 'Nume: Cristina, Varsta: 28 \n Nume: Ioana, Varsta: 18 \n Nume: Marian, Varsta: 42'}
    ]

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Se citește un număr n care reprezintă numărul de persoane. Pentru fiecare persoană, se vor introduce numele și vârsta.<br />
                    Programul trebuie să sorteze lista persoanelor în ordine alfabetică după nume.
                   

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />3<br />Marian 42  <br /> Ioana 18 <br /> Cristina 28
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> Nume: Cristina, Varsta: 28 <br /> Nume: Ioana, Varsta: 18 <br /> Nume: Marian, Varsta: 42
                   
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Sortarea unei liste de persoane" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Sortarea unei liste de persoane"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Gestionarea unui vector de structuri"
            testPassed={testPassed}
        />
    )
}

export default ListSort