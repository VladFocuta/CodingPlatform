import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function WordsFilter() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['2 Mergeam la plimbare si vorbeam cu prietena mea'], expected: 'la si cu' },
        { params: ['5 Peste munti si peste dealuri'], expected: 'Peste munti peste' },
        { params: ['10 Dimineata este racoare'], expected: '0' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citeşte de la tastatură un text. Se ştie că două cuvinte din text sunt
                    separate prin unul sau mai multe spaţii. Să se afişeze toate cuvintele din text
                    formate din k caractere.<br />
                    K se citeste de la tastatura, urmat de text. <br />
                    Programul afișează 0, în cazul în care nu avem niciun cuvant format din k caractere.

                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />2 <br />Mergeam la plimbare si vorbeam cu prietena
                        mea

                    </h4>
                    <h4> Date de iesire: <br />la si cu</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Filtrarea cuvintelor dupa lungime" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Filtrarea cuvintelor dupa lungime"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Perechi de vocale consecutive"
            testPassed={testPassed}
        />
    )
}

export default WordsFilter