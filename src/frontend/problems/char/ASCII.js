import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function ASCII() {
    const problemHeader = (
        <h4 style={{ color: 'white', fontSize: '1.2rem' }}>
            ASCII (American Standard Code for Information Interchange) este un sistem de codificare a caracterelor care asociază fiecare caracter (litere, cifre, simboluri) cu un număr între 0 și 127.
            <br /><a href='https://www.asciitable.com/' target="_blank" rel="noopener noreferrer">Aici</a> găsești tabelul.
        </h4>
    )

    const problemContent = (
        <>
            <h4 >
                Conversia Caracter - ASCII în C++
            </h4>
            <strong style={{ letterSpacing: '0.1rem' }}>Afișarea codului ASCII al unui caracter</strong>
            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    char c; // Declaram un caracter.
    cin >> c; // Citim caracterul de la tastatură.
    cout << "Codul ASCII pentru '" << c << "' este: " << int(c) << endl; // Convertim caracterul în codul său ASCII.
    return 0;
}`} />


            <h4 >
                Conversia Număr ASCII → Caracter
            </h4>
            <strong style={{ letterSpacing: '0.1rem' }}>Afișarea caracterului pentru un cod ASCII</strong>
            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int code; // Variabilă pentru cod ASCII.
    cin >> code;
    cout << "Caracterul corespunzător este: " << char(code) << endl; // Convertim numărul ASCII într-un caracter.
    return 0;
}
`} />

            <h4 >
                Aplicații ASCII în C++
            </h4>
            Verificare dacă un caracter este literă mare/mică
            <CodeStyle code={`if (c >= 'A' && c <= 'Z') cout << "Litera este mare!";
if (c >= 'a' && c <= 'z') cout << "Litera este mică!";
`} />
            Transformare literă mică → literă mare (și invers)
            <CodeStyle code={`char literaMare = 'a' - 32;  // Devine 'A'
char literaMica = 'Z' + 32;  // Devine 'z'
`} />
            Se bazează pe diferența fixă de 32 între litere mici și mari în ASCII.
        </>
    )


    return (
        <ProblemPage
            problemName="ASCII"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Functii predefinite" />
    )
}

export default ASCII