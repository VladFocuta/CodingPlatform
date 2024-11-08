import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'


function Concatenation() {
    const problemHeader = (
        <>
            <p>
                Această lecție explorează cum putem concatena două numere folosind doar operații matematice, fără a le converti în stringuri. În JavaScript, un mod obișnuit de a concatena două numere este să le transformăm în stringuri, apoi să le concatenăm și să le reconvertim în numere. Totuși, putem evita aceste conversii și realiza concatenarea cu ajutorul operațiilor matematice.
            </p>
        </>
    )

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <CodeStyle code={`function concatenare(numar, numarDeAdaugat) {
    let copieNumarDeAdaugat = numarDeAdaugat;
    while (numarDeAdaugat > 0) {
        numar = numar * 10;
        numarDeAdaugat = Math.floor(numarDeAdaugat / 10);
    }
        numar = numar + copieNumarDeAdaugat;
        return numar;
}`} />

                <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Explicația Codului</strong><br />
                    Funcția concatenare ia doi parametri: <strong className='highlight'>numar</strong> și <strong className='highlight'>numarDeAdaugat</strong>. Scopul funcției este să atașeze <strong className='highlight'>numarDeAdaugat</strong> la sfârșitul lui <strong className='highlight'>numar</strong>.<br /><br />
                    <strong>Pas cu Pas</strong><br />
                    1.Definim o copie a valorii <strong className='highlight'>numarDeAdaugat</strong>: Inițializăm <strong className='highlight'>copieNumarDeAdaugat</strong> cu valoarea lui <strong className='highlight'>numarDeAdaugat</strong>, deoarece aceasta va fi modificată în buclă.<br />
                    2.Determinăm factorul de înmulțire: Folosim o buclă <strong className='highlight'>while</strong> pentru a calcula de câte ori trebuie înmulțit <strong className='highlight'>numar</strong> cu <strong className='highlight'>10</strong> pentru a face loc lui <strong className='highlight'>numarDeAdaugat</strong>. Fiecare iterație împarte <strong className='highlight'>numarDeAdaugat</strong> la <strong className='highlight'>10</strong> (scăzând o cifră din partea sa dreaptă), iar în același timp, înmulțește <strong className='highlight'>numar</strong> cu <strong className='highlight'>10</strong>.<br />
                    În această funcție, folosim <strong className='highlight'>Math.floor(numarDeAdaugat / 10)</strong> pentru a ne asigura că obținem doar partea întreagă a împărțirii. Dacă am folosi doar <strong className='highlight'>numarDeAdaugat /= 10</strong>, rezultatul ar fi un număr zecimal (cu rest), iar bucla <strong className='highlight'>while</strong> ar continua să ruleze pentru valori mai mici decât 1, ceea ce nu este dorit.<br />
                    3.Adăugăm <strong className='highlight'>numarDeAdaugat</strong> la <strong className='highlight'>numar</strong>: După ieșirea din buclă, <strong className='highlight'>numar</strong> a fost extins corespunzător și este pregătit să primească <strong className='highlight'>copieNumarDeAdaugat</strong> atașat la capătul său.<br />
                    4.Returnăm rezultatul final.<br /><br />

                    <strong>Exemplu de Funcționare</strong><br />
                    Apelând funcția astfel:
                    <CodeStyle code={`console.log(concatenare(33, 4)); // Va afișa: 334`} />
                    Funcția ia <strong className='highlight'>numar = 33</strong> și <strong className='highlight'>numarDeAdaugat = 4</strong>, înmulțește <strong className='highlight'>33</strong> cu <strong className='highlight'>10</strong> o dată, și apoi adaugă <strong className='highlight'>4</strong>, rezultând <strong className='highlight'>334</strong>.<br />
                    Această metodă este eficientă pentru concatenarea numerelor fără a transforma valorile în stringuri și este utilă în situații unde dorim să evităm conversiile între tipuri de date.
                </div>
            </div>
        </>
    )

    return (
        <ProblemPage
            problemName="Concatenare"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            nextRoute="/problems/Concatenare 2"
            lecture={true}
        />
    )
}

export default Concatenation