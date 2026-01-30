import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function EqualsAreaParcel() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6 8'], expected: '2 parcele de arie 24 \n 4 parcele de arie 12 \n 6 parcele de arie 8' },
        { params: ['2 2'], expected: 'nu exista' },
        { params: ['3 5'], expected: 'nu exista' },
        { params: ['2 3'], expected: '2 parcele de arie 3' },
        { params: ['10 20'], expected: '2 parcele de arie 100 \n 4 parcele de arie 50 \n 8 parcele de arie 25 \n 10 parcele de arie 20' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Un fermier are un teren de formă dreptunghiulară, pe care vrea să îl împartă în parcele de arie egală, astfel
                    încât numărul de parcele și aria să fie valori naturale, iar numărul de parcele să fie par și strict mai mic decât
                    aria unei parcele.<br />Subprogramul teren are doi parametri, x și y, prin care primește două numere naturale
                    din intervalul [2,100], reprezentând lungimea și lățimea terenului, măsurate în metri.<br />
                    Subprogramul afișează toate soluțiile posibile de împărțire a terenului, fiecare soluție pe câte o linie a ecranului, sub forma
                    a două numere, separate prin mesajul parcele de arie și spații adecvate, unde primul număr reprezintă
                    numărul de parcele obținute, iar al doilea aria unei parcele corespunzătoare, ca în exemplu.<br />
                    Dacă nu există nicio astfel de soluție, subprogramul afișează pe ecran mesajul <strong style={{ color: 'red' }}>nu exista</strong>. <br />Scrieți definiția completă a
                    subprogramului C++.<br />
                    X și y se vor citi de la tastatură și după apelarea subprogramului teren, se va face afișarea.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />6 8 <br />


                    </h4>
                    <h4> Date de iesire: <br />2 parcele de arie 24<br />4 parcele de arie 12 <br />6 parcele de arie 8</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Parcele de arie egala" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Parcele de arie egala"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default EqualsAreaParcel