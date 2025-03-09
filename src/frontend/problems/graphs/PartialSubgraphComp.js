import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'

function PartialSubgraphComp() {
    const problemContent = (
        <>
       <h4>Graf parțial</h4>
            Un graf parțial al unui graf neorientat se obține păstrând toate vârfurile (nodurile) și eliminând unele dintre muchii (sau chiar niciuna).<br />
            Cu alte cuvinte, un graf parțial are aceleași noduri ca graful inițial, dar mai puține (sau aceleași) muchii.
            <strong>Exemplu:</strong>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    Considerăm graful neorientat G = (X, U), unde: <br />
                    Mulțimea vârfurilor (X): &#123;1, 2, 3, 4&#125;<br />
                    Mulțimea muchiilor (U): &#123;(1, 2), (2, 3), (3, 4), (4, 1), (1, 3)&#125;
                </div>
                <div style={{ minWidth: '100px' }}>
                    (1) — (2)<br />
                    | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\ &nbsp;&nbsp;|<br />
                    (4) — (3)
                </div>
            </div><br />

            <h4>Subgraf</h4>
            Un subgraf al unui graf orientat se obține:<br />
            Ștergând unele noduri (vârfuri) din graful inițial.<br />
            Păstrând doar arcele (muchiile orientate) care au ambele capete în noua mulțime de noduri.<br />
            <strong> Observații importante:</strong>
            X₁ ⊆ X – Nodurile din subgraf sunt o submulțime a nodurilor grafului inițial.<br />
            U₁ ⊆ U – Arcele din subgraf sunt acele arce din graful original care leagă noduri din X₁.<br />
            Nu poți șterge toate nodurile – altfel n-ar mai exista un graf.<br /><br />
            <div style={{ display: ' flex', justifyContent: 'space-between' }}>
                <div >
                    <strong>Exemplu</strong><br />
                    <div style={{ borderBottom: '1px dotted white' }}>
                        Graful orientat (G):
                    </div>
                    Noduri (X): &#123;A, B, C, D, E&#125;<br />
                    Arce (U): &#123;(A → B), (B → C), (C → D), (A → E)&#125;<br />
                </div>
                <div style={{ minWidth: '150px' }}>
                    A → B → C → D<br />
                    ↓<br />
                    E
                </div>

            </div><br />

            <div style={{ display: ' flex', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ borderBottom: '1px dotted white' }}>
                        Subgraful grafului G:
                    </div>
                    Alegem X₁ = &#123;A, B, C&#125; (am eliminat D și E).<br />
                    Păstrăm doar arcele care au ambele capete în X₁:<br />
                    U1 = &#123;(A→B),(B→C)&#125;<br />
                </div>
                <div>
                    <div style={{ borderBottom: '1px dotted white' }}>
                        Reprezentarea subgrafului:<br />
                    </div>
                    A → B → C<br />
                    Am eliminat:<br />
                    Nodurile D și E.<br />
                    Arcele (C → D), (A → E), deoarece cel puțin o extremitate nu este în X₁.<br />
                </div>
            </div>

            <div style={{ display: ' flex', justifyContent: 'space-around', border: '1px solid white', padding: '5px' }}>
                <div style={{ borderRight: '1px dotted white', padding: '3px' }}>
                    <div style={{ borderBottom: '1px dotted white' }}>
                        Caracteristică
                    </div>
                    Tipul grafului<br />
                    Ce se elimină?<br />
                    Păstrează vârfurile?<br />
                    Exemplu grafic<br />
                </div>
                <div style={{ borderRight: '1px dotted white', borderLeft: '1px dotted white', padding: '3px' }}>
                    <div style={{ borderBottom: '1px dotted white' }}>
                        Graf Parțial
                    </div>
                    Graf neorientat<br />
                    Doar muchii<br />
                    Toate vârfurile<br />
                    Eliminăm laturi<br />
                </div>
                <div style={{ borderLeft: '1px dotted white', padding: '3px' }}>
                    <div style={{ borderBottom: '1px dotted white' }}>
                        Subgraf
                    </div>
                    Graf orientat<br />
                    Noduri și arce<br />
                    O submulțime de vârfuri<br />
                    Eliminăm noduri + arcele lor<br />
                </div>
            </div>
            Rezumat: Un subgraf se obține dintr-un graf orientat prin:<br />
            Alegerea unei submulțimi de noduri.<br />
            Păstrarea arcelor care conectează nodurile selectate.<br /><br />

            <h4>Graf complementar</h4>
            Graful complementar al unui graf neorientat se obține astfel:<br />
            1. Păstrăm aceleași noduri.<br />
            2. Adăugăm doar muchiile care NU existau în graful inițial.<br />
            3. Dacă două noduri erau conectate în graful original, atunci în complement nu vor fi conectate.<br />
            <strong>Exemplu concret</strong>
            <div style={{ borderBottom: '1px dotted white', maxWidth: '200px' }}>
                Graful inițial G:
            </div>
            Noduri: &#123;1, 2, 3, 4&#125;<br />
            Muchii: &#123;(1,2), (2,3), (3,4)&#125;<br />
            1 — 2 — 3 — 4<br /><br />
            <div style={{ borderBottom: '1px dotted white', maxWidth: '200px' }}>
                Graful complementar G1:<br />
            </div>
            Păstrăm aceleași noduri: &#123;1, 2, 3, 4&#125;<br />
            Conectăm doar nodurile care NU aveau muchii înainte.<br />
            Muchii în G1: &#123;(1,3), (1,4), (2,4)&#125;<br />
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2<br />
            |&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
            |&nbsp;&nbsp;&nbsp;&nbsp;\ &nbsp;&nbsp;&nbsp;|<br />
            | &nbsp; &nbsp; &nbsp;\ &nbsp;|<br />
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4<br />
            Graful complementar se obține inversând conexiunile:<br />
            Dacă două noduri erau legate, acum NU mai sunt.<br />
            Dacă două noduri NU erau legate, acum vor fi legate.<br /><br />
            <strong>Important</strong>
            Un graf neorientat poate avea mai multe grafuri parțiale și subgrafuri, dar doar un singur graf complementar.<br />
            Dacă avem un graf cu 3 muchii, putem alege să păstrăm sau să eliminăm fiecare muchie, rezultând 2³ = 8 grafuri parțiale.<br />
            <div>
                Dacă avem un graf cu 4 vârfuri, putem avea 2<sup>4</sup> - 1 = 15 subgrafuri.
            </div>
            Dacă avem un graf cu 4 noduri și 3 muchii, atunci graful complementar va avea toate muchiile care lipsesc. Nu putem avea altă variantă.<br /><br />
        </>
    )
    return (
        <ProblemPage
            problemName="Partial-Subgraf-Complementar"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/quiz/Partial" />
    )
}

export default PartialSubgraphComp