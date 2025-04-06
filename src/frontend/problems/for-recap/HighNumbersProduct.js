import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function HighNumbersProduct() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '2', '1 2 3', '4 5'], expected: '5 5 3 5' },
        { params: ['2', '2', '9 9', '9 9'], expected: '9 8 0 1' },
        { params: ['1', '1', '8', '5'], expected: '4 0' },
        { params: ['7', '9', '1 2 3 4 5 6 7', '9 8 3 2 4 8 9 1 7'], expected: '1 2 1 3 8 8 6 6 6 5 7 1 3 9 3 9' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dau două numere naturale mari, fiecare reprezentat sub forma unui vector de cifre. Primul număr are n cifre, iar al doilea are m cifre. Cifrele fiecărui număr sunt date în ordine, de la cea mai semnificativă la cea mai puțin semnificativă.<br />
                    Scrie un program care înmulțește cele două numere și afișează rezultatul sub formă de vector de cifre, separate prin spațiu, în ordine de la cea mai semnificativă la cea mai puțin semnificativă.<br /><br />
                    Programul tău trebuie să trateze corect cazurile în care:<br />

                    &nbsp;&nbsp;Numerele au până la 100 de cifre fiecare<br />

                    &nbsp;&nbsp;Rezultatul poate avea cifre în plus din cauza retenției (carry)<br />

                    &nbsp;&nbsp;Există cifre inițiale de 0 în rezultat (dar nu și în input!)<br /><br />

                    Pe prima linie se află două numere naturale n și m (1 ≤ n, m ≤ 100), reprezentând lungimea celor două numere.<br />
                    Pe următoarele două linii se află cele două numere, sub forma a n, respectiv m cifre întregi (0–9), separate prin spațiu.<br /><br />

                    Se va afisa o singură linie ce conține cifrele rezultatului înmulțirii celor două numere, separate prin spațiu, în ordine de la cea mai semnificativă cifră la cea mai puțin semnificativă.
                    <br /><br />
                    Mentiuni:<br />
                    Nu ai voie să convertești numerele în int sau long long deoarece ele pot depăși limita acestor tipuri.<br />
                    Se recomandă rezolvarea doar cu vectori și aritmetică pe cifre.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 3 2 <br />1 2 3 <br /> 4 5
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />5 5 3 5
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Produsul a doua numere mari" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Produsul a doua numere mari"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Analiza cercului prietenilor"
            testPassed={testPassed}
        />
    )
}

export default HighNumbersProduct