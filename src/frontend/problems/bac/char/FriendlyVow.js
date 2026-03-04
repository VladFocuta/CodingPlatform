import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function FriendlyVow() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['rame'], expected: 'oaie' },
        { params: ['sport'], expected: 'ooooo' },
        { params: ['bumerang'], expected: 'auieoaie' },
        { params: ['programare'], expected: 'oooeoaiaoe' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Se consideră o vocală oarecare a alfabetului englez, notată cu v, și o consoană oarecare a alfabetului englez,
                    notată cu c.<br />Litera v se numeşte vocală prietenă a lui c dacă în şirul literelor alfabetului englez, ordonat
                    lexicografic, v îl precede pe c, iar între v și c nu există nicio vocală. Se consideră vocale literele a, e, i, o, u.<br />
                    Exemplu: e este vocală prietenă pentru consoanele f, g și h, dar nu este vocală prietenă pentru
                    consoanele d și j.<br />Un elev vrea să transmită unui prieten o parolă, codificată. Parola este formată dintr-un singur cuvânt de
                    cel mult 50 de caractere, litere mici ale alfabetului englez, cel puțin una fiind consoană.<br />
                    Codificarea se face prin înlocuirea fiecărei consoane cu vocala sa prietenă, ca în exemplu.<br />
                    Scrieţi un program C++ care citeşte de la tastatură un cuvânt, reprezentând o parolă de tipul precizat şi
                    determină, în memorie, forma codificată a acesteia. Programul afişează pe ecran parola codificată obţinută.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />rame


                    </h4>
                    <h4> Date de iesire: <br />oaie</h4>

                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />sport


                    </h4>
                    <h4> Date de iesire: <br />ooooo</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Vocala prietena" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Vocala prietena"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Cautare prenume"
            testPassed={testPassed}
        />
    )
}

export default FriendlyVow