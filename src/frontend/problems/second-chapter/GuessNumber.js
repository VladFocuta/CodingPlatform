import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'


function GuessNumber() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [50, 33], expected: "Mai incearca! Felicitari!" },
        { params: [33], expected: "Felicitari!" },
        { params: [50, 40, 25], expected: "Mai incearca! Mai incearca! Ai pierdut!" },
        { params: [12, 26, 33], expected: "Mai incearca! Mai incearca! Felicitari!" },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program în care utilizatorul trebuie sa ghiceasca un numar predefinit.
                    <br />
                    Numarul pe care trebuie sa il ghiceasca este 33 si utilizatorul are doar 3 incercari.
                    <br />
                    Utilizatorul va citi numerele de la tastatura si in cazul unui castig, se va afisa <strong style={{ color: 'red' }}>Felicitari!</strong>.<br />
                    In caz contrar, se va afisa <strong style={{ color: 'red' }}>Ai pierdut!</strong> si dupa fiecare incercare nereusita, afisam <strong style={{ color: 'red' }}>Mai incearca!</strong>.<br />
                    <br />
                    Mentiuni: <br />
                    Fiecare mesaj sa fie situat pe o noua linie.<br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 12 <br /> 26 <br /> 32
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> <strong style={{ color: 'red' }}>Mai incearca!</strong><br />
                        <strong style={{ color: 'red' }}>Mai incearca!</strong><br />
                        <strong style={{ color: 'red' }}>Ai pierdut!</strong>
                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Ghicirea unui numar" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Ghicirea unui numar"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Numar prim"
            testPassed={testPassed}
        />
    )
}

export default GuessNumber