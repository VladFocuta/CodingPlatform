import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'

function ArborHamilEuler() {
    const problemContent = (
        <>
            <h4>Arbore</h4>
            Un arbore este un graf conex și fără cicluri. Cu alte cuvinte:<br />
            Conex → Orice două noduri sunt legate printr-un lanț.<br />
            Aciclic → Nu conține cicluri (nu există drumuri închise).<br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ borderTop: '1px dotted white', borderRight: '1px dotted white', borderBottom: '1px dotted white', padding: '5px' }}>
                    Acest graf este un arbore:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ &nbsp;&nbsp;\<br />
                    &nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3<br />
                    &nbsp;&nbsp;/&nbsp; \<br />
                    4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br />
                    Este conex (putem ajunge de la orice nod la oricare alt nod).<br />
                    Nu are cicluri (nu există drumuri închise).<br />
                </div>
                <div style={{ borderTop: '1px dotted white', borderLeft: '1px dotted white', borderBottom: '1px dotted white', padding: '5px' }}>
                    Acest graf NU este arbore, deoarece conține un ciclu:<br />
                    1 —— 2<br />
                    |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                    4 —— 3<br />
                    Este conex, dar are ciclul 1 → 2 → 3 → 4 → 1.
                </div>
            </div>
            Un arbore cu N noduri are exact N-1 muchii.<br />
            Dacă adăugăm o muchie la un arbore, obținem un ciclu.<br />
            Dacă eliminăm o muchie dintr-un arbore, graful devine neconex.<br />
            Un arbore este un graf „fără bucle”, în care toate nodurile sunt conectate.<br /><br />

            <h4>Graf hamiltonian</h4>
            Un graf hamiltonian este un graf care conține un ciclu hamiltonian.<br />
            Ciclu hamiltonian = Un ciclu care trece prin toate nodurile o singură dată (cu excepția primului și ultimului, care sunt identice).<br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ borderTop: '1px dotted white', borderRight: '1px dotted white', borderBottom: '1px dotted white', padding: '5px' }}>
                    Acest graf este hamiltonian deoarece are un ciclu hamiltonian:<br />
                    1 —— 2<br />
                    |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                    4 —— 3<br />
                    Ciclu hamiltonian posibil: 1 → 2 → 3 → 4 → 1<br />

                </div>
                <div style={{ borderTop: '1px dotted white', borderLeft: '1px dotted white', borderBottom: '1px dotted white', padding: '5px', minWidth: '150px' }}>
                    Acest graf NU este hamiltonian:<br />
                    1 —— 2 —— 3<br />
                    |<br />
                    4<br />
                    Nu există niciun ciclu care să viziteze toate nodurile o singură dată!
                </div>
            </div>
            Un graf hamiltonian are un drum închis care trece prin toate nodurile exact o dată.<br />
            Gradul unui vârf d(x) este numărul de muchii incident cu acel vârf.<br />
            Dacă pentru orice nod x, gradul său este cel puțin n / 2, atunci graful conține un ciclu hamiltonian.<br /><br />

            <h4>Graf eulerian</h4>
            Se numește graf eulerian un graf care conține un ciclu eulerian. Se numește ciclu eulerian un ciclu care conține toate muchiile grafului.<br />
            Un graf neorientat este eulerian dacă și numai dacă:<br />
            1. Este conex (nu are noduri izolate).<br />
            2. Toate vârfurile au grad par.<br />
            1 —— ——  3<br />
            | \ &nbsp;\ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/  <br />
            |&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ <br />
            |  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\  &nbsp;&nbsp;&nbsp;2<br />
            4 —— 5<br />
            Un graf eulerian are un drum închis care trece prin toate muchiile exact o dată!
        </>

    )
    return (
        <ProblemPage
            problemName="Arbore-Hamiltonian-Eulerian"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/quiz/Arbore" />
    )
}

export default ArborHamilEuler