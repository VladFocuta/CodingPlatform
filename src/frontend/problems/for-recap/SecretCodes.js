import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function SecretCodes() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['1542', '2541'], expected: 'DA' },
        { params: ['2541', '1541'], expected: 'NU' },
        { params: ['1000', '0001'], expected: 'DA' },
        { params: ['2', '1'], expected: 'NU' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Într-o lume plină de tehnologie, trăiau doi roboței: Alfa și Beta. Fiecare dintre ei avea un cod numeric secret, format din mai multe cifre.<br />
                    Pentru a intra într-o cameră specială de încărcare, codurile lor trebuiau să fie formate exact din aceleași cifre, indiferent de ordine.<br />
                    De exemplu:<br />
                    Dacă Alfa are codul 123 și Beta are 321, se consideră egale – pentru că au aceleași cifre.<br />

                    Dar dacă Alfa are 123 și Beta are 124, atunci nu sunt compatibile, chiar dacă seamănă.<br />

                    Pentru a verifica rapid compatibilitatea codurilor, roboțeii folosesc un sistem de frecvență, în care numără de câte ori apare fiecare cifră în codurile lor.<br />
                    Dacă fiecare cifră apare de același număr de ori în ambele coduri, înseamnă că pot intra în camera specială.<br />

                    Scrie un program care îi ajută pe roboțeii Alfa și Beta să afle dacă pot folosi codurile lor pentru a intra în camera de încărcare.<br />
                    Dacă codurile sunt formate exact din aceleași cifre (cu aceeași frecvență), afișează mesajul DA, altfel NU.<br />

                    Pe o singură linie, se citesc două numere naturale A și B, separate prin spațiu (0 ≤ A, B ≤ 10⁹).<br />
                    Se va afișa DA dacă cele două numere sunt formate din aceleași cifre, altfel NU.
                    <br /><br />
                  
                   
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 1542 2541
                       
                    </h4>
                    <h4> Date de iesire:<br /> DA

                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Codurile secrete" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Codurile secrete"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Interval divizori pari"
            testPassed={testPassed}
        />
    )
}

export default SecretCodes