import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Counter() {
    const problemHeader = (
        <>
            <p>
                Variabila de tip contor (sau "counter") este o variabilă specială care ține evidența numărului de repetări sau evenimente într-un program. Aceasta este esențială în multe operații de programare, mai ales în bucle, și este extrem de utilă pentru a monitoriza progresul sau a limita numărul de iterații.
            </p>
        </>
    )

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 1. Ce este o variabilă contor?</strong><br />
                    O variabilă contor este o variabilă numerică care crește (sau scade) de fiecare dată când o anumită acțiune se repetă. În general, o utilizăm pentru a:<br />
                    &nbsp;- Contoriza numărul de iterații într-o buclă.<br />
                    &nbsp;- Păstra evidența unor acțiuni specifice, cum ar fi câte elemente au fost procesate sau câte date au fost introduse.<br />
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 2. Cum se inițializează și folosește un contor</strong><br />
                    De obicei, un contor este inițializat la <strong className='highlight'>0</strong> sau <strong className='highlight'>1</strong>, în funcție de scopul lui, și apoi este incrementat sau decrementat în funcție de operațiunea dorită.<br /><br />
                    Exemplu de contor inițializat la <strong className='highlight'>0</strong>:
                    <SyntaxHighlighter language="cpp" style={tomorrow}>
                        {`int contor = 0; // Inițializăm contorul la zero
while (contor < 5) { // Bucla se va executa până când contorul ajunge la 5
    cout << "Valoarea contorului este: " << contor << endl;
    contor = contor + 1; // Incrementăm contorul la fiecare iterație
}
cout << "Bucla s-a încheiat. Valoarea finală a contorului este: " << contor;`}
                    </SyntaxHighlighter>
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 3. Explicația codului</strong><br />
                    &nbsp;Inițializarea contorului: Începem contorul cu <strong className='highlight'>0</strong>.<br />
                    &nbsp;Bucla while: Bucla rulează atâta timp cât valoarea contorului este mai mică decât <strong className='highlight'>5</strong>.<br />
                    &nbsp;Incrementarea: De fiecare dată când trece prin buclă, contorul crește cu <strong className='highlight'>1</strong>. Acest lucru îl face să se apropie de condiția finală (<strong className='highlight'>5</strong>), astfel încât bucla să se încheie după 5 iterații.<br />
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 4. Exemple de utilizare</strong><br />
                    <strong>Contorizare simplă</strong><br />
                    Să spunem că dorim să afișăm un mesaj de <strong className='highlight'>10</strong> ori. Putem face asta folosind o variabilă contor:<br />
                    <SyntaxHighlighter language="javascript" style={tomorrow}>
{`let contor = 1;
while (contor <= 10) {
    cout << "Mesajul numărul " << contor << endl;
    contor = contor + 1;
}`}
                    </SyntaxHighlighter>
                    Aici, contorul începe de la <strong className='highlight'>1</strong> și crește până la <strong className='highlight'>10</strong>. Când contorul ajunge la <strong className='highlight'>11</strong>, condiția <strong className='highlight'>contor &lt;= 10</strong> devine <strong className='highlight'>false</strong>, iar bucla se oprește.<br /><br />
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 5. Variante ale unui contor</strong><br />
                    &nbsp;Incrementare cu un pas diferit: Poți folosi orice valoare, nu doar <strong className='highlight'>1</strong>. De exemplu, poți crește contorul cu <strong className='highlight'>2</strong>, <strong className='highlight'>5</strong> etc., în funcție de necesități (<strong className='highlight'>contor = contor + 2;</strong>).<br />
                    &nbsp;Decrementare: Dacă dorești să numeri invers, poți decremeta contorul (de exemplu, <strong className='highlight'>contor = contor - 1;</strong>).
                </div><br />

                <strong>Concluzie</strong>
                Variabila contor este extrem de utilă pentru a controla repetițiile în bucle și a ține evidența numărului de acțiuni realizate. Ea poate fi inițializată, incrementată și utilizată în multe moduri, făcând-o un instrument de bază în programare.

            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Contor"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            nextRoute="/problems/Numaratoare inversa"
            lecture={true}
        />
    )
}

export default Counter
