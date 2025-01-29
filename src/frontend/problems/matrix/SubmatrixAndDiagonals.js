import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'

function SubmatrixAndDiagonals() {


    const problemContent = (
        <>
            <h4>Ce este o matrice?</h4>
            <p>
                O matrice este o structură bidimensională de date, organizată în rânduri și coloane, unde fiecare element este identificat printr-un set de coordonate.
                De exemplu, matricea A:<br />
                <strong>A =</strong><br />
                1 2 3 <br />
                4 5 6 <br />
                7 8 9<br />
            </p>

            <h4>1. Diagonala principală</h4>
            <p>
                Diagonala principală este formată din elementele matricei aflate pe pozițiile unde indicele rândului este egal cu indicele coloanei.<br />
                <strong>Exemplu:</strong> În matricea A de mai sus, diagonala principală este: **1, 5, 9**.<br />
                <strong>Formula:</strong> <code>matrice[i][i]</code>
            </p>

            <h4>2. Diagonala secundară</h4>
            <p>
                Diagonala secundară este formată din elementele aflate pe pozițiile unde suma indicilor rândului și coloanei este egală cu dimensiunea matricei minus 1.<br />
                <strong>Exemplu:</strong> În matricea A, diagonala secundară este: **3, 5, 7**.<br />
                <strong>Formula:</strong> <code>matrice[i][n - 1 - i]</code>
            </p>

            <h4>3. Submatricile</h4>
            <p>
                O submatrice este o porțiune dintr-o matrice, definită de un grup de rânduri și coloane consecutive.<br />
                <strong>Exemplu:</strong> Din matricea A, o submatrice 2x2 poate fi:<br />
                1 2 <br />
                4 5<br />
            </p>
            <p>
                Pentru extragerea unei submatrici, trebuie să specificăm rândurile și coloanele de început, precum și dimensiunea dorită.
            </p>

            
        </>
    )

    return (
        <ProblemPage
            problemName="Diagonale si submatrici"
            problemPoints={1}
           
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Diferenta diagonalei principale" />
    )
}

export default SubmatrixAndDiagonals
