import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function SortAndDelete() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [6, 4, 2, 5, 2, 8, 4], expected: [2, 4, 5, 8] },
        { params: [3, 0, 0, 0], expected: [0] },
        { params: [1, 2], expected: [2] },
        { params: [7, 33, 1, 33, 0, 33, 9, 102], expected: [0, 1, 9, 33, 102] }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Într-o vale uitată de timp, trăiau cei mai înțelepți magi ai Regatului Numerelor. Aceștia aveau o Arhivă Sacră, unde trebuiau să stocheze toate numerele magice găsite de ucenici, dar cu o singură regulă:<br />

                    „Niciun număr nu are voie să apară de două ori și toate trebuie așezate în ordine perfectă!”<br />

                    Într-o zi, tu, un tânăr ucenic, primești sarcina de a curăța un set de numere găsite în pădurea digitală.<br />
                    Aceste numere sunt amestecate și pot conține duplicate.<br />
                    Marele Înțelept îți spune:<br />
                    „Ai grijă, ucenice! Poți colecta cel mult 50 de numere. Odată ce le-ai adunat, sortează-le cu migală, exact ca în vechile scripturi.<br />
                     Apoi elimină toate dublurile, căci ordinea și unicitatea aduc echilibrul!”
                    <br /> <br />
                    Pe prima linie se citeste un numar întreg N (1 ≤ N ≤ 50), numărul total de valori găsite.<br />
                    Pe a doua linie se citesc N valori, separate prin spatiu.<br />
                    Afișează pe ecran șirul final, gata să fie depus în Arhiva Magilor.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 6 <br /> 4 2 5 2 8 4
                        <br />
                    </h4>
                    <h4> Date de iesire: 2 4 5 8
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Sortare si eliminare duplicate" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Sortare si eliminare duplicate"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Nota maxima si minima"
            testPassed={testPassed}
        />
    )
}

export default SortAndDelete