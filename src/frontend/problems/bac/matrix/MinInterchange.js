import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'


function MinInterchange() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '3', '7 5 19 3 8 4 23 6 1 10 2 9'], expected: '7 5 19 1 8 4 23 6 3 10 2 9' },
        { params: ['2', '2', '1 2 3 0'], expected: '0 2 \n 3 1' },
        { params: ['5', '3', '10000 100 10 9999 99 9 5 129 37 111 145 399 6 7 8'], expected: '10000 100 10 \n 9999 99 9 \n 8 129 37 \n 111 145 399 \n 6 7 5' },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Scrieți un program care citește de la tastatură două numere naturale din intervalul [2,50], n și m, și elementele unui tablou bidimensional cu n linii și m coloane, numere naturale distincte din intervalul [0,10<sup>4</sup>].<br />
                    Programul interschimbă valoarea minimă din ultima coloană a tabloului cu valoarea minimă din prima coloană a tabloului, apoi afișează pe ecran tabloul modificat, câte o linie a tabloului pe câte o linie a ecranului, elementele fiecărei linii fiind separate prin câte un spațiu.<br />
                    Programul citește de la tastatură numerele n m, iar apoi cele n • m elemente ale tabloului.<br />
                    Programul va afișa pe ecran elementele tabloului modificat, conform cerinței.<br /><br />
                    Mențiuni:<br />
                    2 ≤ n,m ≤ 50<br />
                    elementele tabloului aparțin intervalului [0,10<sup>4</sup>]
                    <br /><br />

                    Exemplu: <br />

                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 3<br /> 10000 100 10 <br /> 9999 99 9 <br /> 5 129 37 <br /> 111 145 399 <br /> 6 7 8
                    </h4>
                    <h4> Date de iesire: <br />10000 100 10<br />9999 99 9<br />8 129 37 <br /> 111 145 399 <br /> 6 7 5 </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Interschimbare minima" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Interschimbare minima"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Suma coloanelor k"
            testPassed={testPassed}
        />
    )
}

export default MinInterchange