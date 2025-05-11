import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function MaxRow() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '4', '1 2 3 4 5 6 7 8 9 10 11 12'], expected: '12 3' },
        { params: ['4', '4', '31 2 3 4 5 6 7 12 9 10 24 12 1000 10 -24 55'], expected: '1000 4' },
        { params: ['1', '1', '-1'], expected: '-1 1' },
        { params: ['3', '4', '1000 2 3 4 5 6 7 8 9 10 11 1000'], expected: '1000 3' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice n x m, gaseste si afiseaza elementul maxim, cautand pe fiecare rand al matricei.
                    <br />
                    Pe prima linie se citesc numerele n si m.<br />
                    Pe a doua linie citim elementele matricei. <br />
                    Programul va afisa cel mai mare element din matrice si randul pe care a fost gasit.<br />
                    Elementele au valori cuprinse intre (-1000 si 1000).<br />
                    Daca cel mai mare element se regaseste de mai multe ori, il afisam pe cel cu indicele mai mare.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 3 4 <br /> 1 2 3 4 <br /> 5 6 7 8 <br /> 9 10 11 12<br />
                        
                    </h4>
                    <h4> Date de iesire: <br /> 12 3</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cel mai mare de pe rand" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cel mai mare de pe rand"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Turnirul Cifrarilor"
            testPassed={testPassed}
        />
    )
}

export default MaxRow