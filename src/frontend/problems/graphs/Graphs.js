import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'

function Graphs() {
    const problemContent = (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4 >
                    Un graf este o structură de date formată din:<br />
                    Noduri (vârfuri) – reprezentate de cercuri (ex: 1, 2, 3, etc.)<br />
                    Muchii (laturi) – conexiuni între noduri (ex: 1 → 2)

                </h4>
                <div style={{ minWidth: '200px' }}>
                    Graful cu 5 noduri și 6 muchii:<br />
                    (1-2), (1-4), (2-3), (4-5), (3-5), (2-5)
                    <h4>
                        (1) --- (2) --- (3)<br />
                        &nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br />
                        (4) --- (5)
                    </h4>
                </div>
            </div>

            <h4>Tipuri de grafuri:</h4>
            <strong>1. Neorientat</strong>- conexiunile sunt bidirecționale (ex: 1 ↔ 2)<br />
            <strong>2. Orientat </strong>- conexiunile sunt unidirecționale (ex: 1 → 2)<br /><br />

        </>

    )


    return (
        <ProblemPage
            problemName="Grafuri"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Reprezentare si graduri" />
    )
}

export default Graphs