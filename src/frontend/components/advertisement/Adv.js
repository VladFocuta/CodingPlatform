import React from 'react'
import ContactForm from './ContactForm'

function Adv() {
    return (
        <>
            <div className='main-container'>
                <h1 className='home-container' style={{ color: 'white' }}>
                    De ce să te înscrii?
                </h1>
                <div className='audience-card' style={{
                    backgroundColor: '#2d2d2d',
                    padding: '20px',
                    borderRadius: '10px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    color: 'white',
                    boxShadow: '0 0 15px rgba(255,255,255,0.1)'
                }}>
                    <h2 style={{ color: '#00bcd4', marginBottom: '15px' }}>Cui se adresează platforma?</h2>
                    <p style={{ fontSize: '16px' }}>
                        Indiferent dacă ești elev, adult sau pasionat de tehnologie, această platformă este pentru tine:
                    </p>
                    <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '1.8' }}>
                        <li> <strong>Elevi de liceu (mate-info sau orice profil)</strong> – explicații pe înțelesul tău, perfect pentru BAC, teme și olimpiade</li>
                        <li> <strong>Adulți</strong> – învață programare de la zero ca să te poți reprofila în IT sau să-ți cauți un job</li>
                        <li> <strong>Pasionați de tehnologie</strong> – care vor să înțeleagă cum funcționează codul, ca hobby</li>
                        <li> <strong>Părinți</strong> – care vor să-și ajute copiii sau să înțeleagă materia</li>
                    </ul>
                    <p style={{ marginTop: '10px' }}>
                        Platforma te ghidează pas cu pas prin tot ce ai nevoie pentru a învăța programare C++ în ritmul tău.
                    </p>
                </div>
                <strong style={{ color: 'white', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}>
                    Învățarea programării C++ nu trebuie să fie un chin.
                </strong>

                <p style={{ color: 'white' }}>
                    Cu noi, devine clară, logică și chiar plăcută.<br /><br />
                    Platforma noastră este mai mult decât un site cu lecții – este un spațiu de învățare real, unde fiecare elev este susținut pas cu pas:
                </p>

                <ul style={{ color: 'white', listStyle: 'disc', paddingLeft: '20px' }}>
                    <li><strong>Lecții structurate și explicate simplu</strong> – potrivite pentru toate nivelurile</li>
                    <li><strong>Exerciții practice cu feedback personalizat</strong> – zilnic răspundem la întrebările tale</li>
                    <li><strong>Testare automată a soluțiilor</strong> – vezi instant dacă ai rezolvat corect problema</li>
                    <li><strong>Call 1 la 1 săptămânal</strong> – discutăm ce nu ai înțeles și cum poți progresa</li>
                    <li><strong>Consiliere psihologică</strong> – pentru echilibru și claritate în procesul de învățare</li>
                    <li><strong>Urmărirea progresului</strong> – vezi exact cât de mult ai evoluat</li>
                    <li><strong>Ajutor concret la teme sau lecții</strong> – explicăm tot ce pare complicat</li>
                    <li><strong>Comunitate de elevi ca tine</strong> – nu înveți singur, ci cu sprijin</li>
                </ul>

                <p style={{ color: 'white' }}>
                    <strong>Structurat 100% după programa școlară mate-info de liceu.</strong><br />
                    ✅ Tot conținutul urmează temele din manualele de informatică pentru Bacalaureat și olimpiadă:
                </p>

                <ol style={{ color: 'white', paddingLeft: '20px' }}>
                    <li>Algoritmi</li>
                    <li>Elementele de bază ale limbajului de programare C++</li>
                    <li>Subprograme predefinite</li>
                    <li>Tipuri structurate de date</li>
                    <li>Fișiere text</li>
                    <li>Algoritmi elementari</li>
                    <li>Subprograme definite de utilizator</li>
                    <li>Recursivitate</li>
                    <li>Metoda backtracking (iterativă sau recursivă)</li>
                    <li>Generarea elementelor combinatoriale</li>
                    <li>Grafuri</li>
                </ol>

                <h2 style={{ color: 'white', marginTop: '30px' }}>Pachete disponibile</h2>
                <div>
                    <div style={{ color: 'white', background: '#333', padding: '15px', borderRadius: '10px', marginTop: '10px' }}>
                        <h3>🔹Pachet Standard – 250 lei / lună</h3>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li>Acces complet la lecții și exerciții</li>
                            <li>Testare automată a soluțiilor</li>
                            <li>Urmărirea progresului</li>
                            <li>Fără suport personal – lucrezi în ritmul tău</li>
                        </ul>
                    </div>

                    <div style={{ color: 'white', background: '#444', padding: '15px', borderRadius: '10px', marginTop: '20px' }}>
                        <h3>⭐ Pachet Premium – 450 lei / lună</h3>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li>Tot ce include pachetul Standard</li>
                            <li>Feedback zilnic și răspuns la întrebări</li>
                            <li>1x call 1 la 1 pe săptămână cu mentor</li>
                            <li>1x sesiune de consiliere psihologică/săptămână</li>
                            <li>Sprijin pentru teme, BAC, olimpiade, concepte dificile</li>
                        </ul>
                    </div>

                    <div>
                        <ContactForm />
                    </div>
                </div>

                <p style={{ color: 'white', marginTop: '20px' }}>
                    Poți testa platforma gratuit. Alege pachetul potrivit și începe să înveți eficient, fără stres.
                </p>
            </div>
        </>
    )
}

export default Adv
