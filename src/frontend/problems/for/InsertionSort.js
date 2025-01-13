import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function InsertionSort() {
    const problemContent = (
        <>
            <h4 >
                Insertion Sort (Sortare prin inserție)
            </h4>
            Cum funcționează?<br />
            Se presupune că primul element este deja sortat.<br />
            Se ia fiecare element următor și se inserează în poziția corectă în partea deja sortată a listei.<br />
            Se mută elementele mai mari la dreapta pentru a face loc noului element.<br />
            (sortare crescătoare)

            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int arr[5]; // Definim un array de 5 elemente
    int n = 5;  // Dimensiunea array-ului

    // Citirea elementelor de la tastatură
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    // Algoritmul Insertion Sort
    for (int i = 1; i < n; i++) {
        int key = arr[i];  // Luăm elementul curent
        int j = i - 1;

        // Deplasăm elementele mai mari la dreapta
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        // Inserăm elementul pe poziția corectă
        arr[j + 1] = key;
    }

    // Afișarea array-ului sortat
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}`} />

            <h4>Explicația codului</h4>
            1. Citim 5 numere de la tastatură și le stocăm în array-ul arr[5].<br />
            2. Aplicăm Insertion Sort:<br />
            &nbsp;Parcurgem fiecare element începând de la al doilea (i = 1).<br />
            &nbsp;Stocăm valoarea elementului curent în variabila key.<br />
            &nbsp;Comparăm key cu elementele anterioare și le mutăm spre dreapta dacă sunt mai mari.<br />
            &nbsp;Inserăm key în poziția corectă.<br />
            3. Afișăm array-ul sortat după terminarea algoritmului.<br /><br />

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Complexitate Timp (Caz Mediu)</h4>
                    O(n²)
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Avantaje</h4>
                    Bun pentru liste mici sau aproape sortate
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Dezavantaje</h4>
                    Lent pentru liste mari
                </div>

            </div>

        </>

    )


    return (
        <ProblemPage
            problemName="Insertion Sort"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Selection Sort" />
    )
}

export default InsertionSort