import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'
function MinColumn() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '4', '17 12 5 19 10 16 2 4 11 21 8 9'], expected: '17 12 9 19 \n 10 16 9 4 \n 11 21 9 9' },
        { params: ['2', '3', '9 8 1 7 6 5'], expected: '9 8 5 \n 7 6 5' },
        { params: ['4', '3', '10 20 30 5 40 50 60 70 80 90 100 110'], expected: '110 20 30 \n 110 40 50 \n 110 70 80 \n 110 100 110' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrieți un program C++ care citește de la tastatură două numere naturale din intervalul [2,10<sup>2</sup>], m și n, și
                    elementele unui tablou bidimensional cu m linii și n coloane, numere naturale distincte din intervalul [0,10<sup>9</sup>].<br />
                    Programul modifică tabloul în memorie, înlocuind valorile tuturor elementelor aflate pe coloana care conține numărul
                    minim memorat în tablou cu valoarea elementului aflat pe ultima linie și ultima coloană.<br />
                    Tabloul obținut este afișat pe ecran, câte o linie a tabloului pe câte o linie a ecranului, elementele fiecărei linii fiind separate prin câte un spațiu.


                    <br /><br />
                    Exemplu: <br />


                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />3 4 <br />17 12 5 19 <br />10 16 2 4 <br />11 21 8 9
                    </h4>
                    <h4> Date de iesire: <br />17 12 9 19 <br />10 16 9 4<br />11 21 9 9</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Coloana minimului" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Coloana minimului"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default MinColumn