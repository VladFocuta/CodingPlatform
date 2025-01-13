import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function ElementDelete() {
    const problemHeader = (
        <h4 style={{ color: 'white', fontSize: '1.2rem' }}>
            Un array este o structură de date care conține elemente în ordine, fiecare identificat printr-un index. Uneori, poate fi necesar să eliminăm un element dintr-un array. În această lecție, vom învăța cum sa ștergem un element dintr-un array.<br />
        </h4>
    )

    const problemContent = (
        <>
            <h4 >
                Pasul 1: Înțelegerea ștergerii unui element
            </h4>
            În limbaje statice, cum ar fi C++, array-ul are o dimensiune fixă, așa că ștergerea implică mutarea elementelor în loc să reducem efectiv dimensiunea.<br />
            Elementele după poziția eliminată sunt mutate pentru a umple spațiul rămas liber.<br /><br />

            <h4>În C++ (array-uri statice)</h4>
            Nu poți schimba dimensiunea unui array static. Pentru a „șterge” un element, elementele după cel șters trebuie mutate spre stânga.
            <CodeStyle code={`#include <iostream>
using namespace std;
int main() {         

    int arr[50];
    int size = 5, position = 2; // stergem elementul de pe pozitia 2
    
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    for (int i = position; i < size - 1; i++) {
        arr[i] = arr[i + 1]; // mutam elementele la stanga
    }
    size--; // reducem dimensiunea

    for (int i = 0; i < size; i++) {
        cout << arr[i] << " "; // afisam array-ul cu noile elemente
    }
        return 0;
}`} />

            <h4>Pasul 2: Aplicații practice</h4>
            1. Managementul listelor de sarcini: Într-o aplicație de tip „to-do list,” ștergerea unei sarcini este un exemplu tipic de eliminare a unui element dintr-un array.<br />
            2. Gestionarea cozii de așteptare: Într-un sistem de cozi, eliminarea unui element din array reprezintă un pas esențial.
        </>

    )


    return (
        <ProblemPage
            problemName="Stergerea unui element"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Stergerea unui element 2.0" />
    )
}

export default ElementDelete