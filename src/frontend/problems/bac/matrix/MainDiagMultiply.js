import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function MainDiagMultiply() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '4'], expected: '3 4 5 6 \n 5 6 7 8 \n 7 8 9 10 \n 9 10 11 12' },
        { params: ['2', '2'], expected: '2 3 \n 3 4' },
        { params: ['5', '4'], expected: '5 6 7 8 \n 9 10 11 12 \n 13 14 15 16 \n 17 18 19 20'  },

    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Scrieți un program C++ care citește de la tastatură două numere naturale din intervalul [2,10<sup>2</sup>], k și
                    n, și construiește în memorie un tablou bidimensional cu n linii și n coloane, astfel încât parcurgând
                    diagonala principală, de sus în jos, să se obțină un șir strict crescător format din primii n multipli naturali
                    nenuli ai lui k și parcurgând fiecare linie a sa, de la stânga la dreapta, să se obțină câte un șir strict
                    crescător de numere naturale consecutive.<br />
                    Programul afișează pe ecran tabloul obținut, fiecare linie a
                    tabloului pe câte o linie a ecranului, elementele de pe aceeași linie fiind separate prin câte un spațiu.
                    <br /><br />
                    Exemplu: <br />


                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />3 4 
                    </h4>
                    <h4> Date de iesire: <br />3 4 5 6<br />5 6 7 8<br />7 8 9 10<br />9 10 11 12</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Multiplii pe diagonala principala" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Multiplii pe diagonala principala"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Elemente situate pe linia k"
            testPassed={testPassed}
        />
    )
}

export default MainDiagMultiply