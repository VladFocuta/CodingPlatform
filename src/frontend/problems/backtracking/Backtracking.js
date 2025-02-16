import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function Backtracking() {

    const problemContent = (
        <>
            <h4 >
                Backtracking este o tehnică de programare folosită pentru a rezolva probleme prin explorarea tuturor posibilităților. Este un fel de "căutare pe arbore" în care, la fiecare pas, alegi o opțiune și continui să explorezi. Dacă, la un moment dat, ajungi într-o situație imposibilă (adică alegerea făcută nu poate duce la o soluție validă), te întorci (backtrack) la pasul anterior și încerci o altă opțiune.
            </h4>

            <h4>
                Cum funcționează backtracking-ul?
            </h4>
            <strong style={{ letterSpacing: '0.1rem' }}>1.Start:</strong> Ai o problemă care poate fi împărțită în pași mai mici (de exemplu, alegerea unor elemente, mutarea unei piese pe o tablă, etc.).
            <strong style={{ letterSpacing: '0.1rem' }}>2.Alegere:</strong> La fiecare pas, alegi o opțiune disponibilă (de exemplu, un element dintr-un șir).
            <strong style={{ letterSpacing: '0.1rem' }}>3.Verificare:</strong>După alegerea unui pas, verifici dacă alegerea este validă (poți merge mai departe?).
            <strong style={{ letterSpacing: '0.1rem' }}>4.Continuare:</strong>Dacă alegerea este validă, continui să explorezi.
            <strong style={{ letterSpacing: '0.1rem' }}>5.Backtrack:</strong>Dacă ajungi într-un punct unde alegerea nu mai duce la o soluție validă, te întorci la pasul anterior și încerci o altă opțiune.
            <CodeStyle code={`#include <iostream>
using namespace std;

int v[20], n, fr[20];

void afisam() {
    for (int i = 0; i < n; ++i) {
        cout << v[i] << " ";
    }
    cout << "\\n";
}

void back(int k) {
    if (k == n) { // Am ajuns la o permutare completă
        afisam();
        return;
    }

    for (int i = 0; i < n; ++i) {
        if (fr[i] == 0) { // Dacă elementul i+1 nu a fost folosit
            v[k] = i + 1;
            fr[i] = 1; // Marcăm că l-am folosit

            back(k + 1); // Apelăm recursiv pentru poziția următoare

            fr[i] = 0; // După ce explorăm toate variantele posibile pentru k+1, deblocăm fr[i] = 0.
            //Astfel, putem folosi i + 1 din nou în alte permutări.
        }
    }
}

int main() {
    cin >> n;
    back(0);
    return 0;
}
`} />
            Acest cod generează toate permutările posibile ale numerelor de la 1 la n folosind backtracking.<br />
            Dacă introducem n = 3, atunci codul va afișa toate permutările numerelor 1, 2, 3:<br />
            <br />1 2 3 <br />1 3 2 <br />2 1 3<br />2 3 1<br />3 1 2<br />3 2 1<br />

        </>

    )


    return (
        <ProblemPage
            problemName="Ce este backtracking?"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Generare aranjamente" />
    )
}

export default Backtracking