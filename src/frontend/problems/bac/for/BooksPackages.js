import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function BooksPackages() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '16 17 20 24 30', '4', '78 20 17 74'], expected: '2' },
        { params: ['4', '1 90 123456 1000000', '3', '1 5 1000000'], expected: '2' },
        { params: ['3', '123 104263 9999999999', '3', '123 104263 9999999999'], expected: '3' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Într-o școală sunt n clase, fiecare având un număr diferit de elevi. Școală primește m pachete cu cărți, fiecare cu un număr diferit de cărți. Pentru ca o clasa să primească un pachet, numărul elevilor din acea clasa trebuie să fie egal cu numărul cărților din pachet. Să se determine câte clase primesc un pachet de cărți.<br />
                    Pe prima linie se citește numărul n, iar pe următoarea linie n numere naturale ordonate crescător, separate prin spații, reprezentând numărul de elevi din fiecare clasa. Pe următoarea linie numărul m, și pe următoarea linie m numere, reprezentând numărul de cărți din fiecare pachet.<br />
                    Să se afișeze numărul de clase care primesc pachete cu cărți.
                    <br /><br />
                    Mențiuni:<br />
                    1 ≤ n, m ≤ 10.000<br />
                    într-un pachet sunt maximum 1.000.000.000.000 cărți.<br />
                    într-o clasă sunt maximum 1.000.000.000.000 elevi.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 <br />16 17 20 24 30 <br /> 4 <br />78 20 17 74

                    </h4>
                    <h4> Date de iesire: <br />2
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Pachete de carti" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Pachete de carti"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Q interogari"
            testPassed={testPassed}
        />
    )
}

export default BooksPackages