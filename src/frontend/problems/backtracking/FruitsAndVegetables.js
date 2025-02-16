import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test'

function FruitsAndVegetables() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['5', '5'], expected: 'mar banana portocala ardei tomate \n mar banana ceapa kiwi tomate \n mar banana ceapa ardei strugure \n mar banana ceapa ardei tomate' },

    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da urmatorul set de 5 fructe si 5 legume:<br />
                    Fructe: mar, banana, portocala, kiwi, strugure<br />
                    Legume: morcov, cartof, ceapa, ardei, tomate<br />
                    Se cere sa se genereze toate combinatiile posibile de 5 elemente, in care sa fie cel mult 3 fructe si 2 legume sau invers, adica 3 legume si 2 fructe. Vor fi afisate doar primele 4 combinatii gasite.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>

                    <h4> Date de iesire: <br />măr banană portocală ardei tomate<br />
                        măr banană ceapă kiwi tomate<br />
                        măr banană ceapă ardei strugure<br />
                        măr banană ceapă ardei tomate
                        ...<br />
                        20
                        
                    </h4>
                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Fructe si legume" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Fructe si legume"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default FruitsAndVegetables