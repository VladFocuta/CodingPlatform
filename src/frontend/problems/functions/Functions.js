import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'


function Functions() {
    const problemHeader = (
        <h4 style={{ color: 'white', fontSize: '1.2rem' }}>
            O funcție este un bloc de cod care poate fi apelat oriunde în program.<br /><br />
            Avantaje:<br />
            Evită repetarea codului<br />
            Îmbunătățește organizarea și claritatea<br />
            Permite divizarea problemelor în bucăți mai mici<br />

        </h4>
    )

    const problemContent = (
        <>
            <h4 >
                Declarație și Definiție
            </h4>
            O functie are: <br />
            a) Tipul returnat (int, void, char, double, etc.)<br />
            b) Numele funcției<br />
            c) Parametrii (opțional)<br />
            d) Corpul funcției (codul care va fi executat)<br /><br />

            Exemplu simplu de funcție care afișează un mesaj:

            <CodeStyle code={`#include <iostream>
using namespace std;

void salut() {  // Funcție fără parametri și fără return
    cout << "Salut! Bine ai venit!" << endl;
}

int main() {
    salut(); // Apelul funcției
    return 0;
}`} />

            <h4>Funcții cu Return</h4>
            O funcție poate returna un rezultat cu return.<br />
            Exemplu: Funcție care calculează suma a două numere
            <CodeStyle code={`#include <iostream>
using namespace std;

int suma(int a, int b) {  // Funcție care primește doi parametri
    return a + b;  // Returnează suma
}

int main() {
    int x = 5, y = 10;
    cout << "Suma: " << suma(x, y) << endl;  // 5 + 10 = 15
    return 0;
}`} />
            <h4>Funcții cu Parametri și Return</h4>
            Exemplu: Funcție care returnează maximul dintre două numere
            <CodeStyle code={`#include <iostream>
using namespace std;

int maxim(int a, int b) {
    if (a > b) {
        return a;
    } 
    return b;
}

int main() {
    int x = 3, y = 7;
    cout << "Maximul este: " << maxim(x, y) << endl;  // 7
    return 0;
}`} />
            <h4>Funcții cu Parametri Transmiși prin Referință</h4>
            Folosim & pentru a modifica direct variabilele primite ca parametri.
            <CodeStyle code={`#include <iostream>
using namespace std;

void dubleaza(int &num) {  // Parametru transmis prin referință
    num *= 2;
}

int main() {
    int x = 10;
    dubleaza(x);
    cout << "Noua valoare a lui x: " << x << endl;  // 20
    return 0;
}`} />
            Fără &, funcția ar primi o copie și nu ar modifica x.<br /><br />

            <h4>Funcții cu Parametri Impliciți</h4>
            Dacă un parametru nu este furnizat, se folosește o valoare implicită.
            <CodeStyle code={`#include <iostream>
using namespace std;

void salut(string nume = "Anonim") {
    cout << "Salut, " << nume << "!" << endl;
}

int main() {
    salut();        // Va afișa "Salut, Anonim!"
    salut("Alex");  // Va afișa "Salut, Alex!"
    return 0;
}`} />

            <h4>Funcții Recursive (O funcție care se apelează singură)</h4>
            Exemplu: Factorial (n!)
            <CodeStyle code={`#include <iostream>
using namespace std;

int factorial(int n) {
    if (n == 0) return 1;  // Caz de oprire
    return n * factorial(n - 1);
}

int main() {
    cout << "Factorial de 5: " << factorial(5) << endl;  // 5! = 120
    return 0;
}`} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h4>Cum funcționează recursivitatea?</h4>
                    Factorialul unui număr n este:<br /> n!=n×(n−1)×(n−2)×...×1 <br />
                    De exemplu:<br />5!=5×4×3×2×1=120<br />De asemenea, 0! = 1 (valoare definită matematic).
                </div>
                <div>
                    Să vedem cum funcționează pentru n = 3:<br />
                    1. factorial(3) <br />n NU este 0, deci se apelează recursiv cu n - 1 <br />return 3 * factorial(2);<br />
                    2. factorial(2) <br />return 2 * factorial(1);<br />
                    3. factorial(1) <br />return 1 * factorial(0);<br />
                    4. factorial(0) (Caz de bază)<br />return 1;<br />Aici funcția nu se mai apelează și începe întoarcerea rezultatelor.
                </div>
            </div>
            <h4>La ce este bună recursivitatea?</h4>
            Face codul mai simplu și elegant<br />
            Este foarte utilă pentru probleme care se bazează pe descompunerea în subprobleme mai mici<br />
            Se folosește în probleme precum backtracking, arbori binari, parcurgeri de grafuri (DFS) etc.<br />

        </>


    )


    return (
        <ProblemPage
            problemName="Functii"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Verificare numar prim" />
    )
}

export default Functions