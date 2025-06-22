import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function VowsPairs() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['Mancarea ea unio aeiou'], expected: 'ea \nea \nio \nae \nei \nio \nou \n7' },
        { params: ['Aceasta bluza desi foarte ieftina era foarte frumoasa asa ca am cumparat-o'], expected: 'ea \noa \nie \noa \noa \n5' },
        { params: ['Dimineta este racare'], expected: '0' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se citeşte de la tastatură o frază de maxim 70 de caractere. Să se afişeze,
                    una sub alta, toate perechile de vocale consecutive din frază, precum şi
                    numărul acestora.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />aceasta bluza desi foarte ieftina<br /> era
                        foarte frumoasa asa ca am cumparat-o

                    </h4>
                    <h4> Date de iesire: <br /> ea<br /> oa<br /> ie<br /> oa<br /> oa <br /> 5</h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Perechi de vocale consecutive" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Perechi de vocale consecutive"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Codificare prin repetare ghidata de cifre"
            testPassed={testPassed}
        />
    )
}

export default VowsPairs