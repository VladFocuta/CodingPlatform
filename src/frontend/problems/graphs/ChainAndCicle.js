import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'

function ChainAndCicle() {
    const problemContent = (
        <>
            <h4>Conexitate</h4>
            <h5 style={{ borderBottom: '1px dotted white', maxWidth: '200px' }}>Lanț</h5>
            Un lanț este o succesiune de vârfuri unde fiecare două vârfuri consecutive sunt conectate printr-o muchie.<br />
            Avem următorul graf:<br />
            1 —— 2 —— 3<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4<br />
            1. Lanț L = [1, 2, 3]<br />
            Extremități: 1 și 3<br />
            Lungimea: 2 (număr muchii)<br />
            2. Lanț L = [1, 2, 4]<br />
            Extremități: 1 și 4<br />
            Lungimea: 2<br /><br />

            <h5>Tipuri de lanțuri</h5>
            <strong>Lanț elementar - conține doar vârfuri distincte</strong>
            Exemplu: [1, 2, 3]<br />
            Nu este elementar: [1, 2, 1] (repetă nodul 1)<br />
            <strong>Lanț simplu – conține doar muchii distincte</strong>
            Exemplu: [1, 2, 3]<br />
            <strong>Lanț compus: [1, 2, 3, 2, 4] (repetă muchia 2 → 3)</strong><br />
            <h5>Concluzie:</h5>
            Un lanț leagă vârfuri consecutive prin muchii.<br />
            Elementar = fără vârfuri repetate.<br />
            Simplu = fără muchii repetate.<br />
            Compus = muchii repetate.<br /><br />

            <h5 style={{ borderBottom: '1px dotted white', maxWidth: '200px' }}>Ciclu</h5>
            Un ciclu este un lanț simplu care începe și se termină în același nod.<br />
            1 —— 2<br />
            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
            4 —— 3<br />
            <strong>Ciclu elementar (toate nodurile distincte, mai puțin primul și ultimul):</strong>
            C = [1, 2, 3, 4, 1]<br />
            Lungime: 4 (număr muchii)<br />
            Este un ciclu par (4 este număr par)<br />
            C = [2, 3, 4, 2]<br />
            Lungime: 3<br />
            Este un ciclu impar (3 este număr impar)<br />
            <strong>Un graf aciclic este un graf care nu conține cicluri.</strong><br />
            <h5>Concluzie:</h5>
            Ciclu = lanț care revine la nodul de start.<br />
            Elementar = fără noduri repetate (exceptând primul și ultimul).<br />
            Par/Impar = în funcție de numărul de muchii.<br />
            Graf aciclic = fără cicluri.<br /><br />

        </>

    )


    return (
        <ProblemPage
            problemName="Conexitate-Lant-Ciclu"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/quiz/Lant" />
    )
}

export default ChainAndCicle