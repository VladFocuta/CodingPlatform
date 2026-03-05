import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function Rest() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['10', '101', '3000'], expected: '2022' },
        { params: ['2', '7', '200'], expected: '0' },
        { params: ['9', '202', '2000'], expected: '1820' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Subprogramul rest are patru parametri:<br />
                    x, y și n, prin care primește câte un număr natural din intervalul [1,10<sup>6</sup>], x&lt;y&lt;n;<br />
                    k, prin care furnizează cea mai mare valoare naturală din intervalul [1,n] pentru care atât restul
                    împărțirii la x, cât și restul împărțirii la y, sunt egale cu 2, sau 0 dacă nu există o astfel de valoare.<br />
                    Scrieți definiția completă a subprogramului.<br />
                    x, y și n se vor citi de la tastatură și după apelarea subprogramului, se va afișa k sau 0, daca nu găsim nicio valoare.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />10 101 3000


                    </h4>
                    <h4> Date de iesire: <br />2022</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Rest" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Rest"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Cub perfect"
            testPassed={testPassed}
        />
    )
}

export default Rest