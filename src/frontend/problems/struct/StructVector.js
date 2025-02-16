import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function StructVector() {
    const problemContent = (
        <>
            <h4>Dacă vrei să declari un vector de obiecte, poți folosi un vector static sau un vector dinamic alocat manual.</h4>

            1.Folosind un vector static (dimensiune fixă)

            <CodeStyle code={`#include <iostream>
using namespace std;

struct Person {
    string name;
    int age;

    void display() {
        cout << "Nume: " << name << ", Varsta: " << age << endl;
    }
};

int main() {
    const int SIZE = 3;
    Person people[SIZE] = {
        {"Mihai", 22},
        {"Ioana", 29},
        {"Cristina", 25}
    };

    cout << "Lista persoanelor:\n";
    for (int i = 0; i < SIZE; i++) {
        people[i].display();
    }

    return 0;
}`} />
            <strong style={{ color: 'red' }}> Limitare: Nu poți adăuga sau elimina persoane din array, deoarece are o dimensiune fixă.</strong><br />

            2.Folosind un vector dinamic (alocat manual)
            <CodeStyle code={`#include <iostream>
using namespace std;

struct Person {
    string name;
    int age;

    void display() {
        cout << "Nume: " << name << ", Varsta: " << age << endl;
    }
};

int main() {
    int size = 3;
    Person* people = new Person[size]; // people este un pointer la un obiect de tip Person
    //Un pointer este o variabilă care stochează adresa unei alte variabile din memorie, în loc să stocheze direct o valoare.

    // Adăugăm persoane
    people[0] = {"Mihai", 22};
    people[1] = {"Ioana", 29};
    people[2] = {"Cristina", 25};

    // Afișăm lista
    cout << "Lista persoanelor:\\n";
    for (int i = 0; i < size; i++) {
        people[i].display();
    }

    // Eliberăm memoria
    delete[] people;

    return 0;
}`} />
            <strong style={{ color: 'green' }}>Avantaj: Permite alocare dinamică.</strong>
            <strong style={{ color: 'red' }}>Dezavantaj: Trebuie să gestionezi manual memoria (delete[]).</strong><br />

            3. Folosind un vector dinamic &lt;vector&gt;
            <CodeStyle code={`#include <iostream>
#include <vector>
using namespace std;

struct Person {
    string name;
    int age;

    void display() {
        cout << "Nume: " << name << ", Varsta: " << age << endl;
    }
};

int main() {
	int n;
	cin >> n;
    vector<Person> people(n);  // Vector de structuri cu lungimea n

	 for (int i = 0; i < n; ++i) {
       cin >> people[i].name >> people[i].age;
    }

    for (int i = 0; i < n; ++i) {
        people[i].display();
    }

    return 0;
}
`} />
        </>

    )


    return (
        <ProblemPage
            problemName="Vector de structuri"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Gestionarea unei liste de persoane" />
    )
}

export default StructVector