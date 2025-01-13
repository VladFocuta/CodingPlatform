import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function Arrays() {
    const problemHeader = (
        <h4 style={{ color: 'white', fontSize: '1.2rem' }}>
            Un șir de numere, cunoscut și ca array, este o structură de date folosită pentru a stoca mai multe valori de același tip într-un spațiu de memorie contiguă. Fiecare element al șirului este accesibil printr-un index, care începe de obicei de la 0.<br />

        </h4>
    )

    const problemContent = (
        <>
            <h4 >
                Caracteristici ale unui array:
            </h4>
            <strong style={{ letterSpacing: '0.1rem' }}>Dimensiunea fixă:</strong> Odată declarat, un array are o dimensiune fixă (în unele limbaje de programare, dimensiunea poate fi ajustată).<br />
            <strong style={{ letterSpacing: '0.1rem' }}>Acces rapid:</strong> Accesarea oricărui element este rapidă folosind indexul.<br />
            <strong style={{ letterSpacing: '0.1rem' }}>Tip unic de date:</strong> Toate elementele dintr-un array sunt de același tip.<br /><br />

            <h4>Depășirea limitei unui array</h4>
            Dacă încerci să accesezi un index care depășește dimensiunea declarată, rezultatul este comportament nedefinit:<br />
            Uneori programul continuă fără erori vizibile.<br />
            Alteori, primești un segmentation fault (eroare critică).<br />
            Programul poate citi sau modifica date greșite din memorie.<br />
            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int arr[5] = {1, 2, 3, 4, 5};

    cout << arr[10] << endl; // Index invalid! Poate cauza un segmentation fault.

    return 0;
}`} />

            <h4>Exemple de Declarații și Inițializări</h4>
            <CodeStyle code={`// Declararea unui array de 5 elemente
int numere[5]; 

// Inițializarea unui array
int numereInițializate[5] = {1, 2, 3, 4, 5};

// Accesarea elementelor
cout << "Primul element: " << numereInițializate[0] << endl;
cout << "Ultimul element: " << numereInițializate[4] << endl;`} />

            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int numere[5];
    int suma = 0;

    cout << "Introdu 5 numere:" << endl;

    for (int i = 0; i < 5; i++) {
        cin >> numere[i]; // Citirea elementelor se poate face si de la tastatura
        suma += numere[i]; // Adăugarea fiecărui element la sumă
    }

    cout << "Suma numerelor este: " << suma << endl;
    return 0;
}`} />

            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int numere[5];
   

    for (int i = 0; i < 5; i++) {
        cin >> numere[i]; // Citim fiecare element de la tastatură
    }

    for (int i = 0; i < 5; i++) {
        cout << numere[i] << " "; // Afisăm fiecare element cu spațiu între ele
    }

    
    return 0;
}`} />

            Rulați aceste exemple în compilator încat să vedeți rezultatele.<br /><br />
            Arrays (șiruri de numere) sunt fundamentale în programare și sunt utilizate pe scară largă în multe domenii, inclusiv procesarea datelor, algoritmi și dezvoltarea de aplicații complexe.
        </>

    )


    return (
        <ProblemPage
            problemName="Siruri de numere"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Produsul numerelor" />
    )
}

export default Arrays