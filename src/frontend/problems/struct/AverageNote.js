import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function AverageNote() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', 'Aura 17 7.3', 'Mihai 18 6.5', 'Bogdan 15 9.4'], expected: 'Nume: Aura, Varsta: 17 Media: 7.3 \n Nume: Mihai, Varsta: 18 Media: 6.5 \n Nume: Bogdan, Varsta: 15 Media: 9.4 \n Studentul cu cea mai mare medie: \n Nume: Bogdan, Varsta: 15 Media: 9.4' },
    ]

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Creează un program care să gestioneze o listă de studenți. Pentru fiecare student se vor reține următoarele informații:<br />
                    Nume <br /> Vârstă<br /> Nota medie<br />
                    1. Creează o structură Student cu un constructor care să inițializeze toate câmpurile.<br />
                    2. Permite utilizatorului să introducă o listă de studenți.<br />
                    3. Afișează lista completă de studenți.<br />
                    4. Găsește și afișează studentul cu cea mai mare notă medie.<br />
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />3<br />Aura 17 7.3  <br /> Mihai 18 6.5<br /> Bogdan 15 9.4<br />
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> Nume: Aura, Varsta: 17 Media: 7.3
                    <br />Nume: Mihai, Varsta: 18 Media: 6.5
                    <br />Nume: Bogdan, Varsta: 15 Media: 9.4
                    <br />Studentul cu cea mai mare medie:
                    <br />Nume: Bogdan, Varsta: 15 Media: 9.4

                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cea mai mare medie" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cea mai mare medie"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Generare numere"
            testPassed={testPassed}
        />
    )
}

export default AverageNote