import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function MatrixDetails() {
    const problemHeader = (
        <h4 style={{ color: 'white', fontSize: '1.2rem' }}>
            Cum se citește și se afișează o matrice?<br />
            1. Citirea unei matrici: Folosim un for dublu pentru a parcurge toate rândurile și coloanele.<br />
            2. Afișarea unei matrici: Similar, parcurgem toată matricea și afișăm fiecare element.<br />
        </h4>
    )

    const problemContent = (
        <>
            <h4>Exemplu de citire a unei matrici:</h4>
            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int matrice[3][3];

    // Citirea elementelor matricei
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cin >> matrice[i][j];  // Citirea fiecărui element
        }
    }

    // Afișarea elementelor matricei
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cout << matrice[i][j] << " ";  // Afișarea fiecărui element
        }
        cout << endl;  // Mergem la următorul rând
    }

    return 0;
}`} />
            <h4>Explicația codului:</h4>
            Citim matricea 3x3 din input folosind două bucle for imbricate: una pentru rânduri și una pentru coloane.<br />
            După ce am citit toate elementele, le afișăm tot folosind două bucle for imbricate, adăugând un endl pentru a trece la un nou rând după ce am afisat un rând complet al matricei.
        </>
    )
    return (
        <ProblemPage
            problemName="Declarare/Citire/Afisare"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Suma elementelor" />
    )

}

export default MatrixDetails