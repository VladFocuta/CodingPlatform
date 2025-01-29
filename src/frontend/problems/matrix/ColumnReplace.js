import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function ColumnReplace() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3', '4', '2', '1 2 3 4 5 6 7 8 9 10 11 12', '100 200 300'], expected: '1 100 3 4 5 200 7 8 9 300 11 12' },
        { params: ['3', '1', '1', '1 5 9', '100 200 300'], expected: '100 200 300' },
        { params: ['3', '4', '4', '1 2 3 4 5 6 7 8 9 10 11 12', '100 200 300'], expected: '1 2 3 100 5 6 7 200 9 10 11 300' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice n x m, un numar de coloana k si un vector v de lungime n. Inlocuieste coloana k din matrice cu elementele vectorului v.
                    <br />
                    Pe prima linie se citesc numerele n si m.<br />
                    Pe a doua linie citim numarul de coloana k.  <br />
                    Pe a treia linie citim elementele matricei si apoi pe a patra linie, elementele din vector.  <br />
                    Programul va afisa noua matrice.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 3 4 <br /> 2 <br /> 1 2 3 4 <br /> 5 6 7 8 <br /> 9 10 11 12<br />100 200 300
                        <br />
                    </h4>
                    <h4> Date de iesire: <br /> 1 100 3 4 <br /> 5 200 7 8 <br /> 9 300 11 12
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Inlocuirea unei coloane" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Inlocuirea unei coloane"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Cel mai mare de pe rand"
            testPassed={testPassed}
        />
    )
}

export default ColumnReplace