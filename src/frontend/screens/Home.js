import React from 'react'
import { Helmet } from 'react-helmet';
function Home() {
    const sections = [
        {
            title: 'De ce să alegi meditațiile noastre la informatică?',
            text: (
                <>
                    <strong>Profesor dedicat 1 la 1</strong> – sesiuni personalizate, adaptate nivelului tău.<br />
                    <strong>Platformă interactivă</strong> – poți rezolva exerciții și primi feedback automat.<br />
                    <strong>Pregătire pentru BAC și admitere</strong> – accent pe algoritmică, structuri de date și gândire logică.<br />
                    <strong>Totul online</strong> – poți învăța de oriunde.<br />
                    <strong>Suport constant</strong> – comunicare directă cu profesorul și materiale suplimentare.
                </>
            )
        },
        {
            title: 'Cum funcționează?',
            text: (
                <>
                    <strong>Creează-ți un cont pe</strong>{' '}
                    <a href="https://www.codersro.com/Register" style={{ color: 'white', textDecoration: 'underline' }}>CodersRO</a>.<br />
                    <strong>Testează platforma gratuit</strong> — vezi feedback automat.<br />
                    <strong>Programează</strong> o meditație individuală.<br />
                    Primești un <strong>profesor dedicat</strong> care te ghidează pas cu pas.
                </>
            )
        },
        {
            title: 'Ce conținut acoperim la meditații',
            text: (
                <>
                    Limbaje: <strong>C++</strong>.<br />
                    <strong>Concepte:</strong> variabile, bucle, funcții, fișiere.<br />
                    <strong>Algoritmi:</strong> sortare, căutare, recursivitate.<br />
                    <strong>Structuri:</strong> vectori, matrici, arbori, grafuri.<br />
                    <strong>Pregătire</strong> pentru BAC și admitere.
                </>
            )
        },
        {
            title: 'Exemple de exerciții pe care le poți lucra',
            text: (
                <>
                    Suma elementelor dintr-un vector.<br />
                    Numărul maxim dintr-o matrice.<br />
                    Căutare binară într-un șir.<br />
                    Arbori binari și parcurgeri.
                </>
            )
        },
        {
            title: 'Cum te înscrii la meditații',
            text: (
                <>
                    Completează formularul de contact pe{' '}
                    <a href="https://www.codersro.com/advertisement/adv" style={{ color: 'white', textDecoration: 'underline' }}>CodersRO</a>{' '}
                    sau trimite un mesaj la{' '}
                    <a href="mailto:infocodersro@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>infocodersro@gmail.com</a>.<br />
                    Vei fi contactat în 24h pentru program, profesor și detalii.
                </>
            )
        },
        {
            title: 'Flexibilitate și transparență',
            text: (
                <>

                    <strong style={{ color: 'green' }}> Dacă nu ești mulțumit de prima ședință, primești banii înapoi.</strong><br />
                    Plătești doar ședințele efectuate.<br />
                    Ai acces complet la resursele platformei.
                </>
            )
        },
    ];

    return (
        <>
            <Helmet>
                <title>Meditatii Informatica Online | Pregatire BAC si Admitere</title>
                <meta name="description" content="Meditatii informatica online 1 la 1, pregatire BAC informatica, cursuri programare si probleme rezolvate. Profesor dedicat, platforma interactiva. CodersRO." />
            </Helmet>
            <div className="main-container">
                <h1 className="page-title" style={{ marginTop: '30px' }}>
                    Meditații Informatică Online
                </h1>
                <div className='page-wrapper'>
                    <div className="glass-grid">
                        {sections.map((sec, index) => (
                            <div className="glass-card" key={index}>
                                <h3 className="card-title">{sec.title}</h3>
                                <p className="card-text">{sec.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home
