import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function Pointers() {
    const problemHeader = (
        <>
            <p>
                Ce este un pointer?<br />
                Un pointer este o variabilă care ține minte adresa de memorie a altei variabile.<br /><br />
                Gândește-te așa:<br />
                Variabilă normală → ține o valoare<br />
                Pointer → ține locația unde este stocată valoarea

            </p>
        </>
    )

    const problemContent = (
        <>
            <h4>
                Cum declar un pointer?
            </h4>
            <CodeStyle code={`int *p;`} />
            <p>
                int → tipul valorii către care pointează<br />
                *p → înseamnă că p este pointer la int
            </p>

            <h4>
                Cum îi dau o adresă?<br />
            </h4>
            <p>
                Folosim operatorul & (adresa unei variabile):
            </p>
            <CodeStyle code={`int x = 10;
int *p = &x;`} />
            <p>
                x are valoarea 10<br />
                p are adresa lui x
            </p>

            <h4>Cum folosesc pointerul?</h4>
            <p>
                Folosim operatorul * ca să ajungem la valoarea de la acea adresă:<br />
            </p>
            <CodeStyle code={`cout << *p;   // afișează 10`} />
            <h4>
                Cum pot modifica valoarea lui x prin pointer?
            </h4>
            <CodeStyle code={`*p = 20;
cout << x;   // afișează 20`} />
            <p>Pointerul schimbă direct valoarea din memorie.</p>

            <h4>Să luăm un exemplu clar</h4>
            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int x = 5;
    int *p = &x;

    cout << "Valoarea lui x: " << x << endl;
    cout << "Adresa lui x: " << p << endl;
    cout << "Valoarea lui x prin pointer: " << *p << endl;

    *p = 15;  // modificam valoarea lui x prin pointer

    cout << "Noua valoare a lui x: " << x << endl;

    return 0;
}`} />

            <h4>Pentru ce sunt pointerii utili?</h4>
            <p>
                transmitere eficientă a datelor la funcții<br />
                modificarea variabilelor într-o funcție<br />
                lucrul cu tablouri (array)<br />
                lucrul cu alocare dinamică (new, delete)
            </p>
        </>
    )
    return (
        <ProblemPage
            problemName="Pointeri"
            problemPoints={1}
            problemHeader={problemHeader}
            problemContent={problemContent}
            nextRoute="/problems/Primul Pointer"
            lecture={true}
        />
    )
}

export default Pointers