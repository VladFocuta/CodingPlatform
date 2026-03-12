import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'
function AlikePair() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['9', '7', '112 20 42 112 5013 824 10012 55 155 \n 402 1024 321 521 57 6542 255'], expected: '13' },
        { params: ['3', '2', '123 21 33 \n 32 12'], expected: '2' },
        { params: ['4', '3', '123 21 33 26 \n 14 20 99'], expected: '0' },
        { params: ['5', '5', '123 456 222 76 89 \n 123 456 222 76 89'], expected: '5' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Numim pereche asemenea (x,y) două numere naturale cu cel puțin două cifre, x și y, cu proprietatea
                    că ultimele două cifre ale lui x sunt egale cu ultimele două cifre ale lui y, dispuse eventual în altă ordine.<br />
                    Pe prima linie se citesc de la tastatură  două numere na și nb, pe a doua linie un șir A de na numere, iar pe a treia linie un șir B de nb numere din intervalul [10,10<sup>5</sup>].<br />
                    Se cere să se afișeze pe ecran numărul de perechi asemenea (x,y), cu proprietatea că x este un
                    termen al șirului A, iar y este un termen al șirului B. Proiectați un algoritm eficient din punctul de vedere
                    al timpului de executare.

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />9 7 <br />112 20 42 112 5013 824 10012 55 155 <br />402 1024 321 521 57 6542 255 



                    </h4>
                    <h4> Date de iesire: <br />13</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Pereche asemenea" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Pereche asemenea"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default AlikePair