import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function FirstKWords() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '2', 'norii \n cumulus \n pluteau \n pe \n cer'], expected: 'norii \n pluteau' },
        { params: ['5', '3', 'nor \n cumulus \n plut \n gatit \n cer'], expected: 'nu exista' },
        { params: ['3', '1', 'vanator \n birou \n soare'], expected: 'birou' },
        { params: ['4', '2', 'vanator \n birou \n sar \n mar'], expected: 'birou' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Scrieți un program C++ care citește de la tastatură două numere naturale n și k, apoi n cuvinte,
                    separate prin Enter.<br />Fiecare cuvânt este format din cel mult 10 caractere, numai litere mici ale
                    alfabetului englez, iar numerele citite sunt din intervalul [1,20].<br />Programul afișează pe ecran, pe linii separate, primele k cuvinte dintre cele citite pentru
                    care ultima literă este o vocală, sau doar mesajul <strong style={{ color: 'red' }}>nu exista</strong>  dacă nu există k astfel de
                    cuvinte. Se consideră vocale literele a, e, i, o, u.

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />5 2<br />norii <br />cumulus <br />pluteau <br />pe <br /> cer


                    </h4>
                    <h4> Date de iesire: <br />norii <br /> pluteau</h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Primele k cuvinte" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Primele k cuvinte"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default FirstKWords