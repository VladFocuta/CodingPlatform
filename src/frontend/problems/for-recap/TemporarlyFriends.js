import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function TemporarlyFriends() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '3', '10', '1 3 5 7', '5 1 4 2'], expected: '3 2 3 2' },
        { params: ['3', '4', '25', '1 5 9', '2 3 10'], expected: '3 2 3' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>La o petrecere participă n persoane, fiecare având un anumit nivel de energie reprezentat printr-un număr întreg pozitiv. Două persoane pot deveni prieteni temporari dacă diferența pătratică dintre nivelurile lor de energie este mai mică sau egală cu x sau mai mare sau egală cu y.<br /><br />
                Ținând cont de această regulă de compatibilitate, scrie un program care determină, pentru fiecare persoană, câte alte persoane dintr-un al doilea grup (de asemenea cu n membri și energii proprii) ar putea deveni prieteni temporari cu ea.<br /><br />
                De la tastatură se citesc:<br />
                Pe prima linie: trei numere întregi n, x și y (1 ≤ n ≤ 100, 0 ≤ x &lt; y ≤ 10⁹)<br />
                Pe a doua linie: n numere întregi v[0], v[1], ..., v[n−1] — nivelurile de energie ale persoanelor din primul grup<br />
                Pe a treia linie: n numere întregi v2[0], v2[1], ..., v2[n−1] — nivelurile de energie ale persoanelor din al doilea grup<br /><br />

                Se vor afișa n numere întregi pe o singură linie, separate prin spații. Fiecare număr reprezintă câte persoane din al doilea grup pot deveni prieteni temporari cu persoana corespunzătoare din primul grup.

                    <br /><br />
                  
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 3 4 25 <br />1 5 9 <br /> 2 3 10
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />3 2 3
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Analiza cercului prietenilor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Analiza cercului prietenilor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Sirul lui Fibonacci"
            testPassed={testPassed}
        />
    )
}

export default TemporarlyFriends