import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function PredefinedFunctions() {
    const problemHeader = (
        <h4 style={{ color: 'white', fontSize: '1.2rem' }}>
            Pentru manipularea șirurilor, C++ oferă funcții din &lt;cstring&gt;
        </h4>
    )

    const problemContent = (
        <>
            <strong style={{ letterSpacing: '0.1rem' }}>Determinarea lungimii unui șir (strlen)</strong>
            <CodeStyle code={`#include <iostream>
#include <cstring>  // Biblioteca pentru operatii pe siruri
using namespace std;

int main() {
    char sir[] = "Programare";
    cout << "Lungimea sirului: " << strlen(sir) << endl;
    return 0;
}`} />

            <strong style={{ letterSpacing: '0.1rem' }}>Copierea unui șir (strcpy)</strong>
            <CodeStyle code={`#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char sursa[] = "Salut!";
    char destinatie[20];

    strcpy(destinatie, sursa);  // Copiem "Salut!" în destinatie
    cout << "Copiat: " << destinatie << endl;
    
    return 0;
}`} />

            <strong style={{ letterSpacing: '0.1rem' }}>Concatenarea a două șiruri (strcat)</strong>
            <CodeStyle code={`#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char nume[30] = "Ana";
    char prenume[] = " Popescu";

    strcat(nume, prenume);  // Adaugă " Popescu" la "Ana"
    cout << "Numele complet: " << nume << endl;

    return 0;
}
`} />
            <strong style={{ letterSpacing: '0.1rem' }}>Compararea a două șiruri (strcmp)</strong>
            <CodeStyle code={`#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char sir1[] = "abc";
    char sir2[] = "abd";

    if (strcmp(sir1, sir2) == 0)
        cout << "Șirurile sunt identice.";
    else
        cout << "Șirurile sunt diferite.";
    
    return 0;
}

`} />
            strcmp(sir1, sir2) returnează:<br />
            0 dacă șirurile sunt egale.<br />
            Un număr negativ dacă sir1 &lt; sir2.<br />
            Un număr negativ dacă sir1 &gt; sir2.<br />


        </>
    )


    return (
        <ProblemPage
            problemName="Functii predefinite"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Palindrom-siruri de caractere" />
    )
}

export default PredefinedFunctions