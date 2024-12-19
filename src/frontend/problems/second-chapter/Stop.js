import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function Stop() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [1, 1], expected: [1] },
        { params: [925, 2], expected: [2] },
        { params: [450100, 0], expected: [0] },
        { params: [145, 2], expected: [5] },
        { params: [200, 2], expected: [2] },
        { params: [1, 0], expected: [1] },
        { params: [912, 9], expected: [9] },
    ];
    

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Trenul Bucuresti-Iasi trece prin diferite gari. Fiecare gara este reprezentata de cate o cifra din numarul <strong style={{ color: '#00bfff' }}>a</strong>.<br />
                    Marius doreste sa coboare in gara cu numarul <strong style={{ color: '#00bfff' }}>b</strong>.<br />
                    Opreste trenul cand a ajuns la destinatie si afiseaza numarul garii.<br />
                    In cazul in care Marius nu isi gaseste gara la care voia sa coboare, afiseaza numarul primei gari. Prima gara fiind ultima cifra din numarul <strong style={{ color: '#00bfff' }}>a</strong>.
                    <br /> Numerele <strong style={{ color: '#00bfff' }}>a</strong> si <strong style={{ color: '#00bfff' }}>b</strong> se vor citi de la tastatura.
                    <br /><br />
                    Mentiuni: 1 ≤ a ≤ 1 000 000 si 0 ≤ b ≤ 9
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 433 3
                        <br />
                    </h4>
                    <h4> Date de iesire: 3
                    </h4>
                </div> <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 873243 0
                        <br />
                    </h4>
                    <h4> Date de iesire: 3
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test 
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Trenul" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Trenul"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default Stop