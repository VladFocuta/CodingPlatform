import React from 'react'
import CodeStyle from '../../components/CodeStyle'
import ProblemPage from '../../components/functions/ProblemPage'

function RepAndDegree() {
    const problemContent = (
        <>
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
        </>
    )
    return (
        <ProblemPage
            problemName="Reprezentare si graduri"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/quiz/Reprezentarea unui graf" />
    )

}

export default RepAndDegree