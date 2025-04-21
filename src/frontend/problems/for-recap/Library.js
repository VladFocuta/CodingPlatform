import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Library() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['10', '4 8 5 9 1 2 3 7 11 12', '2', '4', '+ 2 5 2', '- 1 3 2', '+ 1 7 3', '+ 1 7 3', '5', 'u', 'r', '+ 3 8 4', '- 4 10 1', 'r'], expected: '8 14 11 17 9 8 9 7 11 12 \n 8 14 15 20 12 11 12 10 10 11' },
        { params: ['5', '10 20 30 40 50', '2', '3', '+ 1 3 5', '- 2 5 10', '+ 4 5 2', '3', 'u', 'u', 'u'], expected: '15 15 25 32 42 \n 10 20 30 40 50' },
        { params: ['3', '100 200 300', '3', '2', '+ 1 3 150', '- 1 2 50', '1', '+ 1 3 50', '3', 'u', 'u', 'r'], expected: '200 300 450 \n 250 350 500 \n 200 300 450' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>George este managerul unei librării care dorește să mențină o evidență exactă a prețurilor cărților din inventar.<br />
                    Marius, administratorul librăriei, implementează planuri de marketing care implică modificări repetate ale prețurilor (operații de modificare de preț), iar deciziile sale se pot schimba ulterior.<br />
                    Pentru a maximiza profitul obținut în funcție de cerere, în fiecare zi, Marius efectuează o serie de operații (modificări, anulări și refaceri), iar la sfârșitul fiecărei zile, George trebuie să vadă starea finală a prețurilor din librărie.<br /><br />

                    Se introduce de la tastatura:<br />
                    Un număr natural n, numărul de cărți din librărie (numerotate de la 1 la n).<br />
                    n numere naturale, prețurile inițiale ale cărților.<br />
                    Un număr natural Q, numărul de zile.<br /><br />

                    Pentru fiecare din cele Q zile:<br />
                    O linie cu un număr natural t, numărul de operații din ziua respectivă.<br />
                    Următoarele t linii, fiecare descriind o operație.<br /><br />

                    Modificare preț: op index1 index2 numar<br />
                    op este fie + (adaugă număr la prețurile cărților de la index1 la index2 inclusiv),<br /> fie - (scade număr din prețurile cărților de la index1 la index2 inclusiv).<br />
                    Undo: u – anulează ultima operație de modificare neanulată (dacă există).<br />
                    Redo: r – reface ultima operație anulată care nu a fost refăcută (dacă există).<br /><br />

                    <strong style={{color: 'red'}}>Restricții și precizări:</strong><br />
                    1 ≤ n ≤ 100000<br />
                    1 ≤ Q ≤ 100<br />
                    0 ≤ prețurile inițiale ≤ 1000000000<br />
                    Pentru fiecare zi, 1 ≤ t &lt; 100000<br />
                    -10000 ≤ număr ≤ 10000<br />
                    1 ≤ index1 ≤ index2 ≤ n

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />10<br />
                        4 8 5 9 1 2 3 7 11 12<br />
                        2<br />
                        4<br />
                        + 2 5 2<br />
                        - 1 3 2<br />
                        + 1 7 3<br />
                        + 1 7 3<br />
                        5<br />
                        u<br />
                        r<br />
                        + 3 8 4<br />
                        - 4 10 1<br />
                        r<br />
                    </h4>
                    <h4> Date de iesire:<br /> 8 14 11 17 9 8 9 7 11 12<br />
                        8 14 15 20 12 11 12 10 10 11
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Gestionarea unei librarii" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Gestionarea unei librarii"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default Library