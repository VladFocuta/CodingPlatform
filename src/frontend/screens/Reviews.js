import React from 'react'
import { Helmet } from 'react-helmet';
function Reviews() {
    const sections = [
        {
            title: 'Alexandru Matei',
            text: (
                <>

                    <strong className="card-title">⭐️⭐️⭐️⭐️⭐️</strong>
                    <br /><br />
                    <strong className="card-title">Elev clasa a 9-a</strong><br /><br />
                    <strong><span title="Nota intre 1-10">ℹ️ Nivel initial: 5</span></strong> <br />
                    <strong><span title="Nota intre 1-10">ℹ️ Nivel actual: 8</span></strong> <br /><br />
                    <strong >Experienta reala: O adevarata placere sa scriu cod aici</strong>
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

    ];

    return (
        <>
            <Helmet>
                <title>Meditatii Informatica Online | Pregatire BAC si Admitere</title>
                <meta name="description" content="Meditatii informatica online 1 la 1, pregatire BAC informatica, cursuri programare si probleme rezolvate. Profesor dedicat, platforma interactiva. CodersRO." />
            </Helmet>
            <div className="main-container">
                <h1 className="page-title" style={{ marginTop: '30px' }}>
                    Rezultatele utilizatorilor noștri
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
    )
}

export default Reviews