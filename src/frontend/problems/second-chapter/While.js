import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'


function While() {
    const problemHeader = (
        <>
            <p>
                Ce este mai exact while?<br />
                Instrucțiunea while în JavaScript este o structură de control care permite repetarea unui bloc de cod atâta timp cât o condiție specificată este adevărată. Aceasta este utilă când vrei să rulezi aceleași instrucțiuni de mai multe ori, fără să scrii codul de mai multe ori.
            </p>
        </>
    )

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Cum funcționează while:</strong><br />
                    Într-o buclă <strong className='highlight'>while</strong>, codul din interiorul buclei se va repeta în mod constant atâta timp cât condiția este <strong className='highlight'>true</strong>.<br />
                    Odată ce condiția devine <strong className='highlight'>false</strong>, bucla se oprește.
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Sintaxa de bază</strong>
                    <CodeStyle code={`while (condiție) {
 // codul care se execută repetat
}
`} />
                    <strong className='highlight'>condiție:</strong> Expresia care este verificată înainte de fiecare repetare. Dacă este <strong className='highlight'>true</strong>, codul din interiorul buclei se execută. Dacă este <strong className='highlight'>false</strong>, bucla se oprește.<br />
                </div>


                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Exemplu simplu:</strong><br />
                    Să afișăm numerele de la 1 la 5 folosind <strong className='highlight'>while</strong>:<br />

                    <CodeStyle code={`let numar = 1; // Inițializăm o variabilă
while (numar <= 5) { // Condiția buclei
    console.log(numar); // Afișăm valoarea variabilei
    numar = numar + 1; // Incrementăm variabila
}`} />



                    <strong style={{ fontSize: 17, fontWeight: 'normal' }}>Ce face acest cod:</strong><br />
                    &nbsp;Inițializare: Variabila numar este setată la 1.<br />
                    &nbsp;Condiție: Bucla verifică dacă numar este mai mic sau egal cu 5. Dacă este adevărat, codul din buclă se execută.<br />
                    &nbsp;Afișare: Afișează valoarea curentă a lui numar.<br />
                    &nbsp;Incrementare: Crește valoarea lui numar cu 1.<br />
                    &nbsp;Repetare: Procesul se repetă până când numar devine 6, moment în care condiția numar &lt;= 5 devine false, și bucla se oprește.<br />
                    <CodeStyle code={`Ce se afișează:
    1
    2
    3
    4
    5
`} />

                    <strong style={{ fontSize: 17, fontWeight: 'normal' }}>Explicație ușoară:</strong><br />
                    Gândește-te la <strong className='highlight'>while</strong> ca la o întrebare pe care programul o pune de fiecare dată înainte de a executa o acțiune: „Încă mai trebuie să fac asta?”. Cât timp răspunsul este „da” <strong className='highlight'>true</strong>, va continua să repete codul din interiorul buclei.<br />
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Atenție la bucle infinite</strong><br />
                    Dacă condiția din <strong className='highlight'>while</strong> rămâne mereu <strong className='highlight'>true</strong>, bucla va rula la nesfârșit. Acest lucru se numește buclă infinită și poate bloca programul.<br /><br />
                    <strong style={{ fontSize: 17, fontWeight: 'normal' }}>Exemplu de buclă infinită (de evitat):</strong><br />
                    <CodeStyle code={`let numar = 1;
while (numar &lt;= 5) {
    console.log(numar);
    // Lipsă de incrementare! ${'numar'} rămâne 1, bucla nu se va opri niciodată
}
`} />

                    <strong style={{ fontSize: 17, fontWeight: 'normal' }}>Concluzie</strong><br />
                    Bucla <strong className='highlight'>while</strong> este utilă atunci când nu știm de câte ori va trebui să repetăm codul și dorim ca acesta să se oprească atunci când o anumită condiție nu mai este îndeplinită.
                </div>

            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Instrucțiunea while"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            nextRoute="/ReverseCounter"
            lecture={true}
        />
    )
}

export default While