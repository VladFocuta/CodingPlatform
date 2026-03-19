import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function ToysFairtrade() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '85 36 26 12 25'], expected: '85 26 25' },
        { params: ['4', '1 2 3 4'], expected: '1 4' },
        { params: ['7', '1 2 3 4 5 6 7'], expected: '1 3 4 5 7' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Terenul alocat unui târg de jucării artizanale a fost împărțit în zone dispuse ca elementele unui tablou unidimensional.
                    Pentru a putea fi testate de copii, fiecare jucărie are alocată o zonă și este identificată printr-un număr natural.<br />
                    Organizatorii au hotărât eliminarea celei de a doua și a penultimei jucării și rearanjarea celor păstrate, astfel încât prima să rămână pe aceeași poziție, să nu existe zone intermediare libere, iar jucăriile păstrate să rămână în ordinea stabilită inițial, ca în exemplu.<br />
                    Scrieţi un program C++ care citeşte de la tastatură numere naturale din intervalul [4, 100], și anume n și cele n elemente ale unui tablou unidimensional, reprezentând numerele de identificare ale jucăriilor, în ordinea plasării lor inițiale pe teren. <br />
                    Programul modifică apoi tabloul în memorie corespunzător hotărârii organizatorilor și afişează pe ecran tabloul obținut, cu elementele separate prin câte un spațiu.
                    <br /><br />

                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 <br />85 36 26 12 25

                    </h4>
                    <h4> Date de iesire: <br />85 26 25
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Targ de jucarii" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Targ de jucarii"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Interclasare X"
            testPassed={testPassed}
        />
    )
}

export default ToysFairtrade