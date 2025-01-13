import React,{useState} from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import Test from '../../components/Test';


function DescendingSort() {
    const [testPassed, setTestPassed] = useState(false);

    const testCases = [
        { params: [5, 20, -1, 99, 4, 1034], expected: [1034, 99, 20, 4, -1] },
        { params: [2, -22, -1], expected: [-1, -22] },
        { params: [3, -1, -1, 0], expected: [0, -1, -1] },
        { params: [1, 0], expected: [0] }
    ];


    const problemContent = (
        <>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <h4>Scrie un program care citeste N numere intregi de la tastatura (unde N ≤ 50) si le sorteaza in ordine descrescatoare folosind algoritmul Bubble Sort.
                    <br /> <br />
                    Pe prima linie se citeste un numar întreg N (1 ≤ N ≤ 50), reprezentand numarul de elemente din array.<br />
                    Pe a doua linie se citesc N numere intregi separate prin spatiu.<br />
                    Programul va afisa numerele sortate in ordine descrescatoare, separate prin spatiu.
                    <br /><br />
                    Exemplu:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid white' }}>
                    <h4>Date de intrare: 5 <br /> 20 -1 99 4 1034
                        <br />
                    </h4>
                    <h4> Date de iesire: 1034 99 20 4 -1
                    </h4>
                </div>

            </div>
            <div className='userInfo' style={{ marginTop: '40px', width: '100%', flexDirection: 'column' }}>
                <Test
                    testCases={testCases}
                    testPassedSet={setTestPassed}
                    problemName="Sortare descrescatoare" />
            </div>
        </>
    )
    return (
        <ProblemPage
            problemName="Sortare descrescatoare"
            problemPoints={1}
            problemContent={problemContent}
            nextRoute="/problems/Stergerea unui element"
            testPassed={testPassed}
        />
    )
}

export default DescendingSort