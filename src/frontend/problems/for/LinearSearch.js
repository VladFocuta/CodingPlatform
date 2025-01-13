import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function LinearSearch() {
    const problemContent = (
        <>
            <h4 >
            Căutare liniară
            </h4>
            Căutarea liniară verifică fiecare element al array-ului unul câte unul până când găsește elementul căutat sau ajunge la final.

            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int arr[7] = {4, 2, 9, 7, 1, 5, 8}; // Array-ul în care căutăm
    int n = 7; // Numărul de elemente
    int target; // Elementul pe care vrem să îl căutăm

    cin >> target;

    int index = -1; //Presupunem că nu găsim elementul

    int i = 0;
    while (i < n) { // Parcurgem array-ul
        if (arr[i] == target) {
            index = i; // Salvăm poziția unde l-am găsit
            i = n; // Ieșim din buclă
        }
        i++;
    }

    if (index != -1) {
        cout << "Elementul " << target << " a fost gasit la indexul " << index << endl;
    } else {
        cout << "Elementul nu a fost gasit in array." << endl;
    }

    return 0;
}`} />

            <h4>Explicația codului</h4>
            1. Citește un număr de la utilizator.<br />
            2. Parcurge array-ul element cu element.<br />
            3. Dacă găsește elementul căutat, salvează poziția și iese din buclă.<br />
            4. Dacă nu îl găsește, afișează un mesaj corespunzător.<br /><br />
           

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Complexitate Timp</h4>
                    Cel mai bun caz: O(1) (găsit la început)<br />
                    Cel mai rău caz: O(n) (găsit la final sau nu există)
                </div>


            </div>

        </>

    )


    return (
        <ProblemPage
            problemName="Linear Search"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Binary Search" />
    )
}

export default LinearSearch