import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function Castels() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7', '3 1 2 1 2 3 3'], expected: 'Numar minim de operatii: 5' },
        { params: ['4', '1 1 10 10'], expected: 'Numar minim de operatii: 18' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Aflat pe plaja urbană din cartierul Cricozescu al orașului Jluc, Andrei participă la un concurs de construcții de castele de nisip.<br />
                    Fiecare concurent a construit deja un anumit număr de castele n, însă organizatorii concursului au schimbat regulile în ultimul moment, astfel că, pentru a fi eligibili în etapa de jurizare, toate castelele concurenților trebuie să aibă exact aceeași înălțime h, unde h este înălțimea unui castel deja construit de Andrei.<br />
                    Pentru a uniformiza înălțimile, concurenții trebuie să efectueze un număr de operații asupra unui castel, iar în cadrul unei operații există două posibilități: <br />
                    Fie se adaugă o lopată de nisip castelului curent – în acest caz, înâlțimea castelului crește cu 1cm;<br />
                    Fie se înlătură o lopată de nisip din vârful castelului – în acest caz, înălțimea castelului scade cu 1cm.<br /><br />

                    Având în vedere precizările făcute de organizatori la finalul concursului, Andrei ne cere să îl ajutăm să determine numărul minim de operații pe care el trebuie să le facă asupra castelelor sale astfel încât toate să aibă, în final, aceeași înălțime h, h fiind înălțimea inițială a unuia dintre castelele construite.<br /><br />

                    Pe prima linie un număr natural n, reprezentând numărul de castele pe care Andrei le are, iar pe a doua linie se află n numere naturale, reprezentând înălțimile inițiale ale castelelor lui Andrei.<br /><br />

                    Să se afiseze numărul minim de operații pe care Andrei trebuie să le efectueze astfel încât castelele sale să aibă aceeași înălțime.<br /><br />

                    Mentiuni:<br />
                    1 ≤ n ≤ 100000;<br />
                    1 ≤ h ≤ 1000, unde h reprezintă înălțimea unui castel;<br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />7 <br />3 1 2 1 2 3 3

                    </h4>
                    <h4> Date de iesire:<br /> Numar minim de operatii: 5 </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Castele" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Castele"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default Castels