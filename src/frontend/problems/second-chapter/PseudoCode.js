import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function PseudoCode() {


    const problemContent = (
        <>
            <h4>
                Definiția pseudocodului
            </h4>

            <p>
                Pseudocodul este o formă simplificată de descriere a unui algoritm, scrisă într-un limbaj asemănător limbajului natural (română, engleză etc.) combinat cu instrucțiuni de tip programare (if, for, while etc.), dar fără a respecta sintaxa strictă a unui limbaj de programare (cum ar fi C++, Java etc.).
            </p>

            <h4>
                La ce ne ajută pseudocodul
            </h4>
            <p>
                Pseudocodul este util pentru:<br />
                1. Planificarea logicii unui algoritm înainte de implementarea lui într-un limbaj real.<br />
                2. Înțelegerea clară a pașilor dintr-un algoritm, fără a fi distras de detalii de sintaxă.<br />
                3. Comunicarea mai ușoară între oameni care lucrează împreună, chiar dacă folosesc limbaje diferite.<br />
                4.  Antrenarea gândirii algoritmice, mai ales în școală, liceu sau la olimpiade.
            </p>
            <h4>
                Caracteristici ale pseudocodului:
            </h4>

            <div style={{ display: 'flex', border: '1px solid white', maxWidth: '500px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <strong style={{ borderBottom: '1px solid white' }}>Caracteristică</strong>
                    <p style={{ fontSize: '12px' }}>Nu are sintaxă fixă</p>
                    <p style={{ fontSize: '12px' }}>E ușor de citit</p>
                    <p style={{ fontSize: '12px' }}>E clar și concis</p>
                    <p style={{ fontSize: '12px' }}>E independent de limbaj</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <strong style={{ borderBottom: '1px solid white' }}>Detaliu</strong>
                    <p style={{ fontSize: '12px' }}>Poți folosi termeni ca „pentru fiecare”, „dacă”, „scrie”</p>
                    <p style={{ fontSize: '12px' }}>Nu are acolade, tipuri de date, punct și virgulă etc.</p>
                    <p style={{ fontSize: '12px' }}>Arată intenția, nu implementarea detaliată</p>
                    <p style={{ fontSize: '12px' }}>Se poate converti ușor în C++, Python, Java etc.</p>
                </div>
            </div><br />

            <h4>Exemplu comparativ</h4>

            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
Declara n, v[100], maxim
Citeste n

Pentru i ← 0 pana la n - 1 execută
    Citeste v[i]
Sfârșit Pentru

maxim ← v[0]
Pentru i ← 1 până la n - 1 execută
    Dacă v[i] > maxim atunci
        maxim ← v[i]
     Sfârșit dacă 
Sfârșit pentru

Scrie maxim

    return 0;
}`} />

            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
int n, v[100], maxim;
cin >> n;

for (int i = 0; i < n; ++i) {
    cin >> v[i];   
}

maxim = v[0];
for (int i = 1; i < n; ++i) {
    if (v[i] > maxim) {
        maxim = v[i];
    }
}
      
cout << maxim;

    return 0;
}`} />



        </>
    )
    return (
        <ProblemPage
            problemName="Definitia pseudocodului"
            problemContent={problemContent}
            problemPoints={1}
            nextRoute="/problems/Contor"
            lecture={true}
        />
    )
}

export default PseudoCode