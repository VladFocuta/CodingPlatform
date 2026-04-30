import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function MaxCapacity() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: ['9', '1 8 6 2 5 4 8 3 7'], expected: '49' },
        { params: ['2', '1 2'], expected: '1' },
        { params: ['10', '3 99 0 5 12 33 44 92 29 2'], expected: '552' },
        { params: ['5', '3 99 0 5 12 '], expected: '36' },
    ];

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>
                    Suntem în anul 2050. Resursele de apă de pe planeta noastră sunt limitate din cauza schimbărilor climatice.
                    Sistemul de stocare a apei al unui oraș a evoluat în timp, ajungându-se la o configurație flexibilă formată din n pereţi verticali paraleli P<sub>1</sub>,P<sub>2</sub>,...P<sub>n</sub>.
                    Fiecare perete P<sub>i</sub> are forma unui dreptunghi cu înălțimea a<sub>i</sub> şi lăţimea de 1 km, iar oricare doi pereţi alăturaţi P<sub>i</sub>,P<sub>i+1</sub> se află la distanţa de 1 km, faţă în faţă.
                    Fiecare dintre acești pereți poate fi coborât complet, prin culisare pe verticală, iar un bazin poate fi format din oricare doi pereți P<sub>i</sub>,P<sub>j</sub> (rămaşi după coborârea tuturor celorlalți) şi din pereţi laterali, care întregesc conturul de bazin. Capacitatea unui bazin este dată de produsul dintre înălţimea peretelui celui mai mic dintre cei doi
                    P<sub>i</sub>,P<sub>j</sub> din care este format bazinul şi distanța dintre aceşti doi pereți. Sistemul de stocare poate fi descris de un șir de numere naturale a<sub>1</sub>,a<sub>2</sub>,....a<sub>n</sub> strict pozitive, unde a<sub>1</sub> reprezintă înălțimea în kilometri a peretelui P<sub>1</sub>, a<sub>2</sub> reprezintă înălțimea în kilometri a peretelui P<sub>2</sub> și așa mai departe. <br />
                    Scrieți un program care primește la intrare numărul de pereți n≥2 și înălțimile acestora a<sub>1</sub>,a<sub>2</sub>,...a<sub>n</sub>, iar apoi determină și scrie capacitatea maximă de apă care poate fi stocată în acel oraș.<br />
                    Pe prima linie se citește numărul n, iar pe a doua linie n numere naturale separate prin spații.<br />
                    Se va afișa capacitatea maximă de apă care poate fi stocată în acel oraș.

                    <br /><br />
                    Explicație pentru exemplul de mai jos:<br />
                    Peretele al doilea de înălțime 8 km și cel de-al nouălea de înălțime 7 km rămân ridicați (toți ceilalți fiind coborâți), ei determinând astfel bazinul de capacitate maximă care poate reține 49 km<sup>3</sup>
                     de apă.
                    <br /><br />
                    Mențiuni:<br />
                    2 ≤ n ≤ 100<br />
                    numerele de pe a doua linie a fișierului de intrare vor fi mai mici decât 100
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br />9 <br /> 1 8 6 2 5 4 8 3 7

                    </h4>
                    <h4> Date de iesire: <br />49
                    </h4>

                </div>


            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Capacitate maxima" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Capacitate maxima"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/bac/Subsiruri"
            testPassed={testPassed}
        />
    )
}

export default MaxCapacity