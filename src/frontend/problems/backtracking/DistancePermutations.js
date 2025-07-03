import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function DistancePermutations() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['6', '3'], expected: '3 6 2 5 1 4 \n 4 1 5 2 6 3' },
        { params: ['4', '2'], expected: '2 4 1 3 \n 3 1 4 2' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Să se genereze toate permutările mulţimii (1, 2,…,n) cu proprietatea că
                    diferenţa în modul dintre oricare două numere consecutive este cel puţin
                    egală cu o valoare v citită de la tastatură.<br />
                    n va fi citit şi el de la tastatură.<br />
                    Fiecare soluţie găsită va fi afişată pe o nouă linie.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 6 3
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> 3 6 2 5 1 4 <br />4 1 5 2 6 3
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Permutari la distanta" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Permutari la distanta"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default DistancePermutations