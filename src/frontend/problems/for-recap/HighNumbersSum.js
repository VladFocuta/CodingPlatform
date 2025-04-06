import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function HighNumbersSum() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '4', '9 9 9 9 9', '1 1 1 1'], expected: '1 0 1 1 1 0' },
        { params: ['3', '3', '2 5 7', '9 8 6'], expected: '1 2 4 3' },
        { params: ['6', '3', '8 7 6 5 4 3', '9 9 9'], expected: '8 7 7 5 4 2' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Ai fost angajat ca programator într-o bancă ce trebuie să proceseze tranzacții financiare extrem de mari. Deoarece numerele depășesc limita tipurilor de date standard (int, long long), trebuie să implementezi un algoritm care poate aduna două numere extrem de mari, reprezentate sub formă de vectori.<br /><br />
                    Se dau două numere naturale foarte mari, fiecare având până la 50 de cifre. Acestea sunt stocate sub forma a doi vectori, unde fiecare element reprezintă o cifră a numărului respectiv.<br />
                    Scrie un program care citește cele două numere, le adună cifră cu cifră și afișează rezultatul ca un nou vector.<br /><br />

                    Pe prima linie se află două numere întregi:<br />
                    &nbsp;&nbsp;n, numărul de cifre al primului număr<br />
                    &nbsp;&nbsp;m, numărul de cifre al celui de-al doilea număr<br />
                    Pe a doua linie se află cele n cifre ale primului număr.<br />
                    Pe a treia linie se află cele m cifre ale celui de-al doilea număr.<br />

                    Programul trebuie să afișeze un vector conținând suma celor două numere, scrisă de asemenea cifră cu cifră.
                    <br /><br />
                    Mentiuni:<br />
                    1 ≤ n, m ≤ 50<br />
                    Toate cifrele sunt în intervalul [0, 9].<br />
                    Nu se folosesc tipuri de date mari (long long, string etc.). Operațiile trebuie făcute folosind vectori.<br />
                    Implementarea trebuie să ia în considerare transportul (carry) atunci când suma unei poziții depășește 9.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br /> 5 4 <br /> 9 9 9 9 9 <br /> 1 1 1 1
                        <br />
                    </h4>
                    <h4> Date de iesire:  <br />1 0 1 1 1 0
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Suma a doua numere mari" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Suma a doua numere mari"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Produsul a doua numere mari"
            testPassed={testPassed}
        />
    )
}

export default HighNumbersSum