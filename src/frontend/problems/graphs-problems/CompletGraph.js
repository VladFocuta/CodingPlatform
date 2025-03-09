import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function CompletGraph() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4'], expected: '0 1 1 1 \n1 0 1 1 \n1 1 0 1 \n1 1 1 0' },

    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se dă un graf complet cu n noduri.Pentru acest graf, trebuie să determinăm și să afișăm matricea de adiacență.

                    <br />Implementează un graf complet cu n noduri, unde fiecare nod este conectat la toate celelalte noduri.<br />
                    Afișează matricea de adiacență a acestui graf, unde elementul de pe linia i și coloana j va fi 1 dacă există un arc între nodurile i și j, altfel va fi 0.<br />

                    <br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 4


                    </h4>
                    <h4> Date de iesire: <br /> 0 1 1 1<br />
                        1 0 1 1<br />
                        1 1 0 1<br />
                        1 1 1 0<br /></h4>

                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Graf complet" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Graf complet"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Graf bipartit"
            testPassed={testPassed}
        />
    )
}

export default CompletGraph