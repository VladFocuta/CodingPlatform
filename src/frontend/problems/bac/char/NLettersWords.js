import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function NLettersWords() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['Ana are cel mai bun mar'], expected: 'DA 3' },
        { params: ['Ana are cel mai dulce mar'], expected: 'NU' },
        { params: ['abc def'], expected: 'DA 3' },
        { params: ['aaaaa bbbbb ccccc ddddd eeeee fffff ggggg hhhhh iiiii jjjjj kkkkk lllll mmmmm nnnnn ooooo ppppp'], expected: 'DA 5' },
        { params: ['aaaa bbbbb ccccc ddddd eeeee fffff ggggg hhhhh iiiii jjjjj kkkkk lllll mmmmm nnnnn ooooo ppppp'], expected: 'NU' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Într-un text, de cel mult 100 de caractere, cuvintele sunt formate din litere ale alfabetului englez și sunt
                    separate prin câte un spațiu. Textul are cel puțin două cuvinte.<br />
                    Scrieți un program C++ care citește de la tastatură un text de tipul precizat mai sus și afișează pe ecran
                    mesajul <strong style={{color: 'red'}}>DA</strong> și un număr natural n, separate printr-un spațiu, dacă toate cuvintele din text au câte n litere,
                    sau mesajul <strong style={{color: 'red'}}>NU</strong> în cazul în care nu toate cuvintele au același număr de litere.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />Ana are cel mai bun mar


                    </h4>
                    <h4> Date de iesire: <br /> DA 3 </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Cuvinte de n litere" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Cuvinte de n litere"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default NLettersWords