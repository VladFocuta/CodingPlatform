import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function ForLecture() {
    const problemHeader = (
        <h4 style={{ color: 'white', fontSize: '1.2rem' }}>
            Instrucțiunea for este o structură repetitivă folosită pentru a executa un set de instrucțiuni de un număr determinat de ori. Este formată din trei părți principale:<br /><br />
            <strong style={{ letterSpacing: '0.1rem' }}>Inițializarea</strong>: Se inițializează o variabilă care va acționa ca un contor.<br />
            <strong style={{ letterSpacing: '0.1rem' }}>Condiția</strong>: Se specifică o expresie logică ce trebuie să fie adevărată pentru ca bucla să continue.<br />
            <strong style={{ letterSpacing: '0.1rem' }}>Incrementarea/Decrementarea</strong>: Se definește cum se modifică contorul după fiecare iterație.<br />
        </h4>
    )

    const problemContent = (

        <>
            <h4 >
                Sintaxa generală:
            </h4>

            <CodeStyle code={`for (inițializare; condiție; modificare) {
    // Bloc de cod executat repetitiv
}`} />

            <strong style={{ letterSpacing: '0.1rem' }}>Inițializare:</strong> Este executată o singură dată, la început.<br />
            <strong style={{ letterSpacing: '0.1rem' }}>Condiție:</strong> Este verificată înainte de fiecare iterație. Dacă este adevărată, bucla continuă; dacă este falsă, bucla se oprește.<br />
            <strong style={{ letterSpacing: '0.1rem' }}>Modificare:</strong> Este aplicată contorului la sfârșitul fiecărei iterații.<br /><br />

            <h4>Exemplu de utilizare:</h4>
            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int suma = 0;

    cout << "Primele 10 numere naturale sunt: " << endl;

    for (int i = 1; i <= 10; ++i) { // Inițializare: i=1, Condiție: i<=10, Incrementare: ++i
        cout << i << " ";
        suma += i; // Adaugă fiecare număr la sumă
    }

    cout << "Suma primelor 10 numere naturale este: " << suma << endl;

    return 0;
}`} />
            <h4>Rezultat:</h4>
            <CodeStyle code={`Primele 10 numere naturale sunt:
1 2 3 4 5 6 7 8 9 10 
Suma primelor 10 numere naturale este: 55`} />

            <h4>Explicație a codului:</h4>
            Variabila i este inițializată cu valoarea 1 (inițializare).<br />
            Bucla continuă să ruleze cât timp i este mai mic sau egal cu 10 (condiție).<br />
            După fiecare iterație, i este incrementată cu 1 (incrementare).<br />
            În interiorul buclei:<br />
            Afișăm valoarea curentă a lui i.<br />
            Adăugăm valoarea lui i la variabila suma.<br />
        </>

    )


    return (
        <ProblemPage
            problemName="Structura Repetitiva for"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Siruri de numere" />
    )
}

export default ForLecture