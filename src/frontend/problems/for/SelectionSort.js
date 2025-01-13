import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function SelectionSort() {
    const problemContent = (
        <>
            <h4 >
                Selection Sort (Sortare prin selecție)
            </h4>
            Cum funcționează?<br />
            Caută cel mai mic element din array și îl mută pe prima poziție.<br />
            Caută al doilea cel mai mic element și îl mută pe a doua poziție.<br />
            Procesul continuă până când array-ul este complet sortat.<br />
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

    // Algoritmul Selection Sort
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i; // Considerăm că elementul curent este minim

        // Căutăm cel mai mic element în restul array-ului
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Actualizăm indexul minimului
            }
        }

        // Schimbăm elementele manual
        if (minIndex != i) {
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    // Afișarea array-ului sortat
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}`} />

            <h4>Explicația codului</h4>
            1. Citim 5 numere de la tastatură și le stocăm în array-ul arr[5].<br />
            2. Aplicăm Selection Sort:<br />
            &nbsp;Parcurgem fiecare element (i) și presupunem că este cel mai mic (minIndex = i).<br />
            &nbsp;Căutăm în restul array-ului (j = i + 1) dacă există un număr mai mic.<br />
            &nbsp;Dacă găsim un număr mai mic, actualizăm minIndex.<br />
            &nbsp;La final, schimbăm elementele manual folosind o variabilă temporară (temp).<br />
            3. Afișăm array-ul sortat după terminarea algoritmului.<br /><br />

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Complexitate Timp (Caz Mediu)</h4>
                    O(n²)
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Avantaje</h4>
                    Funcționează bine pe liste mici
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Dezavantaje</h4>
                    Nu este eficient pentru date nesortate
                </div>

            </div>

        </>

    )


    return (
        <ProblemPage
            problemName="Selection Sort"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Linear Search" />
    )
}

export default SelectionSort