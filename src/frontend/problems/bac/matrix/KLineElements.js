import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function KLineElements() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '4', '2 4 3 5 6 8 0 9 8 7 2 6 9 0 5 6 1 3 6 9 7 3 9 4 2'], expected: '2 4 3 6 6 \n 8 0 9 1 7 \n 2 6 9 3 5 \n 5 8 0 6 9 \n 7 3 9 4 2' },
        { params: ['5', '2', '2 4 3 5 6 8 0 9 8 7 2 6 9 0 5 6 1 3 6 9 7 3 9 4 2'], expected: '2 8 3 5 6 \n 4 0 9 8 7 \n 2 6 9 0 5 \n 6 1 3 6 9 \n 7 3 9 4 2' },
        { params: ['2', '2', '1 2 3 4'], expected: '1 3 \n 2 4' },
        { params: ['3', '3', '2 4 3 8 0 9 2 6 9'], expected: '2 4 2 \n 8 0 6 \n 3 9 9' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Scrieți un program C++ care citește de la tastatură numere naturale: n (n[2,20]), k (k[2,n]) și n∙n
                    numere din intervalul [0,10<sup>9</sup>], elemente ale unui tablou bidimensional cu n linii și n coloane.<br />
                    Programul transformă tabloul în memorie, interschimbând șirul elementelor situate pe linia a k-a, în stânga diagonalei
                    principale, parcurse de la stânga la dreapta, cu șirul elementelor situate pe coloana a k-a, deasupra
                    diagonalei principale, parcurse de sus în jos, ca în exemplu.<br />
                    Elementele tabloului obținut sunt afișate pe
                    ecran, fiecare linie pe câte o linie a ecranului, cu elementele fiecărei linii separate prin câte un spațiu.

                    <br /><br />
                    Exemplu: <br />


                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 4 <br />2 4 3 5 6<br />8 0 9 8 7<br />2 6 9 0 5<br />6 1 3 6 9<br />7 3 9 4 2
                    </h4>
                    <h4> Date de iesire: <br />2 4 3 6 6<br />8 0 9 1 7<br />2 6 9 3 5<br />5 8 0 6 9 <br /> 7 3 9 4 2</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Elemente situate pe linia k" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Elemente situate pe linia k"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default KLineElements