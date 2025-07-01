import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function TextFile() {
    const problemHeader = (
        <h4 style={{ color: 'white', fontSize: '1.2rem' }}>
            În C++, putem lucra cu fișiere text folosind biblioteca &lt;fstream&gt; .Aceasta ne permite să creăm, scriem și citim fișiere. Vom explica pe rând cum să folosim fișierele text.
        </h4>
    )

    const problemContent = (
        <>

            <strong style={{ letterSpacing: '0.1rem' }}>1. Deschiderea unui fișier</strong>
            Pentru a lucra cu fișiere, trebuie să includem biblioteca &lt;fstream&gt;și să folosim 3 tipuri de obiecte:<br />
            ofstream → pentru scriere (output)<br />
            ifstream → pentru citire (input)<br />
            fstream → pentru citire și scriere<br />
            <CodeStyle code={`#include <iostream>
#include <fstream>  // Biblioteca pentru lucrul cu fișiere

using namespace std;

int main() {
    ofstream fisierScriere("nume_fisier.txt"); // Deschidem fișierul pentru scriere
    if (!fisierScriere) {
        cout << "Eroare la deschiderea fisierului!";
        return 1;
    }
    fisierScriere << "Salut! Acesta este un fisier text.\\n"; // Scriem în fișier
    fisierScriere.close(); // Închidem fișierul
    return 0;
}`} />
            ofstream fisierScriere("nume_fisier.txt"); – Deschide sau creează un fișier pentru scriere. Dacă fișierul există deja, conținutul său se șterge.<br />
            if (!fisierScriere) – Verifică dacă fișierul s-a deschis corect.<br />
            fisierScriere &lt;&lt; "Text" – Scrie în fișier.<br />
            fisierScriere.close(); – Închide fișierul după utilizare.<br /><br />

            <strong style={{ letterSpacing: '0.1rem' }}>2. Citirea dintr-un fișier text</strong> După ce am creat fișierul, putem citi conținutul său folosind ifstream.<br />
            Citirea unui fișier linie cu linie:<br />
            <CodeStyle code={`#include <iostream>
#include <fstream>

using namespace std;

int main() {
    ifstream fisierCitire("nume_fisier.txt"); // Deschidem fișierul pentru citire
    if (!fisierCitire) {
        cout << "Eroare la deschiderea fisierului!";
        return 1;
    }

    string linie;
    while (getline(fisierCitire, linie)) { // Citim linie cu linie
        cout << linie << endl; // Afișăm conținutul citit
    }

    fisierCitire.close(); // Închidem fișierul
    return 0;
}`} />
            ifstream fisierCitire("nume_fisier.txt"); – Deschide fișierul pentru citire.<br />
            while (getline(fisierCitire, linie)) – Citește linie cu linie până la sfârșitul fișierului.<br />
            cout &lt;&lt; linie; – Afișează conținutul fișierului.<br />
            fisierCitire.close(); – Închide fișierul după citire.<br /><br />

            <strong style={{ letterSpacing: '0.1rem' }}>3. Adăugarea de text la un fișier existent</strong> Dacă vrem să adăugăm text în fișier fără să ștergem ce era înainte, folosim modul ios::app.<br />
            <CodeStyle code={`#include <iostream>
#include <fstream>

using namespace std;

int main() {
    ofstream fisierScriere("nume_fisier.txt", ios::app); // Deschidem în modul append
    if (!fisierScriere) {
        cout << "Eroare la deschiderea fisierului!";
        return 1;
    }

    fisierScriere << "Aceasta este o noua linie adaugata!\\n"; // Adăugăm text
    fisierScriere.close();

    return 0;
}`} />
            ios::app → Deschide fișierul în modul "append" (adăugare).<br />
            Nu șterge conținutul existent, ci doar adaugă la sfârșit.<br /><br />

            <strong style={{ letterSpacing: '0.1rem' }}>4. Scriere și citire folosind fstream</strong> Dacă vrem atât să scriem, cât și să citim dintr-un fișier, folosim fstream.<br />
            <CodeStyle code={`#include <iostream>
#include <fstream>

using namespace std;

int main() {
    fstream fisier("nume_fisier.txt", ios::in | ios::out | ios::app);
    if (!fisier) {
        cout << "Eroare la deschiderea fisierului!";
        return 1;
    }

    fisier << "Linii noi de text adaugate!\\n"; // Scriem în fișier

    fisier.seekg(0); // Mutăm cursorul la început pentru citire

    string linie;
    while (getline(fisier, linie)) { // Citim fișierul
        cout << linie << endl;
    }

    fisier.close();
    return 0;
}`} />
            ios::in | ios::out | ios::app → Permite citirea, scrierea și adăugarea în fișier.<br />
            seekg(0); → Mute cursorul la început, astfel încât să putem citi din fișier după ce am scris.<br /><br />

            <strong style={{ letterSpacing: '0.1rem' }}>5. Ștergerea conținutului unui fișier</strong> Dacă vrem să ștergem tot conținutul unui fișier, îl deschidem fără ios::app.<br />
            <CodeStyle code={`#include <iostream>
#include <fstream>

using namespace std;

int main() {
    ofstream fisierGol("nume_fisier.txt", ios::trunc); // Șterge tot conținutul
    fisierGol.close();
    cout << "Continutul fisierului a fost sters!\\n";
    return 0;
}`} />
            ios::trunc → Șterge tot conținutul fișierului la deschidere.<br /><br />

            <strong style={{ letterSpacing: '0.1rem' }}>6. Probleme comune și soluții</strong>
            Fișierul nu se deschide?<br />
            Verifică dacă există și ai permisiunea de a-l modifica.<br />
            Folosește if (!fisier) pentru a detecta erori.<br /><br />

            Fișierul nu se actualizează?<br />
            Nu uita să apelezi .close() la sfârșit.<br />
            Dacă vrei să adaugi conținut, folosește ios::app.<br /><br />

            Liniile din fișier sunt lipite?<br />
            Folosește endl sau "\n" când scrii în fișier.<br />

        </>

    )


    return (
        <ProblemPage
            problemName="Fisiere text"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/Main" />
    )
}

export default TextFile