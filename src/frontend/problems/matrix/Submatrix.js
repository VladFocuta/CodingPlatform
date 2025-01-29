import React, { useState } from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';

function Submatrix() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['4', '5', '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20', '2', '2', '4', '4'], expected: '7 8 9 12 13 14 17 18 19' },
        { params: ['3', '3', '1 2 3 4 5 6 7 8 9', '2', '2', '2', '2'], expected: '5' },
        { params: ['5', '5', '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25', '3', '3', '5', '5'], expected: '13 14 15 18 19 20 23 24 25' },
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Se da o matrice de dimensiunea N x M, unde N reprezinta numarul de randuri, iar M reprezinta numarul de coloane.<br />
                    De asemenea, se dau coordonatele unui dreptunghi in matrice, definite prin colturi opuse: (x1, y1) si (x2, y2).Scrie un program care extrage submatricea corespunzatoare acestui dreptunghi si o afiseaza.
                    <br />
                    Pe prima linie se citesc doua numere intregi N si M (1 ≤ N, M ≤ 100), reprezentand dimensiunile matricei.<br />
                    Urmatoarele N linii contin cate M numere intregi, reprezentand elementele matricei.<br />
                    Pe ultima linie, patru numere intregi x1, y1, x2, y2 (1 ≤ x1 ≤ x2 ≤ N si 1 ≤ y1 ≤ y2 ≤ M), reprezentand coordonatele dreptunghiului.
                    Programul va afisa submatricea definita de dreptunghiul dat, fiecare rand pe o linie separata.
                    <br /><br />
                    <h4 style={{color: 'red'}}>Mentiuni: </h4> Trebuie sa ajustam coordonatele pentru indexarea de la 0.<br />
                    x1,y1,x2,y2 = rand de inceput, coloana de inceput, randul de sfarsit, coloana de sfarsit.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 4 5<br /> 1 2 3 4 5 <br /> 6 7 8 9 10 <br /> 11 12 13 14 15 <br /> 16 17 18 19 20<br /> 2 2 4 4
                        <br />
                    </h4>
                    <h4> Date de iesire:<br /> 7 8 9<br /> 12 13 14 <br />17 18 19
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Extragerea unei submatrici" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Extragerea unei submatrici"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Matrice de identitate"
            testPassed={testPassed}
        />
    )
}

export default Submatrix