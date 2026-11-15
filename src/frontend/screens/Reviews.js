import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { UserAuth } from '../../backend/firebaseConfig/authProvider';
import { UserProgressData } from '../components/contexts/userProgress';


function Reviews() {
    const { loggedIn } = UserAuth();
    const navigate = useNavigate();
    const { reviewed, updateReviewed, loading } = UserProgressData() || {};
    const [status, setStatus] = useState('');
    const sections = [
        {

            text: (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <strong className="card-title">⭐️⭐️⭐️⭐️⭐️</strong>
                    <strong className="card-title">Enescu Andrei</strong>

                    <strong className="card-title">Clasa a 10-a</strong>
                    <strong>ℹ️ Profil: Stiinte ale naturii</strong>
                    <strong>ℹ️ Nivel inițial: scazut spre foarte scazut</strong>
                    <strong>ℹ️ Nivel actual: printre cei mai buni din clasa</strong>
                    <strong>ℹ️ Durata meditațiilor: doua luni</strong>
                    <br />
                    <strong style={{ borderBottom: '1px solid #00bcd4' }}>💭 Părerea personală:</strong><strong > Foarte buna, platforma este foarte bine facuta si usor de navigat.</strong><br />
                    <p>15/11/2026 20:09</p>
                </div>
            )
        },
        {

            text: (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <strong className="card-title">⭐️⭐️⭐️⭐️⭐️</strong>
                    <strong className="card-title">Adela</strong>

                    <strong className="card-title">Clasa a 10-a</strong>
                    <strong>ℹ️ Profil: Mate-info</strong>
                    <strong>ℹ️ Nivel inițial: 7</strong>
                    <strong>ℹ️ Nivel actual: 9</strong>
                    <strong>ℹ️ Durata meditațiilor: un an</strong>
                    <br />
                    <strong style={{ borderBottom: '1px solid #00bcd4' }}>💭 Părerea personală:</strong><strong > Un profesor excelent, foarte bine pregătit și organizat. Ședințele m-au ajutat enorm să îmi îmbunătățesc logica de programare și să înțeleg rezolvarea problemelor pas cu pas. Progres vizibil încă de la primele ședințe!</strong><br />
                    <p>13/11/2026 15:52</p>
                </div>
            )
        },
        {

            text: (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <strong className="card-title">⭐️⭐️⭐️⭐️⭐️</strong>
                    <strong className="card-title">Alexandru Matei</strong>

                    <strong className="card-title">Clasa a 9-a</strong>
                    <strong>ℹ️ Profil: Mate-info</strong>
                    <strong>ℹ️ Nivel inițial: 5</strong>
                    <strong>ℹ️ Nivel actual: 8</strong>
                    <strong>ℹ️ Durata meditațiilor: 2 luni</strong>
                    <br />
                    <strong style={{ borderBottom: '1px solid #00bcd4' }}>💭 Părerea personală:</strong><strong > In aproximativ 2 luni am reusit sa recuperez materia din urma cu ajutorul meditatiilor.
                        Pot spune ca individual nu am lucrat foarte mult si probabil ca daca as fi facut-o, ar fi durat si mai putin.
                        Apreciez calmitatea si claritatea cu care imi sunt explicate notiunile pe care nu le stiu.</strong><br />
                    <p>09/11/2026 12:16</p>
                </div>
            )
        },
        {

            text: (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <strong className="card-title">⭐️⭐️⭐️⭐️⭐️</strong>
                    <strong className="card-title">Maria Valeriu</strong>

                    <strong className="card-title">Clasa a 10-a</strong>
                    <strong>ℹ️ Profil: Științele naturii</strong>
                    <strong>ℹ️ Nivel inițial: 5</strong>
                    <strong>ℹ️ Nivel actual: 10</strong>
                    <strong>ℹ️ Durata meditațiilor: 1 an si o luna</strong>
                    <br />
                    <strong style={{ borderBottom: '1px solid #00bcd4' }}>💭 Părerea personală:</strong> <strong >Pe platforma aceasta am reusit sa invat sa scriu cod deoarece la clasa doamna profesoara nu are timp sa se ocupe de toti elevii,prefera sa lucreze cu cei care prind informatia mult mai repede. Din fericire,aici am gasit multa rabdare si explicatii mult mai clare. Recomand cu incredere!</strong>
                    <br /><p>05/11/2026 18:22</p>
                </div>
            )
        },
        {

            text: (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <strong className="card-title">⭐️⭐️⭐️⭐️⭐️</strong>
                    <strong className="card-title">Marian Grecu</strong>

                    <strong className="card-title">Clasa a 9-a</strong>
                    <strong>ℹ️ Profil: Mate-info</strong>
                    <strong>ℹ️ Nivel inițial: 6</strong>
                    <strong>ℹ️ Nivel actual: 9</strong>
                    <strong>ℹ️ Durata meditațiilor: 4 luni</strong>
                    <br />
                    <strong >💭 Parerea personală:<br /> Chiar daca la inceput informatica mi s-a parut o materie foarte grea,am reusit sa inteleg foarte bine logica din spatele codului si asta mi-a imbunatatit notele. Problemele de pe platforma sunt foarte asemanatoare cu cele de la clasa si faptul ca pot primi rezultatul pe loc la fiecare problema, este un mare avantaj. Va multumesc pentru sprijinul acordat!</strong>
                    <br /><p>02/11/2026 10:43</p>
                </div>
            )
        },
        {

            text: (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <strong className="card-title">⭐️⭐️⭐️⭐️⭐️</strong>
                    <strong className="card-title">Andreea Lupu</strong>

                    <strong className="card-title">Clasa a 12-a</strong>
                    <strong>ℹ️ Profil: Mate-info</strong>
                    <strong>ℹ️ Nivel inițial: 7</strong>
                    <strong>ℹ️ Nivel actual: 10</strong>
                    <strong>ℹ️ Durata meditațiilor: 10 luni</strong>
                    <br />
                    <strong >💭 Parerea personală:<br /> Am folosit platforma pentru a ma pregati pentru bac. M-a ajutat foarte mult ca exista optiunea
                        de a lucra problemele pe care le facem la clasa dar si probleme care se regasesc la bac. La orele de meditatii am consolidat informatia de care nu eram sigura, si in afara meditatiilor am reusit sa rezolv singura problemele de la bac.
                        Va multumesc mult!</strong>
                    <br /><p>31/10/2026 15:03</p>
                </div>
            )
        },

    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const response = await fetch('https://formspree.io/f/xdkzvozp', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        });

        if (response.ok) {
            await updateReviewed(true);
            navigate("/review-succes");

        } else {
            setStatus('A apărut o eroare. Te rugăm să încerci din nou.');
        }
    };
    if (loading) {
        return (
            <div className="adv-page">
                <div className="main-container">
                    <p>Se încarcă...</p>
                </div>
            </div>
        );
    }
    return (
        <div className="adv-page" style={{ marginTop: '0px' }}>
            <Helmet>
                <title>Meditatii Informatica Online | Pregatire BAC si Admitere</title>
                <meta name="description" content="Meditatii informatica online 1 la 1, pregatire BAC informatica, cursuri programare si probleme rezolvate. Profesor dedicat, platforma interactiva. CodersRO." />
            </Helmet>

            {loggedIn && reviewed === false ? (

                <section className="adv-cta glass" style={{ marginTop: '60px' }}>
                    <h1 className="page-title">Părerea ta contează</h1>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <h3>CODers</h3>
                        <p>Apreciem părerea ta sinceră</p>

                        <div className="form-group">
                            <label>Nume</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Numele tău"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Clasa</label>
                            <input
                                type="text"
                                name="clasa"
                                placeholder="În ce clasă esti"
                                required
                            />
                        </div>


                        <div className="form-group">
                            <label>Profil <span title='Ex: Mate-info'>ℹ️</span></label>

                            <input
                                type="text"
                                name="profil"
                                placeholder="Profilul tău"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Nivel inițial <span title='Nota cu care ai început (1 - 10)'>ℹ️</span></label>
                            <input
                                type="text"
                                name="nivelinitial"
                                placeholder="Nivelul cand ai început meditațiile"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Nivel actual <span title='Nota actuala (1 - 10)'>ℹ️</span></label>
                            <input
                                type="text"
                                name="nivelactual"
                                placeholder="Nivelul la care ai ajuns"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Durata meditațiilor <span title='Ex: 2 luni'>ℹ️</span></label>
                            <input
                                type="text"
                                name="durata"
                                placeholder="De cat timp faci meditații"
                                required
                            />
                        </div>


                        <div className="form-group">
                            <label>Email <span title='Email-ul nu va fi afișat'>ℹ️</span></label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email@exemplu.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Mesaj</label>
                            <textarea
                                name="message"
                                placeholder="Experiența de pe platforma..."
                                rows="4"
                                required
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            Trimite recenzia
                        </button>

                        {status && (
                            <p className="text-center text-sm text-red-500 mt-2">
                                {status}
                            </p>
                        )}
                    </form>
                </section>

            ) : (

                <div className="main-container">
                    <h1 className="page-title" style={{
                        background: "linear-gradient(to right, #dc2626 0%, #dc2626 35%, #00ff00 75%, #008000 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",

                    }}>
                        Rezultatele utilizatorilor noștri
                    </h1>
                    <div className='page-wrapper'>
                        <div className="glass-grid" >
                            {sections.map((sec, index) => (
                                <div className="glass-card" key={index}>

                                    <div className="card-text">{sec.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </div>

    )
}

export default Reviews