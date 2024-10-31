import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function Vacancy() {
    const [testPassed, setTestPassed] = useState(false);

    const correctFormula = (a, b) => {

        if (typeof a === 'undefined' || typeof b === 'undefined') {
            return 'undefined';
        }
        if (a > b) {
            return "DA";
        }
        if (b === a) {
            return "DA";
        }
        if (a < b) {
            return "NU";
        }

    };

    const testCases = [
        { params: [200, 199] },
        { params: [6, 6] },
        { params: [1, 3] }
    ];
    const testCasesCount = testCases.length;
    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Dupa un an de munca, Viorel doreste sa planifice o vacanta alaturi de familia lui, in Maldive. Pana acum el a reusit sa stranga <strong style={{ color: '#00bfff' }}>a</strong> suma de bani, dar inca nu este sigur daca ii ajung.
                    <br />
                    Vacanta mult dorita de el, costa <strong style={{ color: '#00bfff' }}>b </strong> €.
                    <br />
                    Functia pe care trebuie sa o creezi, primeste doi parametri <strong style={{ color: '#00bfff' }}>a</strong> si <strong style={{ color: '#00bfff' }}>b</strong>, unde <strong style={{ color: '#00bfff' }}>a</strong> reprezinta suma de bani stransa de el, si  <strong style={{ color: '#00bfff' }}>b</strong> reprezinta costurile vacantei.
                    <br />
                    Sa se afiseze urmatoarele mesaje in cazul in care isi permite acea vacanta sau nu:<br />

                    Daca isi permite, sa se afiseze <strong style={{ color: 'red' }}>DA</strong><br />
                    Daca nu isi permite, sa se afiseze <strong style={{ color: 'red' }}>
                        NU</strong><br />

                    <br />
                    Mentiuni: 1 ≤ a, b ≤ 100 000
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:  1000 850
                        <br />
                    </h4>
                    <h4> Date de iesire: DA
                        <br />
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test correctFormula={correctFormula}
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    testCassesCount={testCasesCount} />
            </div>
        </>
    )

    return (
        <ProblemPage
            problemName="Vacanta"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Maxim"
            lecture={false}
            testPassed={testPassed}
        />
    )
}

export default Vacancy