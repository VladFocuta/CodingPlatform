import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function PhoneNrEdit() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['(+254)722123456', '\n'], expected: '722123456' },
        { params: ['(+254)722123456', '\n0'], expected: '0722123456' },
        { params: ['(+1)2121234567', '\n'], expected: '2121234567' },
        { params: ['(+1)2121234567', '\n0'], expected: '02121234567' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4> Variabilele tI, pN și tL permit accesul la câte un șir de maximum 20 de caractere. Inițial, șirul accesat prin tL
                    este vid, șirul accesat prin tI reprezintă un număr de telefon în format internațional, iar șirul accesat prin pN
                    reprezintă un prefix național sau este un șir vid.<br />
                    Numărul de telefon în format internațional conține codul de țară, scris între paranteze rotunde, urmat de cifrele
                    numărului propriu-zis. Codul de țară este format din cifre sau din simbolul + (plus), urmat de cifre. În multe țări,
                    pentru a forma local un număr de telefon, se înlocuiește secvența formată din paranteze și codul de țară cu un
                    prefix național format din cifre (de exemplu 0, în România) sau cu șirul vid (de exemplu în SUA).<br />
                    Scrieți o secvență de instrucțiuni C++ astfel încât, în urma executării acesteia, șirul accesat prin tL să
                    reprezinte numărul de telefon format local. Declarați corespunzător eventualele alte variabile utilizate.<br /><br />
                    Dacă prin variabila tI se accesează șirul (+254)722123456, iar prin variabila pN se accesează
                    șirul 0, atunci numărul format local este 0722123456, iar dacă prin variabila tI se accesează șirul
                    (+1)2121234567, iar prin variabila pN se accesează șirul vid, atunci numărul format local este
                    2121234567.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />informatica


                    </h4>
                    <h4> Date de iesire: <br /> ioaia </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Formatarea numerelor de telefon" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Formatarea numerelor de telefon"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            testPassed={testPassed}
        />
    )
}

export default PhoneNrEdit