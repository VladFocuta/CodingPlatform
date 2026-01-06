import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function Stiva() {
    const problemContent = (
        <>
            <h4 >
                Ce este o stivă (stack)?
            </h4>
            O stivă este o structură de date care funcționează după regula:<br />
            LIFO – Last In, First Out<br />
            (ultimul element adăugat este primul scos)<br />
            Exemplu real: o grămadă de farfurii.<br /><br />

            <h4>Cum folosim o stivă în C++</h4>
            O stivă are două lucruri esențiale:<br />
            1. un vector în care ținem elementele<br />
            2. o variabilă top care spune unde este vârful stivei<br /><br />

            <h4>Structura minimă a unei stive</h4>
            1. Declararea
            <CodeStyle code={`int stiva[100];  // stiva poate avea max 100 elemente
int top = -1;    // stiva este goală`} />
            top = -1 → stiva e goală<br />
            top = 0 → un element<br />
            top indică ultima poziție ocupată<br /><br />

            <h4>Operațiile esențiale</h4>
            PUSH – adăugare element
            <CodeStyle code={`top++;
stiva[top] = x;`} />

            POP – eliminare element
            <CodeStyle code={`top--;`} />

            TOP – vezi elementul din vârf
            <CodeStyle code={`stiva[top];`} />

            EMPTY – verificare stivă goală
            <CodeStyle code={`top == -1`} />

            <h4>Exemplu complet</h4>
            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int stiva[100];
    int top = -1;

    // PUSH
    top++;
    stiva[top] = 10;

    top++;
    stiva[top] = 20;

    top++;
    stiva[top] = 30;

    // TOP
    cout << "Varful stivei: " << stiva[top] << endl;

    // POP
    top--;

    cout << "Noul varf: " << stiva[top] << endl;

    return 0;
}
`} />
            <h4>Output</h4>
            <CodeStyle code={`Varful stivei: 30
Noul varf: 20`} />
            <h4>Vizualizare</h4>
            După inserări:
            <CodeStyle code={`Index: 0 1 2
Valori: 10 20 30
               ↑
              top`} />
            După pop:
            <CodeStyle code={`Index: 0 1
Valori: 10 20
            ↑
            top`} />

            <h4>Ce trebuie să reții</h4>
            <CodeStyle code={`top = -1 → stivă goală
push → top++; stiva[top] = x;
pop → top--;
vârful → stiva[top]`} />

        </>

    )
    return (
        < ProblemPage
            problemName="Stiva"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Simulare stiva" />
    )
}

export default Stiva