import { UserAuth } from "../../backend/firebaseConfig/authProvider";
import { UserProgressData } from "../components/contexts/userProgress";
import Progress from "../components/Progress";

function Main() {
  const { user, loggedIn } = UserAuth();
  const { userProgressPoints, problemsSolved, admin, capitols, credits } = UserProgressData() || {};
  //trecerea de la o problema la alta
  // titlurile sa fie cuprinse in chenar

  const freeLessons = [
    "Recapitulare algoritmi",
    "Algoritmi"
  ]

  const combinedLessons = [...freeLessons, ...(capitols || [])];
  const totalPoints = Math.floor((userProgressPoints / 184) * 100);

  const sections = [
    {
      title: "Algoritmi",
      lessons: [
        { title: "Notiunea de algoritm", link: "/problems/Notiunea de algoritm", icon: "fa-solid fa-circle-check", index: 1 },
        { title: "Bazele programarii", link: "/problems/Bazele programarii", icon: "fa-solid fa-circle-check", index: 2 },
        { title: "Rulare program", link: "/problems/Rulare program", icon: "fa-solid fa-circle-check", index: 3 },
        { title: "Suma", link: "/problems/Suma", icon: "fa-solid fa-circle-check", index: 4 },
        { title: "Aria unui dreptunghi", link: "/problems/Aria unui dreptunghi", icon: "fa-solid fa-circle-check", index: 5 },
        { title: "Structuri de baze", link: "/problems/Structuri de baze", icon: "fa-solid fa-circle-check", index: 6 },
        { title: "If-structura alternativa", link: "/problems/If-structura alternativa", icon: "fa-solid fa-circle-check", index: 7 },
        { title: "Interschimbare", link: "/problems/Interschimbare", icon: "fa-solid fa-circle-check", index: 7 },
        { title: "Numarul maxim", link: "/problems/Numarul maxim", icon: "fa-solid fa-circle-check", index: 8 }
      ]
    },
    {
      title: "Recapitulare algoritmi",
      lessons: [
        { title: "Temperatura corpului", link: "/problems/Temperatura corpului", icon: "fa-solid fa-circle-check", index: 9 },
        { title: "Numar absolut", link: "/problems/Numar absolut", icon: "fa-solid fa-circle-check", index: 10 },
        { title: "Conversia temperaturii", link: "/problems/Conversia temperaturii", icon: "fa-solid fa-circle-check", index: 11 },
        { title: "Divizibilitate", link: "/problems/Divizibilitate", icon: "fa-solid fa-circle-check", index: 12 },
        { title: "Media notelor", link: "/problems/Media notelor", icon: "fa-solid fa-circle-check", index: 13 },
        { title: "Convertirea orelor", link: "/problems/Convertirea orelor", icon: "fa-solid fa-circle-check", index: 14 },
        { title: "Palindrom numeric", link: "/problems/Palindrom numeric", icon: "fa-solid fa-circle-check", index: 15 },
        { title: "Triunghi valid", link: "/problems/Triunghi valid", icon: "fa-solid fa-circle-check", index: 16 },
        { title: "Calculator", link: "/problems/Calculator", icon: "fa-solid fa-circle-check", index: 17 }
      ]
    },
    {
      title: "While-structură de control",
      lessons: [
        { title: "While", link: "/problems/While", icon: "fa-solid fa-circle-check", index: 18 },
        { title: "Definitia pseudocodului", link: "/problems/Definitia pseudocodului", icon: "fa-solid fa-circle-check", index: 18 },
        { title: "Contor", link: "/problems/Contor", icon: "fa-solid fa-circle-check", index: 19 },
        { title: "Numaratoare inversa", link: "/problems/Numaratoare inversa", icon: "fa-solid fa-circle-check", index: 20 },
        { title: "Suma cifrelor", link: "/problems/Suma cifrelor", icon: "fa-solid fa-circle-check", index: 21 },
        { title: "Debugging", link: "/problems/Debugging", icon: "fa-solid fa-circle-check", index: 22 },
        { title: "Ghicirea unui numar", link: "/problems/Ghicirea unui numar", icon: "fa-solid fa-circle-check", index: 23 },
        { title: "Numar prim", link: "/problems/Numar prim", icon: "fa-solid fa-circle-check", index: 24 },
        { title: "Concatenarea", link: "/problems/Concatenarea", icon: "fa-solid fa-circle-check", index: 25 },
        { title: "Trenul", link: "/problems/Trenul", icon: "fa-solid fa-circle-check", index: 26 }
      ]
    },
    {
      title: "Recapitulare While",
      lessons: [
        { title: "Numar maxim", link: "/problems/Numar maxim", icon: "fa-solid fa-circle-check", index: 27 },
        { title: "CMMD", link: "/problems/CMMD", icon: "fa-solid fa-circle-check", index: 28 },
        { title: "Suma maxima", link: "/problems/Suma maxima", icon: "fa-solid fa-circle-check", index: 29 },
        { title: "Numar impar", link: "/problems/Numar impar", icon: "fa-solid fa-circle-check", index: 30 },
        { title: "Maxim si minim", link: "/problems/Maxim si minim", icon: "fa-solid fa-circle-check", index: 31 },
        { title: "Produsul", link: "/problems/Produsul", icon: "fa-solid fa-circle-check", index: 32 },
        { title: "Numere perfecte", link: "/problems/Numere perfecte", icon: "fa-solid fa-circle-check", index: 33 },
        { title: "Eliminarea", link: "/problems/Eliminarea", icon: "fa-solid fa-circle-check", index: 34 },
        { title: "Generare numere", link: "/problems/Generare numere", icon: "fa-solid fa-circle-check", index: 35 },
        { title: "Factorialul unui numar", link: "/problems/Factorialul unui numar", icon: "fa-solid fa-circle-check", index: 36 },
        { title: "Numarul magic", link: "/problems/Numarul magic", icon: "fa-solid fa-circle-check", index: 37 },
        { title: "Oglindire", link: "/problems/Oglindire", icon: "fa-solid fa-circle-check", index: 38 },
        { title: "Interschimbare doua jumatati", link: "/problems/Interschimbare doua jumatati", icon: "fa-solid fa-circle-check", index: 39 },
        { title: "Cifra de control", link: "/problems/Cifra de control", icon: "fa-solid fa-circle-check", index: 40 },
        //
        { title: "Congruente simultane cu acelasi rest", link: "/problems/Congruente simultane cu acelasi rest", icon: "fa-solid fa-circle-check", index: 40 },
        { title: "Intervalul primelor", link: "/problems/Intervalul primelor", icon: "fa-solid fa-circle-check", index: 40 },
        { title: "Descompunere in factori primi", link: "/problems/Descompunere in factori primi", icon: "fa-solid fa-circle-check", index: 40 },

      ]
    },
    {
      title: "Structura repetitiva for",
      lessons: [
        { title: "Structura Repetitiva for", link: "/problems/Structura Repetitiva for", icon: "fa-solid fa-circle-check", index: 41 },
        { title: "Siruri de numere", link: "/problems/Siruri de numere", icon: "fa-solid fa-circle-check", index: 42 },
        { title: "Produsul numerelor", link: "/problems/Produsul numerelor", icon: "fa-solid fa-circle-check", index: 43 },
        { title: "Pozitii pare", link: "/problems/Pozitii pare", icon: "fa-solid fa-circle-check", index: 44 },
        { title: "Afisam descrescator", link: "/problems/Afisam descrescator", icon: "fa-solid fa-circle-check", index: 45 },
        { title: "Stergerea unui element", link: "/problems/Stergerea unui element", icon: "fa-solid fa-circle-check", index: 46 },
        { title: "Stergerea unui element 2.0", link: "/problems/Stergerea unui element 2.0", icon: "fa-solid fa-circle-check", index: 47 },
        { title: "Inserarea unui element", link: "/problems/Inserarea unui element", icon: "fa-solid fa-circle-check", index: 48 },
        { title: "Inserarea unui element 2.0", link: "/problems/Inserarea unui element 2.0", icon: "fa-solid fa-circle-check", index: 49 },
        { title: "Bubble Sort", link: "/problems/Bubble Sort", icon: "fa-solid fa-circle-check", index: 50 },
        { title: "Insertion Sort", link: "/problems/Insertion Sort", icon: "fa-solid fa-circle-check", index: 51 },
        { title: "Selection Sort", link: "/problems/Selection Sort", icon: "fa-solid fa-circle-check", index: 52 },
        { title: "Linear Search", link: "/problems/Linear Search", icon: "fa-solid fa-circle-check", index: 53 },
        { title: "Binary Search", link: "/problems/Binary Search", icon: "fa-solid fa-circle-check", index: 54 }
      ]
    }, {
      title: "Recapitulare For",
      lessons: [
        { title: "Sortare descrescatoare", link: "/problems/Sortare descrescatoare", icon: "fa-solid fa-circle-check", index: 55 },
        { title: "Sortare si eliminare duplicate", link: "/problems/Sortare si eliminare duplicate", icon: "fa-solid fa-circle-check", index: 56 },
        { title: "Nota maxima si minima", link: "/problems/Nota maxima si minima", icon: "fa-solid fa-circle-check", index: 57 },
        { title: "Sortare si interschimbare", link: "/problems/Sortare si interschimbare", icon: "fa-solid fa-circle-check", index: 58 },
        { title: "Cautarea unui element", link: "/problems/Cautarea unui element", icon: "fa-solid fa-circle-check", index: 59 },
        { title: "Numar lipsa", link: "/problems/Numar lipsa", icon: "fa-solid fa-circle-check", index: 60 },
        { title: "Element majoritar", link: "/problems/Element majoritar", icon: "fa-solid fa-circle-check", index: 61 },
        { title: "Vecini pari", link: "/problems/Vecini pari", icon: "fa-solid fa-circle-check", index: 62 },
        { title: "Sub-secventa array", link: "/problems/Sub-secventa array", icon: "fa-solid fa-circle-check", index: 63 },
        { title: "Suma a doua siruri", link: "/problems/Suma a doua siruri", icon: "fa-solid fa-circle-check", index: 64 },
        { title: "Suma a doua siruri2.0", link: "/problems/Suma a doua siruri2.0", icon: "fa-solid fa-circle-check", index: 65 },
        { title: "Sirul lui Fibonacci", link: "/problems/Sirul lui Fibonacci", icon: "fa-solid fa-circle-check", index: 66 },
        { title: "Suma a doua numere mari", link: "/problems/Suma a doua numere mari", icon: "fa-solid fa-circle-check", index: 67 },
        { title: "Produsul a doua numere mari", link: "/problems/Produsul a doua numere mari", icon: "fa-solid fa-circle-check", index: 68 },
        { title: "Analiza cercului prietenilor", link: "/problems/Analiza cercului prietenilor", icon: "fa-solid fa-circle-check", index: 69 },
        { title: "Numere speciale palindromizate", link: "/problems/Numere speciale palindromizate", icon: "fa-solid fa-circle-check", index: 70 },
        //
        { title: "Gestionarea unei librarii", link: "/problems/Gestionarea unei librarii", icon: "fa-solid fa-circle-check", index: 70 },
        { title: "Laboratorul de inteligenta artificiala", link: "/problems/Laboratorul de inteligenta artificiala", icon: "fa-solid fa-circle-check", index: 70 },
        { title: "Analiza cifrelor in codurile unui depozit", link: "/problems/Analiza cifrelor in codurile unui depozit", icon: "fa-solid fa-circle-check", index: 70 },
        { title: "Codurile secrete", link: "/problems/Codurile secrete", icon: "fa-solid fa-circle-check", index: 70 },
        { title: "Misiunea Agentilor P", link: "/problems/Misiunea Agentilor P", icon: "fa-solid fa-circle-check", index: 70 },
        { title: "Controlul de calitate", link: "/problems/Controlul de calitate", icon: "fa-solid fa-circle-check", index: 70 },
        { title: "Catalogul digital", link: "/problems/Catalogul digital", icon: "fa-solid fa-circle-check", index: 70 },
        { title: "Drumul dintre doua teste reusite", link: "/problems/Drumul dintre doua teste reusite", icon: "fa-solid fa-circle-check", index: 70 },
        { title: "Progresul notelor", link: "/problems/Progresul notelor", icon: "fa-solid fa-circle-check", index: 70 },


      ]
    }, {
      title: "Matrici",
      lessons: [
        { title: "Matrici", link: "/problems/Matrici", icon: "fa-solid fa-circle-check", index: 71 },
        { title: "Declarare/Citire/Afisare", link: "/problems/Declarare/Citire/Afisare", icon: "fa-solid fa-circle-check", index: 72 },
        { title: "Suma elementelor", link: "/problems/Suma elementelor", icon: "fa-solid fa-circle-check", index: 73 },
        { title: "Diagonale si submatrici", link: "/problems/Diagonale si submatrici", icon: "fa-solid fa-circle-check", index: 74 },
        { title: "Diferenta diagonalei principale", link: "/problems/Diferenta diagonalei principale", icon: "fa-solid fa-circle-check", index: 75 },
        { title: "Minim pe diagonala secundara", link: "/problems/Minim pe diagonala secundara", icon: "fa-solid fa-circle-check", index: 76 },
        { title: "Extragerea unei submatrici", link: "/problems/Extragerea unei submatrici", icon: "fa-solid fa-circle-check", index: 77 },
        { title: "Matrice de identitate", link: "/problems/Matrice de identitate", icon: "fa-solid fa-circle-check", index: 78 },
        { title: "Inlocuirea unei coloane", link: "/problems/Inlocuirea unei coloane", icon: "fa-solid fa-circle-check", index: 79 },
        { title: "Cel mai mare de pe rand", link: "/problems/Cel mai mare de pe rand", icon: "fa-solid fa-circle-check", index: 80 },
        //
        { title: "Turnirul Cifrarilor", link: "/problems/Turnirul Cifrarilor", icon: "fa-solid fa-circle-check", index: 80 },

      ]
    }, {
      title: "Recapitulare Matrici",
      lessons: [
        { title: "Contorizarea valorilor", link: "/problems/Contorizarea valorilor", icon: "fa-solid fa-circle-check", index: 81 },
        { title: "Matrice simetrica", link: "/problems/Matrice simetrica", icon: "fa-solid fa-circle-check", index: 82 },
        { title: "Vecinii", link: "/problems/Vecinii", icon: "fa-solid fa-circle-check", index: 83 },
        { title: "Generare matrice", link: "/problems/Generare matrice", icon: "fa-solid fa-circle-check", index: 84 },
        { title: "Interschimbare linii", link: "/problems/Interschimbare linii", icon: "fa-solid fa-circle-check", index: 85 },
        { title: "Gaseste elementii", link: "/problems/Gaseste elementii", icon: "fa-solid fa-circle-check", index: 86 },
        { title: "Rotire la 90 de grade", link: "/problems/Rotire la 90 de grade", icon: "fa-solid fa-circle-check", index: 87 },
        { title: "Permutari la stanga", link: "/problems/Permutari la stanga", icon: "fa-solid fa-circle-check", index: 88 },
        { title: "Triunghi inferior", link: "/problems/Triunghi inferior", icon: "fa-solid fa-circle-check", index: 89 },
        //
        { title: "Conversie binara pe linii", link: "/problems/Conversie binara pe linii", icon: "fa-solid fa-circle-check", index: 89 },


      ]
    }, {
      title: "Subprograme",
      lessons: [
        { title: "Functii", link: "/problems/Functii", icon: "fa-solid fa-circle-check", index: 90 },
        { title: "Verificare numar prim", link: "/problems/Verificare numar prim", icon: "fa-solid fa-circle-check", index: 91 },
        { title: "Afisare mesaj", link: "/problems/Afisare mesaj", icon: "fa-solid fa-circle-check", index: 92 },
        { title: "Schimbarea valorilor", link: "/problems/Schimbarea valorilor", icon: "fa-solid fa-circle-check", index: 93 },
        { title: "Modificarea unui tablou", link: "/problems/Modificarea unui tablou", icon: "fa-solid fa-circle-check", index: 94 },
        { title: "Fibonacci recursiv", link: "/problems/Fibonacci recursiv", icon: "fa-solid fa-circle-check", index: 95 },
        { title: "Functie-Factorialul unui numar", link: "/problems/Functie-Factorialul unui numar", icon: "fa-solid fa-circle-check", index: 96 },
        { title: "Simularea unei stive", link: "/problems/Simularea unei stive", icon: "fa-solid fa-circle-check", index: 97 },
        { title: "Castele", link: "/problems/Castele", icon: "fa-solid fa-circle-check", index: 97 },
        //



      ]
    }, {
      title: "Siruri de caractere",
      lessons: [
        { title: "Siruri de caractere", link: "/problems/Siruri de caractere", icon: "fa-solid fa-circle-check", index: 98 },
        { title: "ASCII", link: "/problems/ASCII", icon: "fa-solid fa-circle-check", index: 99 },
        { title: "Functii predefinite", link: "/problems/Functii predefinite", icon: "fa-solid fa-circle-check", index: 100 },
        { title: "Palindrom-siruri de caractere", link: "/problems/Palindrom-siruri de caractere", icon: "fa-solid fa-circle-check", index: 101 },
        { title: "Numarul total de vocale", link: "/problems/Numarul total de vocale", icon: "fa-solid fa-circle-check", index: 102 },
        { title: "Convertirea literelor mari sau mici", link: "/problems/Convertirea literelor mari sau mici", icon: "fa-solid fa-circle-check", index: 103 },
        { title: "Stergerea unui caracter dat", link: "/problems/Stergerea unui caracter dat", icon: "fa-solid fa-circle-check", index: 104 },
        { title: "Inversarea unui sir de caractere", link: "/problems/Inversarea unui sir de caractere", icon: "fa-solid fa-circle-check", index: 105 },
        { title: "Copia unui sir de caractere", link: "/problems/Copia unui sir de caractere", icon: "fa-solid fa-circle-check", index: 106 },
        { title: "Cea mai lunga propozitie", link: "/problems/Cea mai lunga propozitie", icon: "fa-solid fa-circle-check", index: 107 },
        { title: "Concatenarea a doua siruri", link: "/problems/Concatenarea a doua siruri", icon: "fa-solid fa-circle-check", index: 108 },
        { title: "Cenzurarea unui cuvant", link: "/problems/Cenzurarea unui cuvant", icon: "fa-solid fa-circle-check", index: 109 },
        { title: "Numararea cuvintelor", link: "/problems/Numararea cuvintelor", icon: "fa-solid fa-circle-check", index: 110 },
        { title: "Anagrame", link: "/problems/Anagrame", icon: "fa-solid fa-circle-check", index: 111 },
        { title: "Verificarea corectitudinii parantezelor", link: "/problems/Verificarea corectitudinii parantezelor", icon: "fa-solid fa-circle-check", index: 112 },
        //
        { title: "Verificarea rimelor", link: "/problems/Verificarea rimelor", icon: "fa-solid fa-circle-check", index: 112 },
        { title: "Filtrarea cuvintelor dupa lungime", link: "/problems/Filtrarea cuvintelor dupa lungime", icon: "fa-solid fa-circle-check", index: 112 },
        { title: "Perechi de vocale consecutive", link: "/problems/Perechi de vocale consecutive", icon: "fa-solid fa-circle-check", index: 112 },
        { title: "Codificare prin repetare ghidata de cifre", link: "/problems/Codificare prin repetare ghidata de cifre", icon: "fa-solid fa-circle-check", index: 112 },


      ]
    }, {
      title: "Recursivitate & Metoda backtracking",
      lessons: [
        { title: "Ce este backtracking?", link: "/problems/Ce este backtracking?", icon: "fa-solid fa-circle-check", index: 113 },
        { title: "Generare aranjamente", link: "/problems/Generare aranjamente", icon: "fa-solid fa-circle-check", index: 114 },
        { title: "Suma de numere naturale", link: "/problems/Suma de numere naturale", icon: "fa-solid fa-circle-check", index: 115 },
        { title: "Fructe si legume", link: "/problems/Fructe si legume", icon: "fa-solid fa-circle-check", index: 116 },
        { title: "Permutari la distanta", link: "/problems/Permutari la distanta", icon: "fa-solid fa-circle-check", index: 116 },
        { title: "Cautarea drumului intr-un labirint", link: "/problems/Cautarea drumului intr-un labirint", icon: "fa-solid fa-circle-check", index: 116 },

      ]
    }
    , {
      title: "Struct",
      lessons: [
        { title: "Struct", link: "/problems/Struct", icon: "fa-solid fa-circle-check", index: 117 },
        { title: "Vector de structuri", link: "/problems/Vector de structuri", icon: "fa-solid fa-circle-check", index: 118 },
        { title: "Gestionarea unei liste de persoane", link: "/problems/Gestionarea unei liste de persoane", icon: "fa-solid fa-circle-check", index: 119 },
        { title: "Sortarea unei liste de persoane", link: "/problems/Sortarea unei liste de persoane", icon: "fa-solid fa-circle-check", index: 120 },
        { title: "Gestionarea unui vector de structuri", link: "/problems/Gestionarea unui vector de structuri", icon: "fa-solid fa-circle-check", index: 121 },
        { title: "Cautarea unei persoane", link: "/problems/Cautarea unei persoane", icon: "fa-solid fa-circle-check", index: 122 },
        { title: "Cea mai mare medie", link: "/problems/Cea mai mare medie", icon: "fa-solid fa-circle-check", index: 123 },
      ]
    },
    {
      title: "Grafuri",
      lessons: [
        { title: "Grafuri", link: "/problems/Grafuri", icon: "fa-solid fa-circle-check", index: 120 },
        { title: "Reprezentare si graduri", link: "/problems/Reprezentare si graduri", icon: "fa-solid fa-circle-check", index: 124 },
        { title: "Reprezentarea unui graf", link: "/quiz/Reprezentarea unui graf", icon: "fa-solid fa-circle-check", index: 125 },
        { title: "Graduri", link: "/quiz/Graduri", icon: "fa-solid fa-circle-check", index: 126 },
        { title: "Diferenta dintre matricea si lista de adiacenta", link: "/quiz/Diferenta dintre matricea si lista de adiacenta", icon: "fa-solid fa-circle-check", index: 127 },
        { title: "Matrice de adiacenta", link: "/problems/Matrice de adiacenta", icon: "fa-solid fa-circle-check", index: 128 },
        { title: "Calculul gradului unui varf", link: "/problems/Calculul gradului unui varf", icon: "fa-solid fa-circle-check", index: 129 },
        { title: "Nodurile cu grad maxim si minim", link: "/problems/Nodurile cu grad maxim si minim", icon: "fa-solid fa-circle-check", index: 130 },


        { title: "Partial-Subgraf-Complementar", link: "/problems/Partial-Subgraf-Complementar", icon: "fa-solid fa-circle-check", index: 131 },
        { title: "Partial", link: "/quiz/Partial", icon: "fa-solid fa-circle-check", index: 132 },
        { title: "Subgraf", link: "/quiz/Subgraf", icon: "fa-solid fa-circle-check", index: 133 },
        { title: "Complementar", link: "/quiz/Complementar", icon: "fa-solid fa-circle-check", index: 134 },
        { title: "Eliminarea muchiilor", link: "/problems/Eliminarea muchiilor", icon: "fa-solid fa-circle-check", index: 135 },
        { title: "Subgraf conex", link: "/problems/Subgraf conex", icon: "fa-solid fa-circle-check", index: 136 },
        { title: "Graf complementar", link: "/problems/Graf complementar", icon: "fa-solid fa-circle-check", index: 137 },


        { title: "Nul-Complet-Regulat-Bipartit", link: "/problems/Nul-Complet-Regulat-Bipartit", icon: "fa-solid fa-circle-check", index: 138 },
        { title: "Nul", link: "/quiz/Nul", icon: "fa-solid fa-circle-check", index: 139 },
        { title: "Complet", link: "/quiz/Complet", icon: "fa-solid fa-circle-check", index: 140 },
        { title: "Regulat", link: "/quiz/Regulat", icon: "fa-solid fa-circle-check", index: 141 },
        { title: "Bipartit", link: "/quiz/Bipartit", icon: "fa-solid fa-circle-check", index: 142 },
        { title: "Graf complet", link: "/problems/Graf complet", icon: "fa-solid fa-circle-check", index: 143 },
        { title: "Graf bipartit", link: "/problems/Graf bipartit", icon: "fa-solid fa-circle-check", index: 144 },


        { title: "Conexitate-Lant-Ciclu", link: "/problems/Conexitate-Lant-Ciclu", icon: "fa-solid fa-circle-check", index: 145 },
        { title: "Lant", link: "/quiz/Lant", icon: "fa-solid fa-circle-check", index: 146 },
        { title: "Ciclu", link: "/quiz/Ciclu", icon: "fa-solid fa-circle-check", index: 147 },
        { title: "Determinarea tipului de lant", link: "/problems/Determinarea tipului de lant", icon: "fa-solid fa-circle-check", index: 148 },

        { title: "Conex-Componente conexe-Biconex", link: "/problems/Conex-Componente conexe-Biconex", icon: "fa-solid fa-circle-check", index: 149 },
        { title: "Conex", link: "/quiz/Conex", icon: "fa-solid fa-circle-check", index: 150 },
        { title: "Componente conexe", link: "/quiz/Componente conexe", icon: "fa-solid fa-circle-check", index: 151 },
        { title: "Biconex", link: "/quiz/Biconex", icon: "fa-solid fa-circle-check", index: 152 },
        { title: "Numarul de componente conexe", link: "/problems/Numarul de componente conexe", icon: "fa-solid fa-circle-check", index: 153 },



        { title: "Arbore-Hamiltonian-Eulerian", link: "/problems/Arbore-Hamiltonian-Eulerian", icon: "fa-solid fa-circle-check", index: 154 },
        { title: "Arbore", link: "/quiz/Arbore", icon: "fa-solid fa-circle-check", index: 155 },
        { title: "Hamiltonian", link: "/quiz/Hamiltonian", icon: "fa-solid fa-circle-check", index: 156 },
        { title: "Verificare graf arbore", link: "/problems/Verificare graf arbore", icon: "fa-solid fa-circle-check", index: 157 },
        { title: "Verificare graf Hamiltonian", link: "/problems/Verificare graf Hamiltonian", icon: "fa-solid fa-circle-check", index: 158 },
        { title: "Verificare graf Eulerian", link: "/problems/Verificare graf Eulerian", icon: "fa-solid fa-circle-check", index: 159 },

      ]
    },
    {
      title: "Fisiere text",
      lessons: [
        { title: "Fisiere text", link: "/problems/Fisiere text", icon: "fa-solid fa-circle-check", index: 160 },

      ]
    }


  ];

  return (
    <>
      {loggedIn ? (
        <div className='main-container'>
          {user && <h1 style={{ color: 'white', marginTop: '30px', marginBottom: '20px' }}>Bun venit, {user.displayName}!</h1>}


          <div className='userInfo'>
            <div className='profile-picture'></div>
            <h3>Invata bazele programarii:</h3>

            <div style={{ width: '70%', alignSelf: 'center' }} className="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-danger" style={{ width: totalPoints ? `${totalPoints}%` : '0%' }}>
                {totalPoints}%
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>

            <strong style={{ color: 'white' }}>Credite ramase: {credits} </strong>
          </div>


          <div className='problems'>
            <div>
              <Progress exp={userProgressPoints} />
            </div>

            <div style={{ background: 'white', opacity: 0.8, marginTop: '10px' }}>
              <div style={{ color: 'black', width: '100%', padding: '10px', marginBottom: '5px' }}>
                <h4 style={{ color: 'black' }}>Problemele curente:</h4>
              </div>

              <div className="accordion accordion-flush" id="accordionFlushExample">
                {sections.map((section, sectionIndex) => {
                  const shouldRender = !admin && combinedLessons.includes(section.title);


                  return (
                    <div key={sectionIndex} className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${sectionIndex}`} aria-expanded="false" aria-controls={`flush-collapse${sectionIndex}`}>
                          {section.title}
                        </button>
                      </h2>

                      {shouldRender && (

                        <div id={`flush-collapse${sectionIndex}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          {section.lessons.map((lesson, lessonIndex) => {
                            const isSolved = problemsSolved.includes(lesson.title);

                            return (
                              <div key={lessonIndex} className="accordion-body" style={{ display: 'flex' }}>
                                <div className="icon-container">
                                  {!admin ? (
                                    <i
                                      className={
                                        isSolved ? lesson.icon : problemsSolved.length === lesson.index - 1
                                          ? lesson.icon
                                          : lesson.icon
                                      }
                                      style={{ color: isSolved ? 'green' : 'grey' }}
                                    ></i>
                                  ) : (
                                    <i
                                      className={lesson.icon}


                                      style={{ color: isSolved ? 'green' : 'grey' }}
                                    ></i>
                                  )
                                  }

                                  {lessonIndex !== section.lessons.length - 1 && <div className="vertical-line" style={{ backgroundColor: `${isSolved ? 'green' : 'grey'}` }}></div>}

                                </div>
                                {!admin ? (
                                  <a style={{ textDecoration: 'none', marginLeft: '10px' }} href={lesson.link}>
                                    {lesson.title}
                                  </a>
                                ) : (
                                  <a style={{ textDecoration: 'none', marginLeft: '10px' }} href={lesson.link}>
                                    {lesson.title}
                                  </a>
                                )}


                              </div>
                            );
                          })}
                        </div>
                      )}

                      {admin && (
                        <div id={`flush-collapse${sectionIndex}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          {section.lessons.map((lesson, lessonIndex) => {
                            const isSolved = problemsSolved.includes(lesson.title);

                            return (
                              <div key={lessonIndex} className="accordion-body" style={{ display: 'flex' }}>
                                <div className="icon-container">
                                  {!admin ? (
                                    <i
                                      className={
                                        isSolved
                                          ? lesson.icon // Icon-ul verde pentru lecțiile rezolvate
                                          : problemsSolved.length === lesson.index - 1 // Lecția curentă fără lacăt
                                            ? lesson.icon // Icon-ul specific lecției
                                            : "fa-solid fa-lock" // Icon-ul cu lacăt pentru restul lecțiilor
                                      }
                                      style={{ color: isSolved || problemsSolved.length === lesson.index ? 'green' : 'grey' }}
                                    ></i>
                                  ) : (
                                    <i
                                      className={lesson.icon}


                                      style={{ color: isSolved || problemsSolved.length === lesson.index ? 'green' : 'grey' }}
                                    ></i>
                                  )
                                  }

                                  {lessonIndex !== section.lessons.length - 1 && <div className="vertical-line" style={{ backgroundColor: `${isSolved ? 'green' : 'grey'}` }}></div>}

                                </div>
                                {!admin ? (
                                  <a style={{ textDecoration: 'none', marginLeft: '10px' }} href={isSolved || problemsSolved.length === lesson.index - 1 ? lesson.link : null}>
                                    {lesson.title}
                                  </a>
                                ) : (
                                  <a style={{ textDecoration: 'none', marginLeft: '10px' }} href={lesson.link}>
                                    {lesson.title}
                                  </a>
                                )}


                              </div>
                            );
                          })}
                        </div>
                      )}


                    </div>
                  )



                })}
              </div>
            </div>
          </div>

          <label htmlFor="acceptTerms" style={{ margin: '20px', color: 'white' }}>
            <a href="/policy/policy and confidentiality" target="_blank" rel="noopener noreferrer">Politica de Confidențialitate</a><span> și </span>
            <a href="/policy/terms and conditions" target="_blank" rel="noopener noreferrer">Termeni și Condiții</a>
          </label>
        </div>
      ) : (
        <h1 className='home-container' style={{ color: 'white' }}>Trebuie sa te loghezi!</h1>
      )}
    </>
  )
}

export default Main;
