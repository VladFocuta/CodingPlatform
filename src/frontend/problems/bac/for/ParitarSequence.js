import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'
function ParitarSequence() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['14', '2 3 5 1 7 9 8 4 4 11 15 17 21 11'], expected: '2 5' },
        { params: ['27', '2 3 5 1 7 9 8 4 4 11 15 17 21 11 6 11 15 17 21 11 6 5 2 6 4 0 16'], expected: '4 5' },
        { params: ['6', '1 2 4 3 5 6'], expected: '2 2' },
        { params: ['7', '1 2 4 3 5 6 8'], expected: '3 2' },
        { params: ['7', '1 2 4 11 5 7 5'], expected: '1 4' },
        { params: ['7', '1 2 4 11 5 7 8'], expected: '1 3' },
        { params: ['7', '1 2 4 1 2 3 6'], expected: '1 2' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Numim secvență paritară a unui șir de numere naturale un subșir al acestuia, format din termeni cu
                    aceeași paritate, aflați pe poziții consecutive în șirul dat. Lungimea secvenței este egală cu numărul de
                    termeni ai acesteia.<br />
                    Se vor citi n elemente de la tastatură, cel puțin două și cel mult 10<sup>6</sup> din intervalul [0, 10<sup>9</sup>].<br />
                    Numerele sunt separate prin câte un spațiu, iar în șir există cel puțin doi termeni cu aceeași paritate pe
                    poziții consecutive.<br />
                    Se cere să se afişeze pe ecran numărul secvențelor paritare de lungime maximă din șir, precum și această lungime maximă.<br />
                    Numerele afişate sunt separate printr-un spațiu. Proiectați un
                    algoritm eficient din punctul de vedere al timpului de executare și al memoriei utilizate.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />14<br /> 2 3 5 1 7 9 8 4 4 11 15 17 21 11


                    </h4>
                    <h4> Date de iesire: <br />2 5</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Secventa paritara" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Secventa paritara"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default ParitarSequence