import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'


function Average() {
    const [testPassed, setTestPassed] = useState(false);

    const correctFormula = (b, c, d) => {
        if (typeof b === 'undefined' || typeof c === 'undefined' || typeof d === 'undefined') {
            return 'undefined';
        }

        return (b + c + d) / 3;
    };

    const testCases = [
        { params: [8, 6, 4] },
        { params: [3, 5, 9] },
        { params: [3, 10, 7] }
    ];
    const testCasesCount = testCases.length;


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>George se afla la sfarsitul clasei a IV-a si doreste sa isi calculeze media notelor de la limba romana.
                    <br />
                    El stie ca pana acum are <strong style={{ color: '#00bfff' }}> 3 </strong> note, si notele sunt reprezentate prin variabilele <strong style={{ color: '#00bfff' }}> b, c </strong> si <strong style={{ color: '#00bfff' }}> d</strong>.
                    <br />
                    Functia primeste ca parametri, notele lui George.
                    <br />
                    Ajuta-l pe George sa-si afle media notelor.
                    <br /><br />
                    Mentiuni: Notele lui George sunt numere intregi, cu valorile cuprinse intre 1-10.
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 8 6 4
                        <br />
                    </h4>
                    <h4> Date de iesire: 6
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
        <ProblemPage problemName="Note"
            problemPoints={2}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed} />

    )
}

export default Average