import { Helmet } from 'react-helmet';
function SimpleAddPage() {
    return (
        <>
            <Helmet>
                <title>Informatica - Notiuni de baza | CodersRO</title>
                <meta
                    name="description"
                    content="Notiuni de baza de informatica si C++: variabile, conditii, bucle, functii, vectori, matrici. Exemple simple si explicatii clare."
                />
            </Helmet>

            <main style={{ padding: "24px", maxWidth: "900px", margin: "0 auto", color: 'white' }}>
                <header style={{ marginBottom: "18px" }}>
                    <h1 style={{ marginTop: '55px' }}>Informatica si C++ - Notiuni de baza</h1>
                    <p style={{ marginTop: "10px", lineHeight: 1.6 }}>
                        Aceasta pagina prezinta concepte esentiale pentru incepatori in C++ si
                        algoritmica. Gasesti explicatii scurte si exemple simple, potrivite
                        pentru recapitulare sau pentru primele lectii.
                    </p>
                </header>

                <section style={{ marginBottom: "18px" }}>
                    <h2 style={{ marginBottom: "8px" }}>Ce inveti aici</h2>
                    <ul style={{ lineHeight: 1.7, marginTop: 0 }}>
                        <li>Variabile, tipuri de date, citire/afisare</li>
                        <li>Conditii: if / else</li>
                        <li>Bucle: for / while</li>
                        <li>Functii si parametri</li>
                        <li>Vectori si matrici</li>
                        <li>Algoritmi de baza: cautare, sortare (introducere)</li>
                    </ul>
                </section>

                <section style={{ marginBottom: "18px" }}>
                    <h2 style={{ marginBottom: "8px" }}>Exemple simple</h2>
                    <p style={{ marginTop: 0, lineHeight: 1.6 }}>
                        Exemple de exercitii tipice pentru incepatori:
                    </p>
                    <ul style={{ lineHeight: 1.7, marginTop: 0 }}>
                        <li>Suma elementelor dintr-un vector</li>
                        <li>Maximul dintr-o matrice</li>
                        <li>Numararea elementelor care respecta o conditie</li>
                        <li>Parcurgeri si operatii de baza pe siruri</li>
                    </ul>
                </section>

                <section style={{ marginBottom: "18px" }}>
                    <h2 style={{ marginBottom: "8px" }}>Pentru cine este potrivit</h2>
                    <ul style={{ lineHeight: 1.7, marginTop: 0 }}>
                        <li>Incepatori care vor sa inteleaga bazele programarii in C++</li>
                        <li>Elevi care invata informatica (liceu)</li>
                        <li>Persoane care vor sa isi consolideze logica algoritmica</li>
                    </ul>
                </section>

                <footer style={{ borderTop: "1px solid #ddd", paddingTop: "14px" }}>
                    <p style={{ margin: 0, lineHeight: 1.6 }}>
                        Daca vrei, poti folosi platforma pentru a exersa si a urmari progresul.
                        Aceasta pagina este dedicata continutului introductiv (bazele).
                    </p>
                </footer>
            </main>
        </>
    );
}

export default SimpleAddPage