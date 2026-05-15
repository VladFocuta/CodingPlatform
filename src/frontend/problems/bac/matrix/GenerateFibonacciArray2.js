import React, { useState } from 'react'
import ProblemPage from '../../../components/functions/ProblemPage'
import Test from '../../../components/Test'

function GenerateFibonacciArray2() {
  const [testPassed, setTestPassed] = useState(false);

  const testCases = [
    { params: ['5'], expected: '1 1 2 3 5 \n 8 3 1 4 5 \n 9 4 3 7 0 \n 7 7 4 1 5 \n 6 1 7 8 5' },
    { params: ['3'], expected: '1 1 2 3 5 8 3 1 4' },
    { params: ['10'], expected: '1 1 2 3 5 8 3 1 4 5 \n9 4 3 7 0 7 7 4 1 5 \n6 1 7 8 5 3 8 1 9 0 \n 9 9 8 7 5 2 7 9 6 5 \n 1 6 7 3 0 3 3 6 9 5 \n 4 9 3 2 5 7 2 9 1 0 \n 1 1 2 3 5 8 3 1 4 5 \n 9 4 3 7 0 7 7 4 1 5 \n 6 1 7 8 5 3 8 1 9 0 \n 9 9 8 7 5 2 7 9 6 5' },

  ];

  const problemContent = (
    <>
      <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
        <h4>
          Se consideră şirul lui Fibonacci, definit astfel: f<sub>1</sub>=1 , f<sub>2</sub>=1 , f<sub>n</sub>=f<sub>n-1</sub>+f<sub>n-2</sub>, dacă n &gt; 2.<br />
          Scrieţi un program care citeşte de la tastatură un număr natural n şi construieşte în memorie o matrice cu n linii şi n coloane ale cărei elemente sunt numere naturale, fiecare reprezentând ultima cifră a câte unui termen al şirului lui Fibonacci, începând de la termenul de indice 1 şi până la termenul de indice n<sup>2</sup> .<br />
          Programul citește de la tastatură numărul n.<br />
          Programul afișează pe ecran matricea construită, câte o linie a matricei pe câte o linie a ecranului, elementele fiecărei linii fiind separate prin câte un spaţiu.
          <br /><br />

          Mențiuni:<br />
          3 ≤ n ≤ 24
          <br /><br />

          Exemplu: <br />

        </h4>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
          <h4>Date de intrare:<br />5 
          </h4>
          <h4> Date de iesire: <br />1 1 2 3 5<br />8 3 1 4 5<br />9 4 3 7 0<br />7 7 4 1 5<br />6 1 7 8 5</h4>

        </div>


      </div>
      <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
        <Test
          testCases={testCases}
          testPassedSet={setTestPassed}
          problemName="Generare sir Fibonacci2.0" />
      </div>
    </>
  )
  return (
    <ProblemPage
      problemName="Generare sir Fibonacci2.0"
      problemPoints={1}
      problemContent={problemContent}
      nextRoute="/problems/bac/Medie aritmetica sub diagonala principala"
      testPassed={testPassed}
    />
  )
}

export default GenerateFibonacciArray2