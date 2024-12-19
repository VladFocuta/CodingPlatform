import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'

function AlgorithmNotion() {
    const problemHeader = (
        <h4 style={{ color: 'white', fontSize: '1.2rem' }}>
            Un algoritm este o secvență clară, finită și ordonată de pași sau instrucțiuni care descriu cum să rezolvăm o problemă specifică sau să realizăm o sarcină. Algoritmii sunt utilizați în multe domenii, inclusiv matematică, informatică, și inginerie, și stau la baza funcționării programelor software și a calculatoarelor.
        </h4>
    )

    const problemContent = (

        <>
            <h4 >
                Caracteristicile unui algoritm
            </h4>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 1. Finitudinea</strong>
                <p>Un algoritm trebuie să se termine după un număr finit de pași. Nu poate fi infinit.</p>
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 2. Claritatea</strong>
                <p>Toți pașii algoritmului trebuie să fie bine definiți și ușor de înțeles, fără ambiguități.</p>
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 3. Intrare</strong>
                <p>Un algoritm are zero sau mai multe date de intrare, care reprezintă informațiile necesare pentru a începe procesarea.</p>
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 4. Ieșire</strong>
                <p>Un algoritm produce una sau mai multe rezultate (ieșiri), care reprezintă soluțiile problemei pentru care a fost creat.</p>
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 5. Eficiența</strong>
                <p>Algoritmul trebuie să fie eficient din punct de vedere al resurselor utilizate (timp și spațiu de memorie).</p>
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 6. Generalitatea</strong>
                <p>Un algoritm trebuie să fie aplicabil pentru o gamă largă de cazuri ale problemei, nu doar pentru unul specific.</p>
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 7. Corectitudinea</strong>
                <p>Algoritmul trebuie să producă rezultate corecte pentru toate datele de intrare valide.</p>
            </div>

            <h4 >
                Exemplu simplu de algoritm
            </h4>
            <p>Un algoritm pentru calcularea sumei a două numere:</p>

            <p>
                1. Citește primul număr, a.<br />
                2. Citește al doilea număr, b.<br />
                3. Calculează suma: suma = a + b.<br />
                4. Afișează rezultatul suma.
            </p>

            <p>
                Acest algoritm respectă toate caracteristicile menționate: este finit, clar, are intrări (a si b), o iesire (suma), este general (valabil pentru orice două numere) și corect.
            </p>
        </>

    )


    return (
        <ProblemPage
            problemName="Notiunea de algoritm"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Bazele programarii" />
    )
}

export default AlgorithmNotion