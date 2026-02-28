import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function BeachSand() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '4', '5 3 4 6 7 5 9 3 6 8 3 9 4 5 2 3 3 1 4 4'], expected: '7' },
        { params: ['3', '3', '1 2 3 4 5 6 7 8 9'], expected: '1' },
        { params: ['4', '3', '6 3 8 9 4 2 4 1 8 6 4 1'], expected: '9' },
       
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Pentru prevenirea eroziunii la Marea Neagră, autoritățile au hotărât înnisiparea unei plaje. Plaja a fost
                    împărțită în parcele de formă pătrată cu latura de 1 metru, dispuse ca elementele unui tablou bidimensional,
                    reținându-se nivelul fiecărei parcele, măsurat în metri, de la nivelul mării.<br />
                    Înnisiparea se realizează doar pe
                    acele parcele care au nivelul strict mai mic decât al celei mai joase dintre parcelele vecine cu ea, adăugând
                    nisip, astfel încât cele două să aibă același nivel. Două parcele sunt vecine dacă au o latură comună.<br />
                    Scrieți un program C++ care citește de la tastatură două numere naturale din intervalul [2,10<sup>2</sup>], m și
                    n, apoi elementele unui tablou bidimensional cu m linii şi n coloane, numere naturale din intervalul
                    [1,10], reprezentând nivelurile parcelelor, în ordinea dispunerii acestora pe plajă.<br />
                    Programul afișează pe ecran cantitatea totală de nisip adăugată,
                    măsurată în metri cubi.
                    <br /><br />
                    Exemplu: <br />


                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 4 <br />5 3 4 6 <br />7 5 9 3 <br />6 8 3 9<br />4 5 2 3<br />3 1 4 4
                    </h4>
                    <h4> Date de iesire: <br />7</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Innisiparea unei plaje" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Innisiparea unei plaje"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Eliminarea diagonalei principale"
            testPassed={testPassed}
        />
    )
}

export default BeachSand