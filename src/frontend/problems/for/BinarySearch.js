import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function BinarySearch() {
    const problemContent = (
        <>
            <h4 >
                Căutare binară
            </h4>
            Căutarea binară este mult mai eficientă, dar funcționează doar pe un array sortat. Aceasta:<br />
            1. Verifică elementul de mijloc.<br />
            2. Dacă este numărul căutat, se oprește.<br />
            3. Dacă nu, elimină jumătate din elemente și repetă procesul.

            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int arr[7] = {1, 2, 4, 5, 7, 8, 9}; // Array-ul trebuie să fie SORTAT
    int n = 7; // Numărul de elemente
    int target;

    cin >> target;

    int left = 0, right = n - 1;
    int index = -1; // Inițial, presupunem că nu găsim elementul

    while (left <= right) {
        int mid = (left + right) / 2; // Calculăm mijlocul

        if (arr[mid] == target) { // Dacă l-am găsit
            index = mid;
            break;
        } 
        else if (arr[mid] < target) { // Dacă elementul căutat este mai mare, ne uităm în dreapta
            left = mid + 1;
        } 
        else { // Dacă este mai mic, ne uităm în stânga
            right = mid - 1;
        }
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
            2. Inițializează două limite: left (stânga) și right (dreapta).<br />
            3. Calculează mijlocul și compară cu numărul căutat.<br />
            4. Redefinește limitele și continuă căutarea doar într-o jumătate a array-ului.<br />
            5. Se repetă până când:<br />
            &nbsp;Găsește elementul<br />
            &nbsp;left depășește right și concluzia este că elementul nu există.<br /><br />


            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Complexitate Timp</h4>
                    Cel mai bun caz: O(1) (numărul e exact la mijloc)<br />
                    Cel mai rău caz: O(log n) (se înjumătățește de fiecare dată)
                </div>

            </div><br />
            <h4>Comparație între căutarea liniară și binară</h4>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Metodă</h4>
                    Liniară<br />
                    Binară
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Când o folosim?</h4>
                    Array mic sau nesortat<br />
                    Array mare și sortat
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Complexitate</h4>
                    O(n)<br />
                    O(log n)
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4>Sortare necesară?</h4>
                    ❌ Nu<br />
                    ✅ Da
                </div>

            </div>
        </>

    )


    return (
        <ProblemPage
            problemName="Binary Search"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/Main" />
    )
}

export default BinarySearch