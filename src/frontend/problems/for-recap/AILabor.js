import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'

function AILabor() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['7', '50 3 3 50 99 50 100'], expected: '3 50 99 100' },
        { params: ['9', '50 3 3 50 99 50 0 100 0'], expected: '0 3 50 99 100' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Într-un centru de cercetare de top, cunoscut ca L.I.A. (Laboratorul de Inteligență Artificială), o echipă de tineri programatori lucrează la antrenarea unui algoritm care sortează rapid date numerice primite de la senzori inteligenți.<br />

                    Într-o zi, un server trimite o secvență de valori cuprinse între 0 și 100, care trebuie procesată imediat.<br />
                    Clasa algoritmului clasic de sortare e prea lentă, iar timpul este critic — senzorii trimit date în timp real.<br />

                    Unul dintre programatori, Ada, propune o metodă eficientă:<br />

                    „Nu comparăm element cu element. Înregistrăm de câte ori apare fiecare valoare, apoi reconstruim lista în ordine.”<br />

                    Așa ia naștere o versiune simplificată de sortare prin frecvență, adaptată pentru cazuri speciale, dar extrem de rapidă.<br />
                    Simulează munca echipei de la L.I.A. și scrie un program care sortează valorile între 0 și 100 folosind un vector de frecvență, astfel încât datele să fie gata pentru analiza următoare!<br /><br />
                    <strong style={{ color: 'red' }}>Restricții și precizări:</strong><br />
                    1 ≤ n ≤ 100000<br />
                     0 ≤ valori ≤ 100<br />

                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: <br />7<br />
                        50 3 3 50 99 50 100<br />
                    </h4>
                    <h4> Date de iesire:<br /> 3 50 99 100
                     
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Laboratorul de inteligenta artificiala" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Laboratorul de inteligenta artificiala"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Analiza cifrelor in codurile unui depozit"
            testPassed={testPassed}
        />
    )
}

export default AILabor