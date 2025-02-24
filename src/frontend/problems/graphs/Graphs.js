import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function Graphs() {
    const problemContent = (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4 >
                    Un graf este o structură de date formată din:<br />
                    Noduri (vârfuri) – reprezentate de cercuri (ex: 1, 2, 3, etc.)<br />
                    Muchii (laturi) – conexiuni între noduri (ex: 1 → 2)

                </h4>
                <div style={{ minWidth: '200px' }}>
                    Graful cu 5 noduri și 6 muchii:<br />
                    (1-2), (1-4), (2-3), (4-5), (3-5), (2-5)
                    <h4>
                        (1) --- (2) --- (3)<br />
                        &nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br />
                        (4) --- (5)
                    </h4>
                </div>
            </div>

            <h4>Tipuri de grafuri:</h4>
            <strong>1. Neorientat</strong>- conexiunile sunt bidirecționale (ex: 1 ↔ 2)<br />
            <strong>2. Orientat </strong>- conexiunile sunt unidirecționale (ex: 1 → 2)<br /><br />

            <h4>Reprezentarea unui graf în C++</h4>
            Avem 3 moduri principale de a reprezenta un graf:<br />
            <strong>1. Matrice de adiacență</strong> - folosește o matrice n x n
            <strong>2. Listă de adiacență</strong> - folosește vectori de liste
            <strong>3. Listă de muchii</strong> - stochează perechi de noduri<br /><br />

            <h4>Reprezentare cu matrice de adiacență</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    Să construim un graf neorientat simplu:<br />
                    (1) --- (2) --- (3)<br />
                    &nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br />
                    (4) --- (5)<br />
                    5 noduri și 5 muchii<br />
                    Muchiile: (1-2), (1-4), (2-3), (4-5), (3-5)
                </div>
                <div>
                    - matricea de adiacență este simetrică față de diagonala principală<br />
                    - elementele de pe diagonala principală sunt 0<br />
                    - gradul unui vârf x este egal cu numărul de elemente 1 de pe linia (sau coloana) x<br />
                    suma tuturor elementelor din matricea de adiacență a unui graf neorientat este egală cu dublul numărului de muchii din graf
                </div>
                <div style={{ minWidth: '100px' }}>
                    0 1 0 1 0<br />
                    1 0 1 0 0<br />
                    0 1 0 0 1<br />
                    1 0 0 0 1<br />
                    0 0 1 1 0<br />
                </div>
            </div>
            <CodeStyle code={`#include <iostream>
using namespace std;

const int N = 100; // Numărul maxim de noduri
int graf[N][N];    // Matrice statică pentru graful neorientat

int main() {
    int noduri = 5, muchii = 5;
    int x[] = {1, 1, 2, 4, 3};
    int y[] = {2, 4, 3, 5, 5};

    // Construim graful
    for (int i = 0; i < muchii; i++) {
        graf[x[i]][y[i]] = 1;
        graf[y[i]][x[i]] = 1; // Graful este neorientat
    }

    // Afișăm graful (matrice de adiacență)
    for (int i = 1; i <= noduri; i++) {
        cout << "Nodul " << i << " este conectat la: ";
        for (int j = 1; j <= noduri; j++) {
            if (graf[i][j]) {
                cout << j << " ";
            }
        }
        cout << "\\n";
    }

    return 0;
}`} />

            <h4>Reprezentare cu lista de adiacență</h4>
            <CodeStyle code={`#include <iostream>
#include <vector>
using namespace std;

const int N = 100; // Numărul maxim de noduri
vector<int> graf[N]; // Lista de adiacență

int main() {
    int noduri = 5, muchii = 5;
    
    // Lista de muchii
    int x[] = {1, 1, 2, 4, 3};
    int y[] = {2, 4, 3, 5, 5};

    // Construim lista de adiacență
    for (int i = 0; i < muchii; i++) {
        graf[x[i]].push_back(y[i]);
        graf[y[i]].push_back(x[i]); // Graful este neorientat
    }

    // Afișăm lista de adiacență
    cout << "Lista de adiacență a grafului:\\n";
    for (int i = 1; i <= noduri; i++) {
        cout << "Nodul " << i << " este conectat la: ";
        for (int vecin : graf[i]) {
            cout << vecin << " ";
        }
        cout << "\\n";
    }

    return 0;
}`} />
            Este o metodă eficientă de a reprezenta un graf folosind:<br />
            Un vector de liste (sau vectori) unde:<br />
            Indicele reprezintă un nod.<br />
            Elementele din fiecare listă reprezintă vecinii acelui nod.<br /><br />

            <h4>Diferența între lista de adiacență și matricea de adiacență în grafuri</h4>
            Ambele metode sunt utilizate pentru a reprezenta un graf, dar au avantaje și dezavantaje în funcție de situație.<br />
            <strong>Matrice de adiacență:</strong> Rapidă pentru verificarea existenței unei muchii, dar consumă multă memorie pentru grafuri mari și rare.<br />
            <strong>Lista de adiacență:</strong>Eficientă pentru grafuri cu puține muchii, ocupă mai puțin spațiu și este mai rapidă pentru parcurgerea vecinilor.<br /><br />

            <h4> Gradul unui vârf într-un graf</h4>
            Gradul unui vârf (nod) reprezintă numărul de muchii (laturi) care sunt incidente (conectate) la acel vârf.<br /><br />
            <h4>Tipuri de graduri:</h4>
            <strong>1. Gradul unui vârf într-un graf neorientat</strong>
            Este numărul de noduri vecine conectate la acel vârf.<br />
            Notare: deg(v) – gradul nodului v.<br />
            (1) --- (2) --- (3)<br />
            &nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
            (4) --- (5)<br />
            deg(1) = 2 (conectat la 2 și 4)<br />
            deg(2) = 3 (conectat la 1, 3 și 5)<br />
            deg(3) = 1 (conectat la 2)<br />
            deg(4) = 2 (conectat la 1 și 5)<br />
            deg(5) = 2 (conectat la 2 și 4)<br /><br />
            <strong>Observații:</strong>
            - gradul maxim al unui vârf într-un graf cu n vârfuri este n-1.<br />
            - intr-un graf neorientat, suma gradelor tuturor vârfurilor este dublul numărului de muchii.<br />
            - suma gradelor tuturor vârfurilor este număr par.<br />
            - intr-un graf neorientat, numărul de vârfuri de grad impar este întotdeauna par.<br /><br />

            <h4>Graf parțial</h4>
            Un graf parțial al unui graf neorientat se obține păstrând toate vârfurile (nodurile) și eliminând unele dintre muchii (sau chiar niciuna).<br />
            Cu alte cuvinte, un graf parțial are aceleași noduri ca graful inițial, dar mai puține (sau aceleași) muchii.
            <strong>Exemplu:</strong>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    Considerăm graful neorientat G = (X, U), unde: <br />
                    Mulțimea vârfurilor (X): &#123;1, 2, 3, 4&#125;<br />
                    Mulțimea muchiilor (U): &#123;(1, 2), (2, 3), (3, 4), (4, 1), (1, 3)&#125;
                </div>
                <div style={{ minWidth: '100px' }}>
                    (1) — (2)<br />
                    | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\ &nbsp;&nbsp;|<br />
                    (4) — (3)
                </div>
            </div><br />

            <h4>Subgraf</h4>
            Un subgraf al unui graf orientat se obține:<br />
            Ștergând unele noduri (vârfuri) din graful inițial.<br />
            Păstrând doar arcele (muchiile orientate) care au ambele capete în noua mulțime de noduri.<br />
            <strong> Observații importante:</strong>
            X₁ ⊆ X – Nodurile din subgraf sunt o submulțime a nodurilor grafului inițial.<br />
            U₁ ⊆ U – Arcele din subgraf sunt acele arce din graful original care leagă noduri din X₁.<br />
            Nu poți șterge toate nodurile – altfel n-ar mai exista un graf.<br /><br />
            <div style={{ display: ' flex', justifyContent: 'space-between' }}>
                <div >
                    <strong>Exemplu</strong><br />
                    <div style={{ borderBottom: '1px dotted white' }}>
                        Graful orientat (G):
                    </div>
                    Noduri (X): &#123;A, B, C, D, E&#125;<br />
                    Arce (U): &#123;(A → B), (B → C), (C → D), (A → E)&#125;<br />
                </div>
                <div style={{ minWidth: '150px' }}>
                    A → B → C → D<br />
                    ↓<br />
                    E
                </div>

            </div><br />

            <div style={{ display: ' flex', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ borderBottom: '1px dotted white' }}>
                        Subgraful grafului G:
                    </div>
                    Alegem X₁ = &#123;A, B, C&#125; (am eliminat D și E).<br />
                    Păstrăm doar arcele care au ambele capete în X₁:<br />
                    U1 = &#123;(A→B),(B→C)&#125;<br />
                </div>
                <div>
                    <div style={{ borderBottom: '1px dotted white' }}>
                        Reprezentarea subgrafului:<br />
                    </div>
                    A → B → C<br />
                    Am eliminat:<br />
                    Nodurile D și E.<br />
                    Arcele (C → D), (A → E), deoarece cel puțin o extremitate nu este în X₁.<br />
                </div>
            </div>

            <div style={{ display: ' flex', justifyContent: 'space-around', border: '1px solid white', padding: '5px' }}>
                <div style={{ borderRight: '1px dotted white', padding: '3px' }}>
                    <div style={{ borderBottom: '1px dotted white' }}>
                        Caracteristică
                    </div>
                    Tipul grafului<br />
                    Ce se elimină?<br />
                    Păstrează vârfurile?<br />
                    Exemplu grafic<br />
                </div>
                <div style={{ borderRight: '1px dotted white', borderLeft: '1px dotted white', padding: '3px' }}>
                    <div style={{ borderBottom: '1px dotted white' }}>
                        Graf Parțial
                    </div>
                    Graf neorientat<br />
                    Doar muchii<br />
                    Toate vârfurile<br />
                    Eliminăm laturi<br />
                </div>
                <div style={{ borderLeft: '1px dotted white', padding: '3px' }}>
                    <div style={{ borderBottom: '1px dotted white' }}>
                        Subgraf
                    </div>
                    Graf orientat<br />
                    Noduri și arce<br />
                    O submulțime de vârfuri<br />
                    Eliminăm noduri + arcele lor<br />
                </div>
            </div>
            Rezumat: Un subgraf se obține dintr-un graf orientat prin:<br />
            Alegerea unui submulțimi de noduri.<br />
            Păstrarea arcelor care conectează nodurile selectate.<br /><br />

            <h4>Graf complementar</h4>
            Graful complementar al unui graf neorientat se obține astfel:<br />
            1. Păstrăm aceleași noduri.<br />
            2. Adăugăm doar muchiile care NU existau în graful inițial.<br />
            3. Dacă două noduri erau conectate în graful original, atunci în complement nu vor fi conectate.<br />
            <strong>Exemplu concret</strong>
            <div style={{ borderBottom: '1px dotted white', maxWidth: '200px' }}>
                Graful inițial G:
            </div>
            Noduri: &#123;1, 2, 3, 4&#125;<br />
            Muchii: &#123;(1,2), (2,3), (3,4)&#125;<br />
            1 — 2 — 3 — 4<br /><br />
            <div style={{ borderBottom: '1px dotted white', maxWidth: '200px' }}>
                Graful complementar G1:<br />
            </div>
            Păstrăm aceleași noduri: &#123;1, 2, 3, 4&#125;<br />
            Conectăm doar nodurile care NU aveau muchii înainte.<br />
            Muchii în G1: &#123;(1,3), (1,4), (2,4)&#125;<br />
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2<br />
            |&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
            |&nbsp;&nbsp;&nbsp;&nbsp;\ &nbsp;&nbsp;&nbsp;|<br />
            | &nbsp; &nbsp; &nbsp;\ &nbsp;|<br />
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4<br />
            Graful complementar se obține inversând conexiunile:<br />
            Dacă două noduri erau legate, acum NU mai sunt.<br />
            Dacă două noduri NU erau legate, acum vor fi legate.<br /><br />
            <strong>Important</strong>
            Un graf neorientat poate avea mai multe grafuri parțiale și subgrafuri, dar doar un singur graf complementar.<br />
            Dacă avem un graf cu 3 muchii, putem alege să păstrăm sau să eliminăm fiecare muchie, rezultând 2³ = 8 grafuri parțiale.<br />
            <div>
                Dacă avem un graf cu 4 vârfuri, putem avea 2<sup>4</sup> - 1 = 15 subgrafuri.
            </div>
            Dacă avem un graf cu 4 noduri și 3 muchii, atunci graful complementar va avea toate muchiile care lipsesc. Nu putem avea altă variantă.<br /><br />

            <h4>Graf nul</h4>
            Un graf neorientat se numește graf nul dacă mulțimea muchiilor este vidă.<br />
            Într-un graf nul toate vârfurile sunt izolate.<br /><br />

            <h4>Graf complet</h4>
            Un graf complet este un graf neorientat în care orice două vârfuri sunt conectate printr-o muchie.<br />
            <strong>Exemplu de graf complet cu 4 vârfuri (K₄):</strong>
            1 —— &nbsp;2<br />
            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
            3 —— &nbsp;4<br />
            Fiecare nod este conectat la toate celelalte.<br /><br />
            <strong>Câte muchii are un graf complet cu n vârfuri?</strong>
            Un graf complet cu n vârfuri (Kₙ) are n(n-1)/2 muchii.
            <strong>Exemplu pentru K₅ (5 vârfuri):</strong>
            Vârfuri: &#123;1, 2, 3, 4, 5&#125;<br />
            Muchii: &#123;(1,2), (1,3), (1,4), (1,5), (2,3), (2,4), (2,5), (3,4), (3,5), (4,5)&#125;<br />
            Total muchii = 5(5-1)/2 = 10<br />
            Pe scurt: Într-un graf complet fiecare nod este conectat la toate celelalte! <br /><br />

            <h4>Graf regulat</h4>
            Un graf în care toate nodurile au acelaşi grad se numește graf regulat.<br /><br />

            <h4>Graf bipartit</h4>
            Un graf bipartit este un graf în care putem împărți nodurile în două grupuri (A și B) astfel încât orice muchie leagă un nod din A de un nod din B (nu există muchii în interiorul aceluiași grup).<br />
            <strong>Exemplu</strong>
            Avem două grupuri:<br />
            A = &#123;1, 3, 5&#125;<br />
            B = &#123;2, 4, 6&#125;<br />
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;(A)<br />
            | \ &nbsp;&nbsp;&nbsp;&nbsp;/ \&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;|<br />
            | &nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
            | /&nbsp;&nbsp;&nbsp;\ &nbsp; /&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;|<br />
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;(B)<br />
            Observație: Nu există muchii între nodurile din același grup!<br />
            Într-un graf bipartit, nodurile se împart în două grupuri, iar muchiile apar doar între aceste grupuri!<br /><br />

            <h4>Conexitate</h4>
            <h5 style={{ borderBottom: '1px dotted white', maxWidth: '200px' }}>Lanț</h5>
            Un lanț este o succesiune de vârfuri unde fiecare două vârfuri consecutive sunt conectate printr-o muchie.<br />
            Avem următorul graf:<br />
            1 —— 2 —— 3<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4<br />
            1. Lanț L = [1, 2, 3]<br />
            Extremități: 1 și 3<br />
            Lungimea: 2 (număr muchii)<br />
            2. Lanț L = [1, 2, 4]<br />
            Extremități: 1 și 4<br />
            Lungimea: 2<br /><br />

            <h5>Tipuri de lanțuri</h5>
            <strong>Lanț elementar - conține doar vârfuri distincte</strong>
            Exemplu: [1, 2, 3]<br />
            Nu este elementar: [1, 2, 1] (repetă nodul 1)<br />
            <strong>Lanț simplu – conține doar muchii distincte</strong>
            Exemplu: [1, 2, 3]<br />
            Lanț compus: [1, 2, 3, 2, 4] (repetă muchia 2 → 3)<br /><br />
            <h5>Concluzie:</h5>
            Un lanț leagă vârfuri consecutive prin muchii.<br />
            Elementar = fără vârfuri repetate.<br />
            Simplu = fără muchii repetate.<br />
            Compus = muchii repetate.<br /><br />

            <h5 style={{ borderBottom: '1px dotted white', maxWidth: '200px' }}>Ciclu</h5>
            Un ciclu este un lanț simplu care începe și se termină în același nod.<br />
            1 —— 2<br />
            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
            4 —— 3<br />
            <strong>Ciclu elementar (toate nodurile distincte, mai puțin primul și ultimul):</strong>
            C = [1, 2, 3, 4, 1]<br />
            Lungime: 4 (număr muchii)<br />
            Este un ciclu par (4 este număr par)<br />
            C = [2, 3, 4, 2]<br />
            Lungime: 3<br />
            Este un ciclu impar (3 este număr impar)<br />
            <strong>Un graf aciclic este un graf care nu conține cicluri.</strong><br />
            <h5>Concluzie:</h5>
            Ciclu = lanț care revine la nodul de start.<br />
            Elementar = fără noduri repetate (exceptând primul și ultimul).<br />
            Par/Impar = în funcție de numărul de muchii.<br />
            Graf aciclic = fără cicluri.<br /><br />

            <h4>Graf conex</h4>
            Un graf neorientat este conex dacă există un lanț între orice două noduri. Cu alte cuvinte, toate nodurile sunt conectate direct sau indirect.<br />
            Graful de mai jos este conex, deoarece putem ajunge de la orice nod la orice alt nod:<br />
            1 —— 2 —— 3<br />
            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
            4 —— 5<br />
            Acest graf nu este conex, deoarece nodul 6 este izolat:<br />
            1 —— 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6<br />
            |<br />
            3 —— 4<br /><br />
            <h5>Concluzie:</h5>
            Un graf cu un singur nod este conex (nu există alt nod de care să fie deconectat).<br />
            Un graf conex nu trebuie să fie complet (adică nu toate nodurile trebuie să fie direct legate, doar să existe un lanț între ele).<br />
            Dacă există noduri izolate, graful nu este conex.<br />
            Un graf este conex dacă putem ajunge de la orice nod la oricare alt nod.<br /><br />

            <h4>Componente conexe</h4>
            O componentă conexă este o parte a unui graf care este conexă (toate nodurile sale sunt legate între ele) și maximală (nu putem adăuga alt nod fără să stricăm conexitatea).<br />
            1 —— 2&nbsp;&nbsp;&nbsp;&nbsp;5 —— 6<br />
            |<br />
            3 —— 4<br />
            Componentele conexe sunt:<br />
            &#123;1, 2, 3, 4&#125; → Toate nodurile sunt conectate între ele.<br />
            &#123;5, 6&#125; → Sunt conectate între ele, dar nu cu &#123;1, 2, 3, 4&#125;.
            <h5>Concluzie:</h5>
            Dacă un graf este conex, el are o singură componentă conexă.<br />
            Dacă un graf nu este conex, el are mai multe componente conexe.<br />
            Un nod izolat este și el o componentă conexă.<br />
            O componentă conexă este o „insulă” de noduri conectate între ele.<br />
            <h4>Graf biconex</h4>
            Un graf biconex este un graf conex care rămâne conex chiar dacă eliminăm orice nod.<br />
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dotted white' }}>
                <div style={{ minWidth: '130px' }}>
                    1 —— 2 —— 3<br />
                    |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                    4 —— 5 —— 6<br />
                </div>
                <div style={{ alignSelf: 'center' }}>
                    Dacă ștergem orice nod, restul nodurilor rămân conectate!<br />
                </div>
            </div>
            <div style={{ borderBottom: '1px dotted white' }}>
                Acest graf NU este biconex, deoarece eliminarea nodului 2 îl deconectează:<br />
                1 —— 2 —— 3<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4<br />
                Dacă eliminăm nodul 2, nodurile 1 și 3 nu mai sunt conectate!
            </div>
            Un graf complet este întotdeauna biconex.<br />
            Orice ciclu este biconex (nu putem deconecta graful prin eliminarea unui singur nod).<br />
            Un graf care conține un punct de articulație (nod a cărui eliminare rupe conexitatea) NU este biconex.<br />
            Un graf biconex nu poate fi „spart” prin eliminarea unui singur nod. <br /><br />

            <h4>Arbore</h4>
            Un arbore este un graf conex și fără cicluri. Cu alte cuvinte:<br />
            Conex → Orice două noduri sunt legate printr-un lanț.<br />
            Aciclic → Nu conține cicluri (nu există drumuri închise).<br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ borderTop: '1px dotted white', borderRight: '1px dotted white', borderBottom: '1px dotted white', padding: '5px' }}>
                    Acest graf este un arbore:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ &nbsp;&nbsp;\<br />
                    &nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3<br />
                    &nbsp;&nbsp;/&nbsp; \<br />
                    4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br />
                    Este conex (putem ajunge de la orice nod la oricare alt nod).<br />
                    Nu are cicluri (nu există drumuri închise).<br />
                </div>
                <div style={{ borderTop: '1px dotted white', borderLeft: '1px dotted white', borderBottom: '1px dotted white', padding: '5px' }}>
                    Acest graf NU este arbore, deoarece conține un ciclu:<br />
                    1 —— 2<br />
                    |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                    4 —— 3<br />
                    Este conex, dar are ciclul 1 → 2 → 3 → 4 → 1.
                </div>
            </div>
            Un arbore cu N noduri are exact N-1 muchii.<br />
            Dacă adăugăm o muchie la un arbore, obținem un ciclu.<br />
            Dacă eliminăm o muchie dintr-un arbore, graful devine neconex.<br />
            Un arbore este un graf „fără bucle”, în care toate nodurile sunt conectate.<br /><br />

            <h4>Graf hamiltonian</h4>
            Un graf hamiltonian este un graf care conține un ciclu hamiltonian.<br />
            Ciclu hamiltonian = Un ciclu care trece prin toate nodurile o singură dată (cu excepția primului și ultimului, care sunt identice).<br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ borderTop: '1px dotted white', borderRight: '1px dotted white', borderBottom: '1px dotted white', padding: '5px' }}>
                    Acest graf este hamiltonian deoarece are un ciclu hamiltonian:<br />
                    1 —— 2<br />
                    |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                    4 —— 3<br />
                    Ciclu hamiltonian posibil: 1 → 2 → 3 → 4 → 1<br />

                </div>
                <div style={{ borderTop: '1px dotted white', borderLeft: '1px dotted white', borderBottom: '1px dotted white', padding: '5px', minWidth:'150px' }}>
                    Acest graf NU este hamiltonian:<br />
                    1 —— 2 —— 3<br />
                    |<br />
                    4<br />
                    Nu există niciun ciclu care să viziteze toate nodurile o singură dată!
                </div>
            </div>
            Un graf hamiltonian are un drum închis care trece prin toate nodurile exact o dată.<br />
            Gradul unui vârf d(x) este numărul de muchii incident cu acel vârf.<br />
            Dacă pentru orice nod x, gradul său este cel puțin n / 2, atunci graful conține un ciclu hamiltonian.<br /><br />

            <h4>Graf eulerian</h4>
            Se numește graf eulerian un graf care conține un ciclu eulerian. Se numește ciclu eulerian un ciclu care conține toate muchiile grafului.<br />
            Un graf neorientat este eulerian dacă și numai dacă:<br />
            1. Este conex (nu are noduri izolate).<br />
            2. Toate vârfurile au grad par.<br />
              1 —— ——  3<br />
              | \ &nbsp;\ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/  <br />
              |&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ <br />
              |  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\  &nbsp;&nbsp;&nbsp;2<br />
              4 —— 5<br />
              Un graf eulerian are un drum închis care trece prin toate muchiile exact o dată! 
        </>

    )


    return (
        <ProblemPage
            problemName="Grafuri"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Vector de structuri" />
    )
}

export default Graphs