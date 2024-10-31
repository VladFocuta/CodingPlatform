import React from 'react'

function Home() {
    return (
        <div className='home-container'>
            <div className='center-content'>
                <h1>Welcome Home</h1>
            </div>
            <div className='info-container'>
                <div className='user-info'>
                    <h4>O facem din pasiune, <br />
                        Nu pentru compensare <br /><br />
                        Am început acest proiect din pasiunea pe care o împărtășim pentru programare dar și din dorința de a crea o platformă pentru toți cei care vor să învețe programarea de la zero sau pentru cei care vor să-și testeze cunoștințele.
                    </h4>
                </div>

                <div className='horizontal-line'></div>

                <div className='user-info'>
                    <h4>O facem din pasiune, <br />
                        Nu pentru compensare <br /><br />
                        Dacă găsești aceste probleme gratuite utile și vrei să ai acces la mai multe exerciții, poți consulta opțiunea de abonare. Toate veniturile din abonamente vor fi folosite pentru îmbunătățirea și menținerea site-ului.
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Home
