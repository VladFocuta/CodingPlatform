import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function WordsCounter() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['Ana are mere si! pere. Ale, ei mere, sunt rosii?'], expected: '10' },
        { params: ['Astazi, invatam. Sa numaram? Si sa.. ne distram!!'], expected: '8' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o propozitie formata din litere, cifre si semne de punctuatie. Trebuie sa determinam cate cuvinte contine propozitia.<br />
                     Cuvintele sunt separate prin spatii, virgule, puncte, semne de exclamare sau alte caractere speciale.<br />
                    Sa se afiseze numarul total de cuvinte.<br />
                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />Astazi, invatam. Sa numaram? Si sa.. ne distram!!

                    </h4>
                    <h4> Date de iesire: <br />8</h4>

                </div>
                

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Numararea cuvintelor" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Numararea cuvintelor"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Anagrame"
            testPassed={testPassed}
        />
    )
}

export default WordsCounter