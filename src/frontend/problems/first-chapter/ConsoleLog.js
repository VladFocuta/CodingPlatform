import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function ConsoleLog() {

  const problemHeader = (
    <>
      <p>
        Pentru a afisa ceva in Javascript, cea mai simplă metodă este să folosești funcția console.log(). Aceasta este o funcție foarte utilă care îți permite să afișezi orice informație în consola browserului sau a mediului de execuție (de exemplu, Node.js). Este cel mai des folosită în timpul dezvoltării pentru a depana codul și a verifica valorile variabilelor sau rezultatele unor operații.
      </p>
    </>
  )

  const problemContent = (
    <>
      <h4 style={{ color: 'white' }}>
        Explicație simplă:
        console.log() este ca o "fereastră de diagnosticare" pentru programatori. Îți permite să vezi direct în consola browserului ce valori au variabilele sau rezultatele funcțiilor.
        Poți afișa texte simple, numere, obiecte, array-uri și chiar rezultate complexe.
      </h4>

      <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>

        <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
          <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Afișează un mesaj text:</strong>
          <CodeStyle code={`console.log("Salut, lume!");`} />
        </div>

        <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
          <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Afișează un număr:</strong>
          <CodeStyle code={`console.log(42);`} />
        </div>

        <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
          <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Afișează rezultatul unei operații:</strong>
          <CodeStyle code={`console.log(5 + 3); // va afișa 8`} />
        </div>

        <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
          <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}> Afișează conținutul unui obiect:</strong>
          <CodeStyle code={`let persoana = {
  nume: "Ion",
  varsta: 30
}
 console.log(persoana);`} />
        </div>
      </div>

      <h4 style={{ color: 'white', marginTop: '10px' }}>
        Ca sa putem folosi console.log(), ar trebui sa ne folosim de o functie care ne va ajuta sa rulam codul scris de noi.

      </h4>

      <div style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
        <strong style={{ color: '#00bfff', background: '#696969', padding: '3px', borderRadius: '5px' }}>Exemplu de functie:</strong>
        <CodeStyle code={`function calcul(a, b) {
  let result = a + b; 
  return result;    
}
console.log(calcul(2, 10));`} />

      </div>
      <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>

        <h4 style={{ color: 'white', marginTop: '10px' }}>
          1.function calcul(a, b) <br />Aceasta definește o funcție numită calcul, care primește doi parametri, a și b. O funcție este un bloc de cod reutilizabil care poate efectua o acțiune specifică. În acest caz, funcția efectuează o adunare.
          <br /> <br />
          2.Parametrii a și b <br /> Aceștia sunt valorile care vor fi furnizate funcției atunci când este apelată. Ei reprezintă numerele care vor fi adunate.
          <br /> <br />
          3.let result = a + b <br /> În interiorul funcției, este declarată o variabilă locală result folosind let. Aceasta va stoca rezultatul adunării dintre valorile a și b. Adică, dacă a este 2 și b este 10, atunci result va avea valoarea 12.
          <br /> <br />
          4. return result <br /> Return, ne returneaza valoarea variabilei result.
          <br /> <br />
          5.console.log(calcul(2, 10)); Această linie folosește funcția console.log() pentru a afișa valoarea variabilei result în consolă. Astfel, rezultatul adunării va fi afișat (în acest caz, 12).
        </h4>
      </div>
      <h4 style={{ color: 'white', marginTop: '10px' }}>
        Ca sa va puteti testa codul de acum incolo, puteti folosi un compilator precum cel de pe <a href="https://ideone.com/" target="_blank" rel="noopener noreferrer">ideone.com</a>.
        In cazul in care limbajul Javascript nu este selectat in compilator, trebuie sa il selectati voi. Sunt 2 versiuni, alegeti versiunea Javascript(SMonkey 60.2.3).
        Folositi functia din exemplul de mai sus incat sa vedeti cum functioneaza compilatorul. Puteti modifica valorile variabilelor, incat sa vedeti ce rezultat primiti.
        <a href="https://www.loom.com/share/992f30a928dc483ea55e7d81965e54cc" target="_blank" rel="noopener noreferrer">Aici</a> aveti si un video explicativ.
      </h4>

    </>
  )

  return (
    <ProblemPage
      problemName="ConsoleLog"
      problemPoints={2}
      problemHeader={problemHeader}
      problemContent={problemContent}
      nextRoute="/SumOfTwoNumbers"
      lecture={true}
    />

  )
}

export default ConsoleLog