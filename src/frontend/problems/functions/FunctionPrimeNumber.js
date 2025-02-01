import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function FunctionPrimeNumber() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['3'], expected: 'prim' },
        { params: ['4'], expected: 'nu este prim' },

    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Sa se creeze o functie verifica daca un numar este prim, ea va returna true sau false. <br />
                    Functia primeste un parametru n de tip int.<br />
                    In int main(), declaram o variabila number de tip int si o citim de la tastatura.<br />
                    Apoi verificam cu ajutorul functiei create de noi, daca number este prim (afisam pe ecran <strong style={{color: 'red'}}>prim</strong>) sau daca nu este prim (afisam <strong style={{color: 'red'}}>nu este prim</strong>).
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 3 

                    </h4>
                    <h4> Date de iesire: <br /> prim </h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Verificare numar prim" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Verificare numar prim"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Afisare mesaj"
            testPassed={testPassed}
        />
    )
}

export default FunctionPrimeNumber