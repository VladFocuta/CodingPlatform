import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function FrequenceArray() {
    const problemContent = (
        <>
            <h4 >
                Ce este un șir de frecvență?
            </h4>
            Un șir de frecvență spune de câte ori apare fiecare valoare.<br />
            În loc să memorezi valorile, memorezi numărul de apariții.<br /><br />

            <h4>Exemplu</h4>
            Ai numerele:<br />
            <CodeStyle code={`2 3 2 5 3 2`} />
            Vrei să știi:<br />
            de câte ori apare 2 → 3<br />
            de câte ori apare 3 → 2<br />
            de câte ori apare 5 → 1<br /><br />

            <h4>Ideea de bază (o singură regulă)</h4>
            <strong style={{ color: 'green' }}>Indexul reprezintă valoarea, conținutul reprezintă frecvența.</strong><br />

            <h4>Implementare minimă (numere mici)</h4>
            1. Declari șirul de frecvență<br />
            <CodeStyle code={`int frecv[101] = {0};  // pentru valori 0..100`} />
            Toate valorile pornesc de la 0.<br /><br />
            2. Citești numerele și le numeri<br />
            <CodeStyle code={`int x;
cin >> x;
frecv[x]++;`} />

            <h4>Exemplu complet</h4>
            <CodeStyle code={`#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int frecv[101] = {0};

    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        frecv[x]++;
    }

    for (int i = 0; i <= 100; i++) {
        if (frecv[i] > 0) {
            cout << i << " apare de " << frecv[i] << " ori\\n";
        }
    }

    return 0;
}
`} />

            <h4>Când se folosesc șirurile de frecvență</h4>
            - numărarea aparițiilor<br />
            - determinarea elementului cel mai frecvent<br />
            - verificarea permutărilor<br />
            - sortare rapidă (counting sort)<br /><br />

            <h4 style={{ color: 'green' }}>Regula de aur</h4>
            Dacă valorile sunt mici și cunoscute → șir de frecvență.

        </>

    )
    return (
        < ProblemPage
            problemName="Sir de frecventa"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Numarari de aparitii" />
    )
}

export default FrequenceArray