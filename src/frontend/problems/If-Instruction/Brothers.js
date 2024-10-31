import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function Brothers() {
    const [testPassed, setTestPassed] = useState(false);

    const correctFormula = (a, b) => {

        if (typeof a === 'undefined' || typeof b === 'undefined') {
            return 'undefined';
        }
        if (b > a) {
            return "Marian este mai mare decat Maria.";
        }
        if (b === a) {
            return "Maria si Marian au aceeasi varsta.";
        }
        if (b < a) {
            return "Marian este mai mic decat Maria.";
        }

    };

    const testCases = [
        { params: [12, 18] },
        { params: [6, 6] },
        { params: [17, 8] }
    ];
    const testCasesCount = testCases.length;
    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Intr-o zi dupa ce a terminat orele, Maria se indrepta spre casa cu colega ei. Ea o intreaba la un moment dat pe Maria, daca fratele ei este mai mare decat ea?
                    <br />
                    Haideti sa o ajutam pe colega ei sa afle daca intre Maria si fratele ei, Marian, este vreo diferenta de varsta.
                    <br />
                    Functia pe care trebuie sa o creezi, primeste doi parametri <strong style={{ color: '#00bfff' }}>a</strong> si <strong style={{ color: '#00bfff' }}>b</strong>, unde <strong style={{ color: '#00bfff' }}>a</strong> reprezinta varsta Mariei si <strong style={{ color: '#00bfff' }}>b</strong> varsta fratelui ei, Marian.
                    <br />
                    Afisati urmatoarele mesaje in functie de diferenta de varsta dintre Marian si Maria:<br />

                    Daca Marian este mai mare, sa se afiseze <strong style={{ color: 'red' }}>Marian este mai mare decat Maria.</strong><br />
                    In cazul in care ei au aceeasi varsta, sa se afiseze <strong style={{ color: 'red' }}>
                        Maria si Marian au aceeasi varsta.</strong><br />
                    Si in cazul in care Marian este mai mic, sa se afiseze <strong style={{ color: 'red' }}>
                        Marian este mai mic decat Maria.</strong>
                    <br /><br />
                    Mentiuni: Numerele care reprezinta varsta celor doi, sunt strict pozitive si sunt cuprinse intre 1 - 1 000 000.
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:  10 7
                        <br />
                    </h4>
                    <h4> Date de iesire: Marian este mai mic decat Maria.
                        <br />
                    </h4>
                </div> <br />

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 12 16
                        <br />
                    </h4>
                    <h4> Date de iesire: Marian este mai mare decat Maria.
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
            problemName="Fratii"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Vacancy"
            lecture={false}
            testPassed={testPassed}
        />
    )
}

export default Brothers