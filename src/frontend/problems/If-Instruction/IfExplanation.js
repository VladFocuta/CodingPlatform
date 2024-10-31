import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'

function IfExplanation() {
    const problemHeader = (
        <>
            <p>
                Ce este o instrucțiune if?<br />
                Instrucțiunea if în JavaScript este o structură condițională care permite executarea unei secțiuni de cod doar dacă o anumită condiție este îndeplinită (adevărată). Este utilizată pentru a lua decizii în funcție de rezultatul unei expresii logice.
            </p>
        </>
    )

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Sintaxa de bază:</strong>
                    <br />
                    if (condiție) &#123; <br />
                    &nbsp;codul care se execută dacă condiția este adevărată <br />
                    &#125; <br />
                    condiție: Este o expresie care este evaluată fie ca true (adevărat), fie ca false (fals).<br />
                    Codul din interiorul acoladelor &#123;
                    &#125; va fi executat numai dacă expresia din paranteze este true.<br />
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Exemple de bază:</strong>
                    <br />
                    1. Exemplu simplu: <br />
                    let numar = 10; <br />
                    if (numar &gt; 5) &#123; <br />
                    &nbsp;console.log("Numărul este mai mare decât 5"); <br />
                    &#125;<br />
                    În acest exemplu, condiția verifică dacă variabila numar este mai mare decât 5. Deoarece condiția este adevărată (10 &gt; 5), mesajul "Numărul este mai mare decât 5" va fi afișat în consolă.<br /><br />

                    2. Dacă condiția este falsă:<br />
                    let numar = 3;<br />
                    if (numar &gt;5) &#123;<br />
                    &nbsp; console.log("Numărul este mai mare decât 5");<br />
                    &#125;<br />
                    Aici, condiția numar &gt; 5 este falsă, deoarece 3 nu este mai mare decât 5. Prin urmare, codul din interiorul if nu va fi executat și nu se va afișa nimic în consolă.<br /><br />
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> if-else:</strong><br />
                    Uneori dorim să executăm un cod alternativ atunci când condiția este falsă. În acest caz, folosim blocul else.<br />
                    Sintaxa if-else:<br />
                    if (condiție) &#123; <br />
                    &nbsp; codul care se execută dacă condiția este adevărată<br />
                    &#125; else &#123;<br />
                    &nbsp;codul care se execută dacă condiția este falsă<br />
                    &#125;<br />
                    Exemplu:<br />
                    let numar = 3;<br />

                    if (numar &gt; 5) &#123;<br />
                    &nbsp;console.log("Numărul este mai mare decât 5");<br />
                    &#125; else &#123;<br />
                    &nbsp;console.log("Numărul este mai mic sau egal cu 5");<br />
                    &#125;<br />
                    În acest caz, deoarece condiția numar &gt; 5 este falsă, se va executa secțiunea de cod din blocul else, iar consola va afișa "Numărul este mai mic sau egal cu 5".
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> if-else if-else:</strong><br />
                    Dacă avem mai multe condiții de testat, putem folosi blocul else if pentru a adăuga mai multe verificări.<br />
                    Exemplu:<br />
                    let numar = 5;<br />
                    if (numar &gt; 10) &#123;<br />
                    &nbsp;console.log("Numărul este mai mare decât 10");<br />
                    &#125; else if (numar === 5) &#123;<br />
                    &nbsp;console.log("Numărul este exact 5");<br />
                    &#125; else &#123;<br />
                    &nbsp;console.log("Numărul este mai mic decât 5");<br />
                    &#125;<br />
                    Dacă numar ar fi mai mare de 10, s-ar executa primul bloc if.<br />
                    Dacă numar este exact 5 (ca în exemplul nostru), se va executa blocul else if, afișând "Numărul este exact 5".<br />
                    Dacă niciuna dintre condiții nu este îndeplinită, se execută blocul final else.<br />
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Cum funcționează if?</strong><br />
                    1.Evaluare condiție: Condiția din interiorul parantezelor rotunde () este evaluată. Aceasta poate fi o comparație <br />(de exemplu, x &gt;  y), o valoare booleană (true sau false) sau orice expresie care returnează un rezultat boolean.<br />
                    2.Alegerea codului care se va executa:<br />
                    Dacă expresia este true, codul din blocul &#123;
                    &#125; asociat cu if va fi executat.<br />
                    Dacă există un bloc else, acesta va fi executat numai dacă condiția este false.<br /><br />
                    Exemple practice:<br />
                    &nbsp; Verificarea unei variabile:<br />
                    &nbsp;&nbsp;let esteVremeaFrumoasa = true;<br />

                    &nbsp;&nbsp;if (esteVremeaFrumoasa) &#123;<br />
                    &nbsp;&nbsp; &nbsp;console.log("Hai să mergem la plimbare!");<br />
                    &nbsp; &#125; else &#123;<br />
                    &nbsp;&nbsp; &nbsp;console.log("Rămânem în casă.");<br />
                    &nbsp; &#125;<br />
                    Aici, dacă variabila <strong className='highlight'>esteVremeaFrumoasa</strong> este true, va afișa "Hai să mergem la plimbare!", altfel, va afișa "Rămânem în casă."<br />
                    <br /> Concluzie:<br /> 
                    Instrucțiunea <strong className='highlight'>if </strong>este un instrument de bază pentru a lua decizii în programele JavaScript, permițându-ți să execuți cod diferit în funcție de condiții logice. Este una dintre cele mai frecvent utilizate structuri de control în orice limbaj de programare.
                </div>
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Instructiunea If"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            nextRoute="/Brothers"
            lecture={true}
        />
    )
}

export default IfExplanation