import React, { useEffect } from 'react';
import ContactForm from './ContactForm';


function Adv() {
    useEffect(() => {
        if (window.gtag) {
            window.gtag('event', 'page_view', {
                page_path: window.location.pathname
            });
        }
    }, []);

    return (
        <div className="adv-page">

            {/* HERO */}
            <section className="adv-hero">
                <h1>Meditații Informatică Online</h1>
                <p>Învățarea programării C++ nu trebuie să fie un chin.</p>
            </section>

            {/* CUI SE ADRESEAZĂ */}
            <section className="adv-section glass">
                <h2>Cui se adresează platforma?</h2>
                <ul className="adv-list">
                    <li><strong>Elevi de liceu</strong> – BAC, teme, olimpiade</li>
                    <li><strong>Adulți</strong> – reconversie profesională</li>
                    <li><strong>Pasionați de tehnologie</strong></li>
                    <li><strong>Părinți</strong> – sprijin pentru copii</li>
                </ul>
            </section>

            {/* CE OFERIM */}
            <section className="adv-section" style={{marginBottom:'10px'}}>
                <h2>Ce oferim?</h2>
                <div className="adv-features">
                    <div className="glass">Lecții structurate și explicate simplu</div>
                    <div className="glass">Exerciții cu feedback personalizat</div>
                    <div className="glass">Testare automată a soluțiilor</div>
                    <div className="glass">Call 1 la 1 săptămânal</div>
                    <div className="glass">Urmărirea progresului</div>
                    <div className="glass">Consiliere psihologică</div>
                </div>
            </section>

            {/* STRUCTURĂ */}
            <section className="adv-section glass">
                <h2>Structurat după programa BAC</h2>
                <ol className="adv-ordered">
                    <li>Algoritmi</li>
                    <li>Elemente de bază C++</li>
                    <li>Subprograme</li>
                    <li>Vectori și matrici</li>
                    <li>Fișiere text</li>
                    <li>Recursivitate</li>
                    <li>Backtracking</li>
                    <li>Grafuri</li>
                </ol>
            </section>

            {/* PACHETE */}
            <section className="adv-section">
                <h2>Pachete disponibile</h2>

                <div className="pricing-grid">
                    <div className="glass price-card">
                        <h3>Meditații Clasice</h3>
                        <strong>150 lei / 2 ore</strong>
                        <p>Sesiuni 1 la 1, personalizate</p>
                    </div>

                    <div className="glass price-card">
                        <h3>Standard</h3>
                        <strong>250 lei / lună</strong>
                        <p>Acces complet la platformă</p>
                    </div>

                    <div className="glass price-card premium">
                        <h3>Premium ⭐</h3>
                        <strong>450 lei / lună</strong>
                        <p>Feedback zilnic + call 1 la 1</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="adv-cta glass">
                <h2>Testează platforma gratuit</h2>
                <p>Fără contracte. Fără stres.</p>
                <ContactForm />
            </section>

        </div>
    );
}

export default Adv;
