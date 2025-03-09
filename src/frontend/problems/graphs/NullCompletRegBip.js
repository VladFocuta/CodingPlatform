import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'

function NullCompletRegBip() {
    const problemContent = (
        <>
       <h4>Graf nul</h4>
            Un graf neorientat se numește graf nul dacă mulțimea muchiilor este vidă.<br />
            Într-un graf nul toate vârfurile sunt izolate.<br /><br />

            <h4>Graf complet</h4>
            Un graf complet este un graf neorientat în care orice două vârfuri sunt conectate printr-o muchie.<br />
            <strong>Exemplu de graf complet cu 4 vârfuri (K₄):</strong>
            1 —— &nbsp;2<br />
            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
            3 —— &nbsp;4<br />
            Fiecare nod este conectat la toate celelalte.<br /><br />
            <strong>Câte muchii are un graf complet cu n vârfuri?</strong>
            Un graf complet cu n vârfuri (Kₙ) are n(n-1)/2 muchii.
            <strong>Exemplu pentru K₅ (5 vârfuri):</strong>
            Vârfuri: &#123;1, 2, 3, 4, 5&#125;<br />
            Muchii: &#123;(1,2), (1,3), (1,4), (1,5), (2,3), (2,4), (2,5), (3,4), (3,5), (4,5)&#125;<br />
            Total muchii = 5(5-1)/2 = 10<br />
            Pe scurt: Într-un graf complet fiecare nod este conectat la toate celelalte! <br /><br />

            <h4>Graf regulat</h4>
            Un graf în care toate nodurile au acelaşi grad se numește graf regulat.<br /><br />

            <h4>Graf bipartit</h4>
            Un graf bipartit este un graf în care putem împărți nodurile în două grupuri (A și B) astfel încât orice muchie leagă un nod din A de un nod din B (nu există muchii în interiorul aceluiași grup).<br />
            <strong>Exemplu</strong>
            Avem două grupuri:<br />
            A = &#123;1, 3, 5&#125;<br />
            B = &#123;2, 4, 6&#125;<br />
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;(A)<br />
            | \ &nbsp;&nbsp;&nbsp;&nbsp;/ \&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;|<br />
            | &nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
            | /&nbsp;&nbsp;&nbsp;\ &nbsp; /&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;|<br />
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;(B)<br />
            Observație: Nu există muchii între nodurile din același grup!<br />
            Într-un graf bipartit, nodurile se împart în două grupuri, iar muchiile apar doar între aceste grupuri!<br /><br />
        </>
    )
    return (
        <ProblemPage
            problemName="Nul-Complet-Regulat-Bipartit"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/quiz/Nul" />
    )
}

export default NullCompletRegBip