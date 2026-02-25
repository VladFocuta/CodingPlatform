import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function AscendingLadder() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['12', '500 600 601 405 569 570 700 701 625 626 627 520'], expected: '625 626 627' },
        { params: ['5', '100 200 300 400 500'], expected: 'nu exista' },
        { params: ['6', '10 11 20 21 30 31'], expected: '10 11' },
        { params: ['7', '50 40 30 100 101 102 103'], expected: '100 101 102 103' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>De-a lungul unui traseu montan este utilizată o succesiune de marcaje turistice, care trebuie urmate în
                    acea ordine. Pentru fiecare marcaj se cunoaște cota (înălțimea, măsurată în metri) la care este plasat.<br />
                    Numim scară într-un traseu o secvență de marcaje aflate pe poziții consecutive în cadrul traseului, care
                    au drept cote numere consecutive, ordonate strict crescător.<br />O scară este formată din cel puțin două
                    marcaje, iar lungimea acesteia este egală cu numărul de marcaje care o compun.<br />
                    Se va citi de la tastatură un șir de cel mult n elemente (n &lt;= 10<sup>6</sup>), numere naturale din intervalul [10,10<sup>4</sup>],
                    separate prin câte un spațiu, reprezentând cotele marcajelor turistice din cadrul unui traseu, în ordinea în care se succed în acesta.<br />
                    Se cere să se afișeze pe ecran, separate prin câte un spațiu, în ordine strict
                    crescătoare, cotele corespunzătoare marcajelor unei scări de lungime maximă pe acest traseu. Dacă în
                    cadrul traseului există mai multe astfel de scări, se afișează doar cotele corespunzătoare marcajelor
                    uneia dintre ele, iar dacă nu există nicio scară, pe ecran se afișează mesajul <strong style={{ color: 'red' }}>nu exista</strong>.<br />
                    Proiectați un algoritm eficient din punctul de vedere al timpului de executare și al spațiului de memorie utilizat.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />12<br /> 500 600 601 405 569 570 700 701 625 626 627 520


                    </h4>
                    <h4> Date de iesire: <br />625 626 627</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Scara crescatoare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Scara crescatoare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Secventa paritara"
            testPassed={testPassed}
        />
    )
}

export default AscendingLadder