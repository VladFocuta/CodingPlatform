import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function Debugging() {


    const problemContent = (
        <>
            <h4>

                Debugging în C++
            </h4>


            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                Debugging-ul este procesul de identificare și remediere a erorilor dintr-un program. În C++, debugging-ul poate fi realizat folosind comentarii, afișări intermediare (cout) și instrumente specializate (precum debuggere integrate în IDE-uri, cum ar fi GDB sau Visual Studio Debugger).
                Iată un exemplu care explică debugging-ul folosind comentarii și afișări intermediare:<br /><br />
                Să presupunem că vrem să calculăm suma numerelor de la 1 la n, dar programul nostru dă rezultate greșite.
                <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int n = 5; // Numărul maxim
    int suma = 0; // Inițializarea variabilei pentru suma

    // Erori posibile:
    // 1. Ne-am grăbit să începem bucla de la 0 în loc de 1.
    for (int i = 0; i <= n; i++) {
        suma += i; // Adunăm i la suma
    }

    // Greșeală frecventă: mesajul final poate avea un context neclar
    cout << "Suma numerelor este " << suma << endl; 

    return 0;
}
`} />
            </div>

            <h4>Cum depistăm erorile cu debugging?</h4>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                <strong style={{ letterSpacing: '0.1rem' }}>1. Comentarii explicative pentru logică </strong><br />
                Adaugă comentarii care să descrie intenția fiecărei părți din cod. Astfel, poți compara ce face codul cu ce ar trebui să facă.<br />
                <strong style={{ letterSpacing: '0.1rem' }}>2. Afișează variabilele intermediare </strong><br />
                Folosește cout pentru a afișa valori intermediare. Acest lucru ajută la verificarea pașilor individuali.<br />
                <strong style={{ letterSpacing: '0.1rem' }}>3. Verifică ipoteze </strong><br />
                Adaugă mesaje pentru a verifica ipoteze înainte de execuția codului.
            </div>
            <h4>Rezolvare cu debugging și comentarii</h4>
            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int n = 5; // Numărul maxim pentru care calculăm suma
    int suma = 0; // Variabilă pentru a stoca suma finală

    // DEBUG: Afișăm valoarea lui 'n' pentru a verifica că este corect inițializată
    cout << "Valoarea lui n este: " << n << endl;

    // Corectăm bucla: începem de la 1, nu de la 0
    for (int i = 1; i <= n; i++) {
        // DEBUG: Afișăm valoarea curentă a lui 'i' și a sumei
        cout << "Valoarea curentă a lui i: " << i << ", Suma până acum: " << suma << endl;

        suma += i; // Adăugăm i la suma
    }

    // DEBUG: Afișăm suma finală înainte de afișarea rezultatului utilizatorului
    cout << "Suma calculată este: " << suma << endl;

    cout << "Suma numerelor de la 1 la " << n << " este " << suma << endl;

    return 0;
}
`} />

            <h4>Sfaturi pentru debugging eficient</h4>
            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                1.<strong style={{ letterSpacing: '0.1rem' }}>Folosește comentarii pentru a explica intenția fiecărei linii</strong> <br />
                Comentariile ajută să verifici dacă ceea ce ai scris corespunde cu ceea ce ai gândit.<br />

                2. <strong style={{ letterSpacing: '0.1rem' }}>Afișează valori intermediare folosind cout</strong><br />
                Valorile intermediare te ajută să localizezi unde apare eroarea.<br />

                3. <strong style={{ letterSpacing: '0.1rem' }}>Refolosește și înțelege instrumentele IDE-ului tău</strong><br />
                Un debugger poate seta puncte de oprire (breakpoints), urmări execuția linie cu linie și afișa valorile variabilelor în timp real.<br />

                4. <strong style={{ letterSpacing: '0.1rem' }}>Izolează bucăți de cod</strong><br />
                Testează secțiuni mici ale programului independent pentru a identifica erorile mai rapid.<br />

                Astfel, debugging-ul devine o abilitate esențială pentru a rezolva probleme și pentru a scrie cod mai robust.
            </div>
        </>
    )

    return (
        <ProblemPage
            problemName="Debugging"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Ghicirea unui numar"
            lecture={true}
        />
    )
}

export default Debugging