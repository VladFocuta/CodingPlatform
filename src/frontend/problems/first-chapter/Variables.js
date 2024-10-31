import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'


function Variables() {
    const problemHeader = (
        <>
            <p>
                In acest curs, limbajul pe care il veti invata, cel putin de inceput, este Javascript.
                În JavaScript, variabilele pot fi de mai multe tipuri, iar cele mai comune sunt:
            </p>
        </>
    )

    const problemContent = (
        <>
            <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 1. string (șiruri de caractere)
                </strong>
                <br />
                Reprezintă text și este înconjurat de ghilimele simple (' ') sau duble (" ").
                <br />
                let nume = "Ana";
                <br />
                let mesaj = 'Salut, cum ești?';
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}>2. number (numere)
                </strong>
                <br />
                Pot fi atât întregi, cât și numere zecimale.
                <br />
                let varsta = 25;
                <br />
                let temperatura = 36.6;
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}>3.boolean (adevărat sau fals) </strong>
                <br />
                Acest tip are doar două valori: true sau false, folosite de obicei pentru decizii logice.
                <br />
                let esteStudent = true;
                <br />
                let arePermis = false;
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}>4. undefined </strong>
                <br />
                O variabilă căreia nu i s-a atribuit încă o valoare.
                <br />
                let necunoscut;
                <br />
                console.log(necunoscut); // undefined
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}>5. null </strong>
                <br />
                Reprezintă intenționat o valoare "goală" sau "nulă".
                <br />
                let valoareNula = null;
            </div>

            <div style={{ background: 'grey', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}>6. object (obiecte) </strong>
                <br />
                Obiectele stochează mai multe valori într-o singură structură, sub formă de perechi cheie-valoare.
                <br />
                let persoana = &#123; <br />
                &nbsp;&nbsp;nume: "Ion",<br />
                &nbsp;&nbsp;varsta: 30
                &#125;

            </div>

        </>
    )

    const problemEnd = (
        <>
            <strong className='common-text'>
                Acestea sunt principalele tipuri de variabile din JavaScript, fiecare având roluri și utilizări diferite.
                Nu trebuie sa va faceti griji ca nu le veti intelege. Vom lucra cu fiecare in parte, pas cu pas.
            </strong>
        </>
    )
    return (
        <>
            <ProblemPage
                problemName="Variables"
                problemPoints={2}
                problemEnd={problemEnd}
                problemContent={problemContent}
                problemHeader={problemHeader}
                lecture={true}
                nextRoute="/Operators" />

        </>
    )
}

export default Variables