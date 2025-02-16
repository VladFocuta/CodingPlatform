import React from 'react'
import ProblemPage from '../../components/functions/ProblemPage'
import CodeStyle from '../../components/CodeStyle'

function Struct() {
    const problemContent = (
        <>
            <h4 >
                Un struct (structură) este un tip de date definit de utilizator, care permite gruparea mai multor variabile sub un singur nume. Este similar cu un class, dar, spre deosebire de acesta, membrii săi sunt public în mod implicit.<br />
                În termeni simpli, un struct este ca o cutie în care putem pune mai multe variabile de diferite tipuri și să le accesăm sub un singur nume.
            </h4>
            Să definim un struct simplu care reține informații despre o persoană.

            <CodeStyle code={`#include <iostream>
using namespace std;

// Definim structura
struct Person {
    string name;
    int age;
};

int main() {
    // Creăm o variabilă de tipul Person
    Person p1;

    // Atribuim valori
    p1.name = "Alex";
    p1.age = 20;

    // Afișăm informațiile
    cout << "Nume: " << p1.name << endl;
    cout << "Varsta: " << p1.age << endl;

    return 0;
}
`} />
            Am definit un struct numit Person cu două variabile: name (de tip string) și age (de tip int).<br />
            Am creat o variabilă p1 de tip Person și i-am atribuit valori.<br />
            Am afișat valorile pe ecran.<br /><br />

            <h4>Inițializarea directă a unui struct</h4>
            Putem inițializa un struct direct în momentul declarării.
            <CodeStyle code={`#include <iostream>
using namespace std;

struct Person {
    string name;
    int age;
};

int main() {
    // Inițializare directă
    Person p1 = {"Maria", 22};

    cout << "Nume: " << p1.name << ", Varsta: " << p1.age << endl;

    return 0;
}

`} />
            Aceasta este o metodă mai simplă de inițializare fără a folosi atribuiri separate.<br /><br />

            <h4>Funcții în struct</h4>
            Un struct poate conține și funcții pentru a lucra cu datele interne.
            <CodeStyle code={`#include <iostream>
using namespace std;

struct Person {
    string name;
    int age;

    // Funcție care afișează informațiile
    void display() {
        cout << "Nume: " << name << ", Varsta: " << age << endl;
    }
};

int main() {
    Person p1 = {"David", 30};
    p1.display();  // Apelăm funcția display()

    return 0;
}

`} />
            Am definit o funcție display() în interiorul structurii pentru a afișa direct informațiile.<br /><br />

            <h4>Constructor în struct</h4>
            În C++, struct poate avea și constructori, la fel ca o class. Un constructor este o funcție specială care se apelează automat atunci când un obiect este creat.
            <CodeStyle code={`#include <iostream>
using namespace std;

struct Person {
    string name;
    int age;

    // Constructor
    Person(string n, int a) {
        name = n;
        age = a;
    }

    void display() {
        cout << "Nume: " << name << ", Varsta: " << age << endl;
    }
};

int main() {
    Person p1("Ana", 25);  // Se apelează constructorul automat
    p1.display();

    return 0;
}

`} />
            Constructorul primește numele și vârsta ca parametri și le atribuie variabilelor structurii.<br />
            Este apelat automat când un obiect este creat.<br /><br />

            <h4>Structuri în interiorul altor structuri</h4>
            Putem avea un struct în interiorul altuia.
            <CodeStyle code={`#include <iostream>
using namespace std;

struct Address {
    string city;
    string street;
};

struct Person {
    string name;
    int age;
    Address address;  // Structură imbricată

    void display() {
        cout << "Nume: " << name << ", Varsta: " << age << endl;
        cout << "Adresa: " << address.city << ", Strada: " << address.street << endl;
    }
};

int main() {
    Person p1 = {"Ion", 35, {"Bucuresti", "Bd. Unirii"}};
    p1.display();

    return 0;
}`} />
            Person conține o altă structură Address pentru a reține orașul și strada.<br />
            Putem inițializa un struct imbricat în momentul declarării.
        </>

    )


    return (
        <ProblemPage
            problemName="Struct"
            problemPoints={1}
            problemContent={problemContent}
            lecture={true}
            nextRoute="/problems/Vector de structuri" />
    )
}

export default Struct