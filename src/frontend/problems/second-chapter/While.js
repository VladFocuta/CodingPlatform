import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'


function While() {
    const problemHeader = (
        <>
            <p>
                Ce este mai exact while?<br />
                Instrucțiunea while este o structură repetitivă care execută o secvență de cod atâta timp cât o condiție este adevărată. Se folosește atunci când numărul de repetări nu este cunoscut de la început.
            </p>
        </>
    )

    const problemContent = (
        <>
            <h4>
                Sintaxa:
            </h4>
            <CodeStyle code={`while (condiție) {
    // Instrucțiuni de executat
}`} />
            <p>
                condiție este o expresie logică ce este evaluată la începutul fiecărei iterații.<br />
                Dacă condiție este true, codul din interiorul blocului while se execută.<br />
                Dacă condiție devine false, bucla se oprește.<br />
            </p>

            <h4>
                Exemple de utilizare:<br />
            </h4>
            <p>
                Exemplu simplu: Numărare de la 1 la 5
            </p>
            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int i = 1;  // Inițializare

    while (i <= 5) {  // Condiție
        cout << i << " ";  // Afișează valoarea lui i
        i++;  // Incrementare
    }

    return 0;
}`} />
            <h4>Output: 1 2 3 4 5</h4><br />

            <h4>Când să folosim while?</h4>
            <p>
                Când numărul exact de repetări nu este cunoscut de la început.<br />
                Când dorim să repetăm o operație până când o condiție devine falsă.
            </p>

            <h4>Erori comune:</h4>
            <p>
                1. Buclă infinită:<br />
                Dacă condiția nu devine niciodată falsă, bucla continuă să ruleze la nesfârșit.
                <CodeStyle code={`int i = 1;
while (i <= 5) {
    cout << i;  // Lipsa incrementării lui i => buclă infinită
}`} />
                Rezolvare: Adăugați modificări asupra variabilelor care determină condiția.
            </p>
            
            <p>
                2. Condiție greșită:<br />
                Dacă condiția este scrisă greșit, bucla poate să nu ruleze deloc sau să ruleze incorect.
            </p>
        </>
    )
    return (
        <ProblemPage
            problemName="While"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            nextRoute="/problems/Contor"
            lecture={true}
        />
    )
}

export default While