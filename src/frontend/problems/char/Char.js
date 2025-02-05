import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function Char() {
  const problemHeader = (
    <h4 style={{ color: 'white', fontSize: '1.2rem' }}>
      În C++, un șir de caractere este o secvență de caractere stocate într-un tablou de tip char și terminate obligatoriu cu caracterul '\0' (nul).
    </h4>
  )

  const problemContent = (
    <>
      <h4 >
        Declararea și inițializarea unui șir de caractere
      </h4>
      <strong style={{ letterSpacing: '0.1rem' }}>1. Declarare și inițializare manuală:</strong>
      <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    char sir1[] = {'H', 'e', 'l', 'l', 'o', '\\0'};  // Trebuie terminat cu '\\0'
    cout << sir1 << endl;
    return 0;
}`} />

      <strong style={{ letterSpacing: '0.1rem' }}>2. Inițializare mai simplă: </strong>
      <CodeStyle code={`char sir2[] = "Hello";  // Se adaugă automat '\\0' la final`} />

      <h4 >
        Citirea unui șir de caractere
      </h4>
      <strong style={{ letterSpacing: '0.1rem' }}>Metoda 1 - cin (fără spații)</strong>
      <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    char nume[20];  // Alocăm loc pentru maximum 19 caractere + '\\0'
    cout << "Introdu numele: ";
    cin >> nume;  // Citire până la primul spațiu
    cout << "Salut, " << nume << "!" << endl;
    return 0;
}`} />

      <strong style={{ letterSpacing: '0.1rem' }}>Metoda 2 - cin.getline() (cu spații)</strong>
      <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    char fraza[100];
    cout << "Introdu o fraza: ";
    cin.getline(fraza, 100);  // Citește inclusiv spațiile
    //fraza -> adresa primului element al șirului de caractere unde va fi stocat textul citit.
    //100 -> numărul maxim de caractere pe care le poate citi funcția (inclusiv '\\0' de final).
    cout << "Ai introdus: " << fraza << endl;
    return 0;
}`} />
      cin.getline() citește inclusiv spațiile (spre deosebire de cin &gt;&gt; fraza, care oprește citirea la primul spațiu).<br />
      Citirea se oprește fie când atinge limita de caractere (99 efective + '\0'), fie la Enter (\n).<br /><br />

      <h4 >
        Parcurgerea unui șir de caractere
      </h4>
      <strong style={{ letterSpacing: '0.1rem' }}>Afișare caracter cu caracter</strong>
      <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    char text[] = "C++ este tare!";
    
    for (int i = 0; text[i] != '\\0'; i++) {
        cout << text[i] << " ";
    }
    
    return 0;
}
`} />

    </>

  )


  return (
    <ProblemPage
      problemName="Siruri de caractere"
      problemPoints={1}
      problemHeader={problemHeader}
      problemContent={problemContent}
      lecture={true}
      nextRoute="/problems/ASCII" />
  )
}

export default Char