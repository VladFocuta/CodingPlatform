import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function Symmetric() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '5', '1 2 4 2 1 3 5 5 5 3 2 4 1 4 2 1 1 1 1 1'], expected: 'DA' },
        { params: ['4', '5', '1 2 4 2 5 3 5 5 5 3 2 4 1 4 2 1 1 1 1 1'], expected: 'NU' },
        { params: ['3', '3', '1 2 4 3 5 5 2 4 1'], expected: 'NU' },
        { params: ['3', '3', '4 2 4 5 5 5 1 4 1'], expected: 'DA' },
        { params: ['5', '5', '4 2 4 3 3 5 5 5 8 2 1 4 1 2 3 9 2 3 7 4 8 0 7 6 2'], expected: 'DA' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Un tablou bidimensional cu număr impar de coloane este numit simetric faţă de coloana din mijloc dacă, pe fiecare linie a tabloului, elementele dispuse simetric faţă de elementul din mijloc al liniei respective au valori egale.<br />
                    Scrieţi un program care citește de la tastatură două numere naturale, m și n (n impar), (3 ≤ n, m ≤ 21), și elementele (mai mici decât 10.000) unui tablou bidimensional cu m linii și n coloane, numere naturale. <br />
                    Programul afișează pe ecran mesajul <strong style={{ color: 'red' }}>DA</strong> , dacă tabloul este simetric față de coloana din mijloc, sau mesajul <strong style={{ color: 'red' }}>NU</strong> în caz contrar.


                    <br /><br />
                    Exemplu: <br />


                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 5 <br />4 2 4 3 3 <br />5 5 5 8 2 <br />1 4 1 2 3<br />9 2 3 7 4<br />8 0 7 6 2
                    </h4>
                    <h4> Date de iesire: <br />DA</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Simetrica" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Simetrica"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Innisiparea unei plaje"
            testPassed={testPassed}
        />
    )
}

export default Symmetric