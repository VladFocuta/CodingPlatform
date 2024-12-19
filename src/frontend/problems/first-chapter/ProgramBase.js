import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'


function ProgramBase() {
    const problemHeader = (
        <>
            <p>
                În limbajul C++, următoarele noțiuni sunt esențiale: date, variabile, expresii și operații. Le voi explica specific pentru C++.
            </p>
        </>
    )

    const problemContent = (
        <>
            <h4>
                1. Date
            </h4>
            <p>
                Definiție:<br />
                În C++, datele sunt informațiile pe care programul le prelucrează și pot fi de diverse tipuri, fiecare având o anumită reprezentare în memorie.<br />
                <strong style={{ letterSpacing: '0.1rem' }}>Exemple de tipuri de date:</strong>
            </p>
            <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 1. Tipuri de date fundamentale:
                </strong>
                <br />
                a) <strong style={{ color: '#8A2BE2', fontWeight: 'bold' }}>int</strong>:  numere întregi, ex. int x = 10; <br />
                b) <strong style={{ color: '#8A2BE2', fontWeight: 'bold' }}>float</strong>: numere reale cu precizie simplă, ex. float y = 3.14;<br />
                c) <strong style={{ color: '#8A2BE2', fontWeight: 'bold' }}>double</strong>: numere reale cu precizie dublă, ex. double z = 2.71828;<br />
                d) <strong style={{ color: '#8A2BE2', fontWeight: 'bold' }}>char</strong>: un singur caracter, ex. char c = 'A';<br />
                e) <strong style={{ color: '#8A2BE2', fontWeight: 'bold' }}>bool</strong>: valori logice (adevărat/fals), ex. bool isActive = true;
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 2. Tipuri de date derivate:
                </strong>
                <br />
                a) <strong style={{ letterSpacing: '0.1rem' }}>șiruri de caractere</strong>: <CodeStyle code={`std::string text = "Salut";`} />
                b) <strong style={{ letterSpacing: '0.1rem' }}>tablouri (arrays)</strong>: <CodeStyle code={`int arr[5] = {1, 2, 3, 4, 5};`} />
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 3. Tipuri definite de utilizator:
                </strong>
                <br />
                Structuri (struct), clase (class), enumerări (enum).
            </div>

            <strong style={{ letterSpacing: '0.1rem' }}>Explicație:</strong>
            <p>Tipurile de date determină modul în care informațiile sunt interpretate și manipularea lor de către programe. În C++, fiecare variabilă are un tip asociat, care determină dimensiunea și operațiile permise.</p>

            <h4>
                2. Variabile
            </h4>
            <p>
                Definiție:<br />
                O variabilă în C++ este un spațiu din memorie cu un nume asociat, folosit pentru a stoca o valoare care poate fi utilizată și modificată în timpul execuției programului.<br /> <br />
                <strong style={{ letterSpacing: '0.1rem' }}>Reguli de declarare:</strong><br />
                1. O variabilă trebuie să aibă un nume unic.<br />
                2. Declarația specifică tipul de date și numele variabilei.<br /><br />
                <strong style={{ letterSpacing: '0.1rem' }}>Sintaxa:</strong><br />

                <CodeStyle code={`tip_variabilă nume_variabilă = valoare_initială;`} />
                <strong style={{ letterSpacing: '0.1rem' }}>Exemple:</strong>
                <CodeStyle code={`int numar = 5;        // Variabilă de tip întreg
double pi = 3.14159;  // Variabilă de tip real
char litera = 'A';    // Variabilă de tip caracter
bool esteValabil = true;  // Variabilă de tip logic`} />
                <strong style={{ letterSpacing: '0.1rem' }}>Explicatie:</strong><br />
                Variabilele în C++ trebuie să fie declarate înainte de utilizare, specificând tipul lor. Ele pot fi inițializate în momentul declarării sau ulterior. Variabilele pot fi locale (într-o funcție) sau globale (definite în afara tuturor funcțiilor).
            </p>

            <h4>
                3. Expresii
            </h4>
            <p>
                Definiție:<br />
                O expresie în C++ este o combinație de variabile, constante, operatori și funcții care produce o valoare. Expresiile pot fi folosite pentru a realiza calcule, a evalua condiții, sau a inițializa variabile.<br /><br />
                <strong style={{ letterSpacing: '0.1rem' }}>Exemple:</strong><br />
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 1. Expresii aritmetice:
                </strong>
                <CodeStyle code={`int suma = a + b;  // Adunare
float arie = lungime * latime;  // Multiplicare`} />
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 2. Expresii logice:
                </strong>
                <CodeStyle code={`bool conditie = (x > 10) && (y < 20);  // Operatorii && (AND) și >, <`} />
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 3. Expresii mixte:
                </strong>
                <CodeStyle code={`double rezultat = (a + b) / 2.0;  // Operații cu numere întregi și reale`} />
            </p>
            <strong style={{ letterSpacing: '0.1rem' }}>Explicatie:</strong>
            Expresiile sunt evaluate conform ordinii operatorilor din C++. Rezultatul unei expresii poate fi stocat într-o variabilă sau utilizat direct.

            <h4>
                4. Operații
            </h4>
            <p>
                Definiție:<br />
                Operațiile sunt acțiuni efectuate asupra datelor utilizând operatori. Acestea pot fi clasificate în funcție de scopul lor.
            </p>
            <p>
                <strong style={{ letterSpacing: '0.1rem' }}>Tipuri de operații în C++:</strong><br />
                <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 1. Operații aritmetice:
                    </strong><br />
                    Adunare: +, ex. <CodeStyle code={`int suma = x + y;`} />
                    Scădere: -, ex. <CodeStyle code={`int diferenta = x - y;`} />
                    Înmulțire: *, ex.<CodeStyle code={`int produs = x * y;`} />
                    Împărțire: /, ex.<CodeStyle code={`float cat = x / y;`} />
                    Modulo: % (pentru restul împărțirii întregi), ex.<CodeStyle code={`int rest = x % y;`} />
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 2. Operații de atribuire:</strong><br />
                    Operatorul =, ex. <CodeStyle code={`x = 10;`} />
                    Combinate: +=, -=, *=, /=, ex. <CodeStyle code={`x += 5; (echivalent cu x = x + 5;)`} />
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 3. Operații logice:</strong><br />
                    Și logic: &&, ex. <CodeStyle code={`(x > 0) && (y < 10)`} />
                    Sau logic: ||, ex. <CodeStyle code={`(x > 0) || (y < 10)`} />
                    Negare logică: !, ex. <CodeStyle code={`!(x > 5)`} />
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 4. Operații de comparație:</strong><br />
                    Egalitate: ==, ex. <CodeStyle code={`x == y`} />
                    Diferență: !=, ex.  <CodeStyle code={`x != y`} />
                    Mai mic: &lt;, Mai mare: &gt;, ex. <CodeStyle code={`x < y`} />
                    Mai mic sau egal: &lt;=, Mai mare sau egal: &gt;=
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 5. Operații pe biți:</strong><br />
                    Și bit cu bit: &<br />
                    Sau bit cu bit: |<br />
                    Sau exclusiv: ^<br />
                    Negare bit cu bit: ~<br />
                    Shiftare la stânga: &lt;&lt;<br />
                    Shiftare la dreapta: &gt;&gt;<br />
                </div>

                <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                    <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px', letterSpacing: '0.1rem' }}> 6. Operații pe șiruri de caractere:</strong><br />
                    Concatenare: <CodeStyle code={`std::string text = "Salut " + "lume";`} />
                </div>

                <h4>
                    5. Citirea si scrierea datelor
                </h4>
                <p>
                    Scrierea datelor (cout):<br />
                    (Console Output - Scriere pe consolă):<br />
                    Este folosit pentru a afișa mesaje sau valori pe ecran.<br />
                    Funcționează împreună cu operatorul &lt;&lt; (operator de redirecționare către ieșire).
                    <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int var = 5;
    cout << "Valoarea variabilei este: " << var << endl;
    return 0;
}`} />
                    Citirea datelor (cin):<br />
                    (Console Input - Citire de la consolă):<br />
                    Este utilizat pentru a prelua date introduse de utilizator.<br />
                    Funcționează cu operatorul &gt;&gt; (operator de redirecționare din intrare).
                    <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int var;
    cout << "Introduceti un numar: ";
    cin >> var;
    cout << "Ati introdus: " << var << endl;
    return 0;
}`} />
                    Rezumat:<br />
                    cout → Afișează informații pe ecran.<br />
                    cin → Preia date de la utilizator.
                </p>
            </p>

        </>
    )


    return (
        <>
            <ProblemPage
                problemName="Bazele programarii"
                problemPoints={1}
                problemContent={problemContent}
                problemHeader={problemHeader}
                lecture={true}
                nextRoute="/problems/Rulare program" />

        </>
    )
}

export default ProgramBase