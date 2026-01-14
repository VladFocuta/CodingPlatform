import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function BaseStructure() {

  const problemHeader = (
    <>
      <p>
        În C++ și alte limbaje de programare, structurile de bază ale algoritmilor se împart în trei mari categorii: structura liniară, structura alternativă, și structura repetitivă. Acestea formează fundamentul logicii programării.
      </p>
    </>
  )

  const problemContent = (
    <>
      <h4 style={{ color: 'white' }}>
        1. Structura liniară
      </h4>
    
        Definiție:<br />
        Structura liniară este o secvență de instrucțiuni care sunt executate una după alta, în ordinea în care sunt scrise, fără a avea ramificări sau bucle.<br /><br />
        Caracteristici:<br />
        &nbsp;Fluxul execuției este continuu și neîntrerupt.<br />
        &nbsp;Este cea mai simplă dintre structuri.<br /><br />
        Exemplu în C++:
        <div style={{width: '100%'}}>
          <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int a, b, suma;

    // Introducere date
    cout << "Introduceti doua numere: ";
    cin >> a >> b;

    // Calcul
    suma = a + b;

    // Afișare rezultat
    cout << "Suma este: " << suma << endl;

    return 0;
}`} />
        </div>
        Explicație:<br />
        Instrucțiunile sunt executate secvențial:<br />

        &nbsp;1. Citirea numerelor.<br />
        &nbsp;2. Calculul sumei.<br />
        &nbsp;3. Afișarea rezultatului.<br />
      

      <h4 style={{ color: 'white' }}>
        2. Structura alternativă
      </h4>
     
        Definitie:<br />
        Structura alternativă permite ramificarea execuției pe baza unei condiții. În funcție de rezultatul acestei condiții (adevărat sau fals), o ramură a codului este executată, iar cealaltă este ignorată.<br /><br />

        Caracteristici:<br />
        &nbsp;Este folosită pentru luarea deciziilor.<br />
        &nbsp;Folosește instrucțiuni precum if, if-else și switch.<br /><br />
        Exemplu cu if-else:
        <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int numar;

    cout << "Introduceti un numar: ";
    cin >> numar;

    if (numar % 2 == 0) {
        cout << "Numarul este par." << endl;
    } else {
        cout << "Numarul este impar." << endl;
    }

    return 0;
}`} />
        Explicație:<br />
        &nbsp;if-else: Decide dacă un număr este par sau impar în funcție de restul împărțirii la 2.
   

      <h4 style={{ color: 'white' }}>
        3.  Structura repetitivă
      </h4>
      
        Definiție:<br />
        Structura repetitivă permite execuția repetată a unei secvențe de instrucțiuni, atâta timp cât o condiție este îndeplinită. Este utilizată pentru cicluri și bucle.<br /><br />
        Caracteristici:<br />
        &nbsp;Evită duplicarea codului.<br />
        &nbsp;Folosește instrucțiuni precum for, while și do-while.<br /><br />

        Exemplu cu for:
        <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        cout << "Numar: " << i << endl;
    }

    return 0;
}`} />
        Exemplu cu while:
        <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int numar = 1;

    while (numar <= 5) {
        cout << "Numar: " << numar << endl;
        numar++;
    }

    return 0;
}`} />
        Exemplu cu do-while:
        <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int numar = 1;

    do {
        cout << "Numar: " << numar << endl;
        numar++;
    } while (numar <= 5);

    return 0;
}`} />
        Explicație:<br />
        &nbsp;for: Iterează de 5 ori, afișând numerele de la 1 la 5.<br />
        &nbsp;while: Continuă să ruleze cât timp condiția numar &lt;= 5 este adevărată.<br />
        &nbsp;do-while: Rulează cel puțin o dată și verifică condiția după execuție.<br />
      

      <h4>
        Rezumat:

      </h4>
      <p>
        &nbsp;<strong style={{ letterSpacing: '0.1rem' }}>Structura liniară</strong>: Instrucțiuni executate secvențial.<br />
        &nbsp;<strong style={{ letterSpacing: '0.1rem' }}>Structura alternativă</strong>: Decizii luate pe baza condițiilor (if, switch).<br />
        &nbsp;<strong style={{ letterSpacing: '0.1rem' }}>Structura repetitivă</strong>: Execuție repetată a codului (for, while, do-while).<br />
      </p>

    </>
  )

  return (
    <ProblemPage
      problemName="Structuri de baze"
      problemPoints={1}
      problemHeader={problemHeader}
      problemContent={problemContent}
      nextRoute="/problems/If-structura alternativa"
      lecture={true}
    />

  )
}

export default BaseStructure