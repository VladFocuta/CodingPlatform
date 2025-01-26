import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'


function Matrix() {
    const problemHeader = (
        <h4 style={{ color: 'white', fontSize: '1.2rem' }}>
            O matrice este o structură bidimensională (un tabel) formată din rânduri și coloane, în care fiecare element este identificat printr-un set de coordonate. În termeni simpli, o matrice este un aranjament dreptunghiular de numere, simboluri sau expresii.<br />
            Exemplu de matrice A = 3 X 3:<br />
            1 2 3 <br /> 4 5 6 <br /> 7 8 9

        </h4>
    )

    const problemContent = (
        <>
            <h4 >
                Cum funcționează matricile?
            </h4>
            <strong style={{ letterSpacing: '0.1rem' }}>1. Indexarea elementelor:</strong> Fiecare element dintr-o matrice este identificat printr-un rând și o coloană.<br />
            De exemplu, în matricea A:<br />
            A[1][1]=1 (elementul de pe primul rând și prima coloană),<br />
            A[3][2]=8 (elementul de pe al treilea rând și a doua coloană).

            <strong style={{ letterSpacing: '0.1rem' }}>2. Operații pe matrici:</strong> Adunare și scădere: Două matrici pot fi adunate/scăzute element cu element dacă au aceleași dimensiuni.<br />
            Înmulțire: Se face prin combinarea rândurilor primei matrici cu coloanele celei de-a doua.<br />
            Transpunerea: Schimbarea rândurilor în coloane și invers.<br />
            Determinantul: Un scalar asociat unei matrici pătratice, util în ecuații liniare și algebră.<br /><br />
            <h4>La ce sunt utile matricile?</h4>
            <strong style={{ letterSpacing: '0.1rem' }}>1. Reprezentarea datelor:</strong>
            Matricile sunt utilizate pentru a reprezenta datele tabelare, cum ar fi foile de calcul, bazele de date, imaginile (unde fiecare element reprezintă un pixel) etc.
            <strong style={{ letterSpacing: '0.1rem' }}>2. Grafica computerizată:</strong>
            Matricile sunt folosite pentru transformările geometrice (rotații, translații, scalări) în jocuri video și grafică 3D.<br />
            <strong style={{ letterSpacing: '0.1rem' }}>3. Inteligență Artificială și Machine Learning:</strong>
            Rețelele neuronale și alte modele matematice lucrează cu matrici pentru a reprezenta seturi mari de date.<br />
            <strong style={{ letterSpacing: '0.1rem' }}>4. Știință și inginerie:</strong>
            Matricile sunt esențiale pentru rezolvarea ecuațiilor liniare, simularea fenomenelor fizice (ex: vibrații, căldură) și în analiza structurală.<br />
            <strong style={{ letterSpacing: '0.1rem' }}>5. Procesarea imaginilor și a semnalelor:</strong>
            Pentru operații precum detectarea marginilor, aplicarea filtrelor, recunoaștere facială etc.<br />
            <strong style={{ letterSpacing: '0.1rem' }}>6. Rețele și grafuri:</strong>
            Matricile de adiacență și incidență sunt utilizate pentru a reprezenta rețele precum internetul, grafurile sociale sau rutele dintr-o hartă.<br /><br />

            <h4>Exemple practice:</h4>
            <strong style={{ letterSpacing: '0.1rem' }}>1. Imagine (Reprezentată ca Matrice):</strong>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                Imaginea alb-negru poate fi stocată ca o matrice unde fiecare element reprezintă nivelul de gri:<br />
                Imagine =<br /> 0 255 255 <br /> 255 0 255 <br /> 255 255 0
            </div>

            <strong style={{ letterSpacing: '0.1rem' }}>2.  Transformare geometrică:</strong>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                Dacă avem un punct (x, y) într-un plan 2D și vrem să-l rotim cu un unghi 0, putem folosi o matrice de rotație:<br />
                Rotație: <br /> cos(0) -sin(0)<br /> sin(0) cos(0)
            </div>

            <strong style={{ letterSpacing: '0.1rem' }}>3. Social Media (Rețele):</strong>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                Matricile de adiacență sunt folosite pentru a reprezenta conexiunile dintre utilizatori:<br />
                Matrice de adiacență: <br /> 0 1 1 <br /> 1 0 0 <br /> 1 0 0 <br />
                Aici, 1 1 înseamnă că există o conexiune între doi utilizatori, iar 0 0 înseamnă că nu există.
            </div><br /><br />
            Matricile sunt unelte matematice extrem de versatile și sunt folosite în aproape orice domeniu care implică calcul sau modelare. Ele sunt fundamentale în multe aplicații practice din știință, tehnologie și inginerie.
        </>

    )


    return (
        <ProblemPage
            problemName="Matrici"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Declarare/Citire/Afisare" />
    )
}

export default Matrix