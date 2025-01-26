import React, { useState } from 'react'
import Test from '../../components/Test'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle';

function Calculator() {

    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [11, "+", 18], expected: "Rezultatul este: 29" }, // Adunare normală
        { params: [22, "/", 0], expected: "Eroare: Impartirea la zero nu este permisa!" }, // Împărțire la 0
        { params: [15, "%", 2], expected: "Eroare: Operator invalid!" }, // Operator invalid
        { params: [55, "-", 10], expected: "Rezultatul este: 45" }, // Scădere validă
        { params: [3, "*", 7], expected: "Rezultatul este: 21" }, // Înmulțire validă
        { params: [20, "/", 4], expected: "Rezultatul este: 5" }, // Împărțire validă
        { params: [-5, "+", 10], expected: "Rezultatul este: 5" }, // Adunare cu număr negativ
        { params: [-10, "/", 2], expected: "Rezultatul este: -5" }, // Împărțire cu număr negativ
        { params: [5, "-", 5], expected: "Rezultatul este: 0" }, // Rezultatul zero
        { params: [0, "*", 100], expected: "Rezultatul este: 0" }, // Înmulțire cu 0
        { params: [0, "/", 1], expected: "Rezultatul este: 0" }, // Împărțire validă cu 0 ca număr
        { params: [1000000000, "+", 1000000000], expected: "Rezultatul este: 2000000000" }, // Numere mari
        { params: [-1000000000, "*", 2], expected: "Rezultatul este: -2000000000" }, // Numere mari negative
    ];
    

    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care solicita utilizatorului doua numere si un operator matematic (+, -, *, /, %).
                    <br />
                    Programul trebuie sa efectueze operatia specificata si sa afiseze rezultatul.<br />
                    Daca utilizatorul introduce un operator invalid sau incearcă sa imparta la zero, afisati un mesaj de eroare.<br /><br />
                    Cere utilizatorului sa introduca de la tastatura primul numar, operatorul (+, -, *, /) si apoi al doilea numar.<br />
                    
                    Operatorul este o variabila de tip <strong style={{ color: 'purple' }}>char</strong>.<br />
                    Ea se poate declara in felul urmator <strong style={{ color: 'purple' }}>char</strong> opr; .<br />
                    Ca sa putem primi o valoare de la utilizator, folosim <strong style={{ color: 'purple' }}>cin &gt;&gt; </strong> ca si la variabilele de tip <strong style={{ color: 'purple' }}>int</strong>.<br />
                    Verificarea continutului variabilei <strong style={{ color: 'purple' }}>opr </strong> se va face in felul urmator:<br />
                    <CodeStyle code={`char opr;
cin >> opr;
if (opr == '+') {
    //restul codului
}`}/>

                    

                    In cazul in care utilizatorul doreste sa imparta un numar la 0, se va afisa o eroare sub aceasta forma:<br />
                    <strong style={{ color: 'red' }}>Eroare: Impartirea la zero nu este permisa!</strong><br />
                    In cazul in care introduce un operator invalid, se va afisa urmatoarea eroare:<br />
                    <strong style={{ color: 'red' }}>Eroare: Operator invalid!</strong><br /><br />

                    Rezultatul se va afisa sub aceasta forma: <strong style={{ color: 'red' }}>Rezultatul este:</strong><br /><br />

                    <strong>Mentiuni</strong>:<br />
                    Pentru simplitate, folosim doar numere naturale.<br />
                    -10000000 &lt;= numar1, numar2, &lt;= 10000000<br /><br />

                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare:<br /> 18<br />
                        + <br />
                        11 <br />
                    </h4>
                    <h4> Date de iesire: <br /><strong style={{ color: 'red' }}>Rezultatul este:</strong> 29

                    </h4>
                </div> <br />

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Calculator"
                />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Calculator"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/Main"
            lecture={false}
            testPassed={testPassed}
        />
    )
}

export default Calculator