import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function If() {
    const problemHeader = (
        <>
            <p>
                Definiția lui if în C++<br />
                if este o instrucțiune condițională care permite executarea unui bloc de cod doar dacă o condiție este adevărată.
            </p>
        </>
    )

    const problemContent = (
        <>
            <h4>
                Structura generală:
            </h4>
            <CodeStyle code={`if (condiție) {
    // cod executat dacă condiția este adevărată (true)
}`} />

            <h4>
                Exemplu simplu:<br />
            </h4>

            <CodeStyle code={`int varsta = 18;

if (varsta >= 18) {
    cout << "Ești major.";
}`} />

            <p>
                Afișează mesajul doar dacă valoarea din varsta este mai mare sau egală cu 18.
            </p>

            <h4>Adăugarea lui else și else if</h4>


            <CodeStyle code={`if (nota >= 5) {
    cout << "Ai promovat.";
} else {
    cout << "Ai picat.";
}`} />
            <CodeStyle code={`if (x > 0) {
    cout << "Pozitiv";
} else if (x < 0) {
    cout << "Negativ";
} else {
    cout << "Zero";
}
`} />


            <h4>Rezumat:</h4>
            <p>if = verifică "Dacă..."</p>
            <p>else if = altă condiție dacă prima nu e adevărată</p>
            <p>else = în toate celelalte cazuri</p>

            <h4>Analogie din viața reală:</h4>
            <p>Dacă plouă, ia umbrela.<br />
                Altfel, mergi fără umbrelă.</p>
            <p>Programul decide ce face în funcție de condiție, exact cum facem noi în viață.</p>
        </>
    )
    return (
        <ProblemPage
            problemName="If-structura alternativa"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            nextRoute="/problems/Interschimbare"
            lecture={true}
        />
    )
}

export default If