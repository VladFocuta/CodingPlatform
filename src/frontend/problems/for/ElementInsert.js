import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function ElementInsert() {
    const problemHeader = (
        <h4 style={{ color: 'white', fontSize: '1.2rem' }}>
            Inserarea elementelor într-un array în C++ presupune adăugarea unui nou element la o anumită poziție din array. Deoarece dimensiunea unui array clasic este fixă în C++, trebuie să mutăm elementele pentru a face loc noului element.<br />
        </h4>
    )

    const problemContent = (
        <>
            <h4 >
                Pașii pentru inserarea unui element într-un array static:
            </h4>
            1. Identificarea poziției: Specifici la ce poziție vrei să inserezi elementul. <br />
            2. Mutarea elementelor: Elementele de la poziția indicată încolo trebuie mutate cu o poziție spre dreapta pentru a face loc noului element.<br />
            3. Adăugarea elementului: Plasezi elementul la poziția specificată.<br />
            4. Incrementarea dimensiunii: Dacă folosești o variabilă pentru a urmări numărul de elemente, o incrementezi.<br />

            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    const int MAX_SIZE = 50; // Dimensiunea maximă a array-ului
    int arr[MAX_SIZE] = {1, 2, 3, 4, 5}; // Array-ul inițial cu 5 elemente
    int size = 5; // Numărul actual de elemente în array
    int position = 3, value = 13;

    // Mutarea elementelor la dreapta
    for (int i = size; i > position; i--) {
        arr[i] = arr[i - 1];
    }

    // Inserarea elementului
    arr[position] = value;

    // Creșterea dimensiunii array-ului
    size++;

    // Afișarea array-ului actualizat
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";   // 1 2 3 13 4 5 
    }

    return 0;
}`} />

            <h4>1. Declarația array-ului:</h4>
            Am folosit un array static cu dimensiunea maximă de 50.
            Inițial, array-ul are 5 elemente: &#123;1, 2, 3, 4, 5&#125;.
            <h4>2. Citirea poziției și valorii:</h4>
            Initilizăm variabila position(poziția pe care urmează să adăugăm noul element) cu 3 și value(valorea elementului) cu 13 .<br />
            <h4>3. Mutarea elementelor:</h4>
            Pentru a face loc noului element, elementele existente de la poziția specificată încolo sunt mutate spre dreapta.<br />
            Bucla merge de la sfârșit (size) spre poziția dorită.<br />
            <h4>4. Inserarea elementului:</h4>
            La poziția specificată, valoarea introdusă este plasată în array.
            <h4>5. Incrementarea dimensiunii:</h4>
            Dimensiunea efectivă a array-ului este incrementată.
        </>

    )


    return (
        <ProblemPage
            problemName="Inserarea unui element"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Inserarea unui element 2.0" />
    )
}

export default ElementInsert