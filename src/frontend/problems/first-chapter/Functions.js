import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'


function Functions() {
    const problemHeader = (
        <h4>
            Hai să explicăm în detaliu cum funcționează o funcție JavaScript, utilizând exemplul funcției calcul.
        </h4>
    )

    const problemContent = (
        <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
            <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 1. Declarația funcției</strong>
                <br />
                În JavaScript, o funcție este un bloc de cod reutilizabil care execută o anumită sarcină. În cazul nostru,<strong className='highlight'>funcția calcul(a, b)</strong>  este definită pentru a aduna două numere și a returna rezultatul.
                In cazul in care trebuie sa returnam mai multe variabile, folosim parantezele patrate <strong className='highlight'>[ ]</strong>, si inauntru lor adaugam variabilele pe care dorim sa le returnam <strong className='highlight'>[a, b]</strong>.
                <br /> <br />
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <CodeStyle code={`function calcul(a, b) {
    let result = a + b;
    return result;
}`} />
                    <CodeStyle code={`function calcul(a, b) {
    return [a, b];
}`} />
                </div>

                <br /> <br />
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> a. Cuvântul cheie function <br /></strong>
                Cuvântul <strong className='highlight'>function</strong> este utilizat pentru a declara o funcție. După acest cuvânt, urmează numele funcției și o listă de parametri între paranteze.<br /><br />
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> b. Parametri (a, b) <br /></strong>
                Parametrii sunt variabile care sunt trimise în funcție atunci când este apelată. În exemplul nostru, <strong className='highlight'>functia calcul</strong> primește doi parametri, a și b, care sunt numerele pe care le vom aduna.<br /><br />
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> c. Corpul funcției &#123;
                    &#125; <br /></strong>
                Tot ce este scris între acolade &#123;
                &#125; reprezintă corpul funcției, adică blocul de cod care este executat atunci când funcția este apelată. În acest caz, se adună cele două numere și se stochează rezultatul în variabila <strong className='highlight'>result</strong>.
                <br /><br />
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 2. Variabila result</strong> <br />
                <strong className='highlight'> let result = a + b;</strong><br /> Aici, creăm o variabilă locală <strong className='highlight'>result</strong> cu ajutorul cuvântului cheie <strong className='highlight'>let</strong>. Această variabilă este locală funcției, ceea ce înseamnă că poate fi accesată doar în interiorul funcției. <br />
                Calculul a + b este efectuat și rezultatul este stocat în variabila result. Dacă a este 2 și b este 10, valoarea result va fi 12.<br /><br />

                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 3. Instrucțiunea return</strong><br />
                <strong className='highlight'> return result</strong><br />
                <strong className='highlight'> return</strong> este un cuvânt cheie special care determină valoarea pe care funcția o va "întoarce" atunci când este apelată.
                În cazul nostru, instrucțiunea <strong className='highlight'> return result</strong>; înseamnă că atunci când funcția este apelată, ea va returna rezultatul calculului dintre a și b.<br /><br />
                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 4. Apelarea funcției</strong> <br />
                Pentru a folosi o funcție, trebuie să o apelezi. Asta înseamnă că o execuți și îi dai valorile pentru parametrii săi. În cazul nostru, apelăm funcția <strong className='highlight'> calcul(2, 10)</strong> și îi dăm valorile 2 și 10 pentru parametrii a și b.<br />
                <strong className='highlight'> console.log(calcul(2, 10));</strong><br />
                Funcția este apelată cu argumentele 2 și 10. Aceste valori sunt transmise parametrilor a și b.<br />
                Rezultatul adunării 2 + 10 este 12, iar acest rezultat este întors (returnat) de funcția calcul.<br /><br />

                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> 5. Afișarea rezultatului cu console.log</strong><br />
                <strong className='highlight'> console.log()</strong> este o funcție încorporată în JavaScript care afișează orice valoare în consola browserului sau a mediului de execuție.<br />
                Prin urmare, <strong className='highlight'> console.log(calcul(2, 10))</strong> va afișa valoarea întoarsă de funcția calcul, care este 12.<br /><br />

                <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Cum funcționează totul pas cu pas:</strong><br />
                1.Declarația funcției: JavaScript înregistrează funcția <strong className='highlight'> calcul</strong> pentru a putea fi folosită ulterior.<br />
                2.Apelul funcției: Când ajungem la instrucțiunea  <strong className='highlight'> calcul(2, 10)</strong>, funcția este executată.<br />
                3.Executarea codului:<br />
                Parametrii a și b primesc valorile 2 și 10.<br />
                Variabila <strong className='highlight'> result</strong> este creată și stochează valoarea a + b, care este 12.<br />
                Instrucțiunea <strong className='highlight'> return result</strong> întoarce valoarea 12 din funcție.<br />
                4.Afișarea rezultatului: <strong className='highlight'> console.log(12)</strong> afișează valoarea 12 în consolă.
            </div>
        </div>
    )


    return (
        <ProblemPage
            problemName="Functii"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            nextRoute="/ConsoleLog"
            lecture={true} />

    )

}

export default Functions