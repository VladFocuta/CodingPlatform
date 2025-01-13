import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function BubbleSort() {

    const problemContent = (
        <>
            <h4 >
                Bubble Sort (Sortare prin metoda bulelor)
            </h4>
            Cum funcționează?<br />
            Compară elementele adiacente și le interschimbă dacă sunt în ordine greșită.<br />
            Procesul se repetă până când toate elementele sunt sortate.<br />
            Cel mai mare element „se ridică” la sfârșitul listei, similar cu o bulă de aer care urcă la suprafață.<br />
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

    // Algoritmul Bubble Sort
    int ok = 1; // Variabilă de verificare pentru optimizare
    while (ok) {
        ok = 0; // Presupunem că nu se fac schimbări
        for (int i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) { 
                // Interschimbare manuală 
                int temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                ok = 1; // Dacă a fost efectuată o interschimbare, repetăm procesul
            }
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
            2. Aplicăm Bubble Sort:<br />
            &nbsp;Folosim o variabilă ok pentru a verifica dacă s-au făcut interschimbări.<br />
            &nbsp;Dacă nu s-au făcut interschimbări într-o iterație, înseamnă că lista este deja sortată și ieșim din buclă.<br />
            &nbsp;Comparăm fiecare element cu următorul și, dacă este mai mare, le interschimbăm manual folosind o variabilă temporară (temp).<br />
            3. Afișăm array-ul sortat după terminarea algoritmului.<br /><br />

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Complexitate Timp (Caz Mediu)</h4>
                    O(n²)
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Avantaje</h4>
                    Ușor de înțeles și implementat
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Dezavantaje</h4>
                    Ineficient pentru liste mari
                </div>

            </div>

        </>

    )


    return (
        <ProblemPage
            problemName="Bubble Sort"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Insertion Sort" />
    )
}

export default BubbleSort