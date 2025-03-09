import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'

function ConexComponentsBiconex() {
    const problemContent = (
        <>
       <h4>Graf conex</h4>
            Un graf neorientat este conex dacă există un lanț între orice două noduri. Cu alte cuvinte, toate nodurile sunt conectate direct sau indirect.<br />
            Graful de mai jos este conex, deoarece putem ajunge de la orice nod la orice alt nod:<br />
            1 —— 2 —— 3<br />
            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
            4 —— 5<br />
            Acest graf nu este conex, deoarece nodul 6 este izolat:<br />
            1 —— 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6<br />
            |<br />
            3 —— 4<br /><br />
            <h5>Concluzie:</h5>
            Un graf cu un singur nod este conex (nu există alt nod de care să fie deconectat).<br />
            Un graf conex nu trebuie să fie complet (adică nu toate nodurile trebuie să fie direct legate, doar să existe un lanț între ele).<br />
            Dacă există noduri izolate, graful nu este conex.<br />
            Un graf este conex dacă putem ajunge de la orice nod la oricare alt nod.<br /><br />

            <h4>Componente conexe</h4>
            O componentă conexă este o parte a unui graf care este conexă (toate nodurile sale sunt legate între ele) și maximală (nu putem adăuga alt nod fără să stricăm conexitatea).<br />
            1 —— 2&nbsp;&nbsp;&nbsp;&nbsp;5 —— 6<br />
            |<br />
            3 —— 4<br />
            Componentele conexe sunt:<br />
            &#123;1, 2, 3, 4&#125; → Toate nodurile sunt conectate între ele.<br />
            &#123;5, 6&#125; → Sunt conectate între ele, dar nu cu &#123;1, 2, 3, 4&#125;.
            <h5>Concluzie:</h5>
            Dacă un graf este conex, el are o singură componentă conexă.<br />
            Dacă un graf nu este conex, el are mai multe componente conexe.<br />
            Un nod izolat este și el o componentă conexă.<br />
            O componentă conexă este o „insulă” de noduri conectate între ele.<br />
            <h4>Graf biconex</h4>
            Un graf biconex este un graf conex care rămâne conex chiar dacă eliminăm orice nod.<br />
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dotted white' }}>
                <div style={{ minWidth: '130px' }}>
                    1 —— 2 —— 3<br />
                    |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                    4 —— 5 —— 6<br />
                </div>
                <div style={{ alignSelf: 'center' }}>
                    Dacă ștergem orice nod, restul nodurilor rămân conectate!<br />
                </div>
            </div>
            <div style={{ borderBottom: '1px dotted white' }}>
                Acest graf NU este biconex, deoarece eliminarea nodului 2 îl deconectează:<br />
                1 —— 2 —— 3<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4<br />
                Dacă eliminăm nodul 2, nodurile 1 și 3 nu mai sunt conectate!
            </div>
            Un graf complet este întotdeauna biconex.<br />
            Orice ciclu este biconex (nu putem deconecta graful prin eliminarea unui singur nod).<br />
            Un graf care conține un punct de articulație (nod a cărui eliminare rupe conexitatea) NU este biconex.<br />
            Un graf biconex nu poate fi „spart” prin eliminarea unui singur nod. <br /><br />
        </>
    )
    return (
        <ProblemPage
            problemName="Conex-Componente conexe-Biconex"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/quiz/Conex" />
    )
}

export default ConexComponentsBiconex