import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './frontend/screens/Home';
import NavBar from './frontend/components/NavBar';
import Main from './frontend/screens/Main';
import Login from './frontend/screens/Login';
import { AuthProvider } from './backend/firebaseConfig/authProvider';
import Register from './frontend/screens/Register';
import AlgorithmNotion from './frontend/problems/first-chapter/AlgorithmNotion';
import ProgramBase from './frontend/problems/first-chapter/ProgramBase';
import Interchange from './frontend/problems/first-chapter/Interchange';
import { UserProgress } from './frontend/components/contexts/userProgress';
import BaseStructure from './frontend/problems/first-chapter/BaseStructure';
import SumOfTwoNumbers from './frontend/problems/first-chapter/SumOfTwoNumbers';
import ProgramRun from './frontend/problems/first-chapter/ProgramRun';
import Max from './frontend/problems/first-chapter/Max';
import RectangleArea from './frontend/problems/first-chapter/RectangleArea';
import TemperatureConversion from './frontend/problems/If-Instruction/TemperatureConversion';
import BodyTemperature from './frontend/problems/If-Instruction/BodyTemperature';
import Divide from './frontend/problems/If-Instruction/Divide';
import ResetPassword from './frontend/screens/ResetPassword';
import Average from './frontend/problems/If-Instruction/Average';
import HoursConvertor from './frontend/problems/If-Instruction/HoursConvertor';
import PalindromNum from './frontend/problems/If-Instruction/PalindromNum';
import While from './frontend/problems/second-chapter/While';
import ReverseCounter from './frontend/problems/second-chapter/ReverseCounter';
import NumbersSum from './frontend/problems/second-chapter/NumbersSum';
import Counter from './frontend/problems/second-chapter/Counter';
import PrimeNumber from './frontend/problems/second-chapter/PrimeNumber';
import GuessNumber from './frontend/problems/second-chapter/GuessNumber';
import Debugging from './frontend/problems/second-chapter/Debugging';
import CodeSubmitHistory from './frontend/components/CodeSubmitHistory';
import Concatenation from './frontend/problems/second-chapter/Concatenation';
import Messages from './frontend/screens/Messages';
import ScrollToTop from './frontend/components/ScrollToTop';
import { NotificationProvider } from './frontend/components/contexts/NewCommentsContext';
import Profile from './frontend/screens/Profile';
import Infos from './frontend/screens/userProfileScreens/Infos';
import Stop from './frontend/problems/second-chapter/Stop';
import MaxNumber from './frontend/problems/while-recap/MaxNumber';
import CMMD from './frontend/problems/while-recap/CMMD';
import MaxSum from './frontend/problems/while-recap/MaxSum';
import Triangle from './frontend/problems/If-Instruction/Triangle';
import AbsoluteNumber from './frontend/problems/If-Instruction/AbsoluteNumber';
import Calculator from './frontend/problems/If-Instruction/Calculator';
import OddNumber from './frontend/problems/while-recap/OddNumber';
import Factorial from './frontend/problems/while-recap/Factorial';
import MagicNumber from './frontend/problems/while-recap/MagicNumber';
import MirrorNumber from './frontend/problems/while-recap/MirrorNumber';
import MaxAndMin from './frontend/problems/while-recap/MaxAndMin.js';
import Product from './frontend/problems/while-recap/Product';
import Elimination from './frontend/problems/while-recap/Elimination';
import GeneratePrimeNumbers from './frontend/problems/while-recap/GeneratePrimeNumbers';
import PerfectNumbers from './frontend/problems/while-recap/PerfectNumbers';
import InterchangeHalfNumber from './frontend/problems/while-recap/InterchangeHalfNumber';
import ForLecture from './frontend/problems/for/ForLecture';
import Arrays from './frontend/problems/for/Arrays';
import ArrayProduct from './frontend/problems/for/ArrayProduct';
import EvenPositions from './frontend/problems/for/EvenPositions';
import Decrement from './frontend/problems/for/Decrement';
import ElementDelete from './frontend/problems/for/ElementDelete';
import ElementDelete2 from './frontend/problems/for/ElementDelete2';
import ElementInsert from './frontend/problems/for/ElementInsert';
import ElementInsert2 from './frontend/problems/for/ElementInsert2';
import BubbleSort from './frontend/problems/for/BubbleSort';
import InsertionSort from './frontend/problems/for/InsertionSort';
import SelectionSort from './frontend/problems/for/SelectionSort';
import LinearSearch from './frontend/problems/for/LinearSearch';
import BinarySearch from './frontend/problems/for/BinarySearch';
import DescendingSort from './frontend/problems/for-recap/DescendingSort';
import SortAndDelete from './frontend/problems/for-recap/SortAndDelete';
import MaxAndMinFor from './frontend/problems/for-recap/MaxAndMinFor';
import SortAndInterchange from './frontend/problems/for-recap/SortAndInterchange.js';
import ElementSearch from './frontend/problems/for-recap/ElementSearch.js';
import MissingNumber from './frontend/problems/for-recap/MissingNumber.js';
import MajorityElement from './frontend/problems/for-recap/MajorityElement.js';
import EvenNeighbors from './frontend/problems/for-recap/EvenNeighbors.js';
import Subsequence from './frontend/problems/for-recap/Subsequence.js';
import TwoArraysSum from './frontend/problems/for-recap/TwoArraysSum.js';
import TwoArraysSum2 from './frontend/problems/for-recap/TwoArraysSum2.js';
import Fibonacci from './frontend/problems/for-recap/Fibonacci.js';
import Matrix from './frontend/problems/matrix/Matrix.js';
import MatrixDetails from './frontend/problems/matrix/MatrixDetails.js';
import ElementsSum from './frontend/problems/matrix/ElementsSum.js';
import SubmatrixAndDiagonals from './frontend/problems/matrix/SubmatrixAndDiagonals.js';
import PrinDiagDiff from './frontend/problems/matrix/PrinDiagDiff.js';
import SecondaryDiagonal from './frontend/problems/matrix/SecondaryDiagonal.js';
import Submatrix from './frontend/problems/matrix/Submatrix.js';
import IdentityMatrix from './frontend/problems/matrix/IdentityMatrix.js';
import ColumnReplace from './frontend/problems/matrix/ColumnReplace.js';
import MaxRow from './frontend/problems/matrix/MaxRow.js';
import ValuesCounter from './frontend/problems/matrix-recap/ValuesCounter.js';
import SymmetricMatrix from './frontend/problems/matrix-recap/SymmetricMatrix.js';
import Neighbours from './frontend/problems/matrix-recap/Neighbours.js';
import GenerateMatrix from './frontend/problems/matrix-recap/GenerateMatrix.js';
import InterchangeMinAndMax from './frontend/problems/matrix-recap/InterchangeMinAndMax.js';
import FindElements from './frontend/problems/matrix-recap/FindElements.js';
import MatrixRotate from './frontend/problems/matrix-recap/MatrixRotate.js';
import LeftPermutation from './frontend/problems/matrix-recap/LeftPermutation.js';
import TriangleInferior from './frontend/problems/matrix-recap/TriangleInferior.js';
import Functions from './frontend/problems/functions/Functions.js';
import FunctionPrimeNumber from './frontend/problems/functions/FunctionPrimeNumber.js';
import VoidMessage from './frontend/problems/functions/VoidMessage.js';
import SwapNumbers from './frontend/problems/functions/SwapNumbers.js';
import ArrayModify from './frontend/problems/functions/ArrayModify.js';
import FibonacciRecursiv from './frontend/problems/functions/FibonacciRecursiv.js';
import FactorialNumber from './frontend/problems/functions/FactorialNumber.js';
import Char from './frontend/problems/char/Char.js';
import ASCII from './frontend/problems/char/ASCII.js';
import PredefinedFunctions from './frontend/problems/char/PredefinedFunctions.js';
import CharPalindrom from './frontend/problems/char/CharPalindrom.js';
import VowsCounter from './frontend/problems/char/VowsCounter.js';
import Conversion from './frontend/problems/char/Conversion.js';
import CharDelete from './frontend/problems/char/CharDelete.js';
import ReversedArray from './frontend/problems/char/ReversedArray.js';
import StrCopy from './frontend/problems/char/StrCopy.js';
import LongestSentence from './frontend/problems/char/LongestSentence.js';
import CatConsonant from './frontend/problems/char/CatConsonant.js';
import Cenzor from './frontend/problems/char/Cenzor.js';
import WordsCounter from './frontend/problems/char/WordsCounter.js';
import Anagrams from './frontend/problems/char/Anagrams.js';
import Backtracking from './frontend/problems/backtracking/Backtracking.js';
import GenerateArrangements from './frontend/problems/backtracking/GenerateArrangements.js';
import ThreeTermsSum from './frontend/problems/backtracking/ThreeTermsSum.js';
import FruitsAndVegetables from './frontend/problems/backtracking/FruitsAndVegetables.js';
import Struct from './frontend/problems/struct/Struct.js';
import StructVector from './frontend/problems/struct/StructVector.js';
import InsertData from './frontend/problems/struct/InsertData.js';
import ListSort from './frontend/problems/struct/ListSort.js';
import StructAddRemoveSearch from './frontend/problems/struct/StructAddRemoveSearch.js';
import SearchData from './frontend/problems/struct/SearchData.js';
import AverageNote from './frontend/problems/struct/AverageNote.js';
import Graphs from './frontend/problems/graphs/Graphs.js';



function App() {

  return (

    <div >
      <AuthProvider>

        <UserProgress>
          <NotificationProvider>
            <NavBar />
            <ScrollToTop />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Main" element={<Main />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/ResetPassword" element={<ResetPassword />} />
              <Route path="/CodeSubmitHistory" element={<CodeSubmitHistory />} />
              <Route path="/screens/Messages" element={<Messages />} />
              <Route path="/user/Profile" element={<Profile />} />
              <Route path="/user/Infos" element={<Infos />} />

              <Route path="/problems/Notiunea de algoritm" element={<AlgorithmNotion />} />
              <Route path="/problems/Bazele programarii" element={<ProgramBase />} />
              <Route path="/problems/Interschimbare" element={<Interchange />} />
              <Route path="/problems/Structuri de baze" element={<BaseStructure />} />
              <Route path="/problems/Suma" element={<SumOfTwoNumbers />} />
              <Route path="/problems/Rulare program" element={<ProgramRun />} />
              <Route path="/problems/Numarul maxim" element={<Max />} />
              <Route path="/problems/Aria unui dreptunghi" element={<RectangleArea />} />
              <Route path="/problems/Conversia temperaturii" element={<TemperatureConversion />} />
              <Route path="/problems/Temperatura corpului" element={<BodyTemperature />} />
              <Route path="/problems/Divizibilitate" element={<Divide />} />
              <Route path="/problems/Media notelor" element={<Average />} />
              <Route path="/problems/Convertirea orelor" element={<HoursConvertor />} />
              <Route path="/problems/Palindrom numeric" element={<PalindromNum />} />
              <Route path="/problems/Triunghi valid" element={<Triangle />} />
              <Route path="/problems/Numar absolut" element={<AbsoluteNumber />} />
              <Route path="/problems/Calculator" element={<Calculator />} />

              <Route path="/problems/While" element={<While />} />
              <Route path="/problems/Contor" element={<Counter />} />
              <Route path="/problems/Numaratoare inversa" element={<ReverseCounter />} />
              <Route path="/problems/Suma cifrelor" element={<NumbersSum />} />
              <Route path="/problems/Numar prim" element={<PrimeNumber />} />
              <Route path="/problems/Ghicirea unui numar" element={<GuessNumber />} />
              <Route path="/problems/Debugging" element={<Debugging />} />
              <Route path="/problems/Concatenarea" element={<Concatenation />} />
              <Route path="/problems/Trenul" element={<Stop />} />

              <Route path="/problems/Numar maxim" element={<MaxNumber />} />
              <Route path="/problems/CMMD" element={<CMMD />} />
              <Route path="/problems/Suma maxima" element={<MaxSum />} />
              <Route path="/problems/Numar impar" element={<OddNumber />} />
              <Route path="/problems/Factorialul unui numar" element={<Factorial />} />
              <Route path="/problems/Numarul magic" element={<MagicNumber />} />
              <Route path="/problems/Oglindire" element={<MirrorNumber />} />
              <Route path="/problems/Maxim si minim" element={<MaxAndMin />} />
              <Route path="/problems/Produsul" element={<Product />} />
              <Route path="/problems/Eliminarea" element={<Elimination />} />
              <Route path="/problems/Generare numere" element={<GeneratePrimeNumbers />} />
              <Route path="/problems/Numere perfecte" element={<PerfectNumbers />} />
              <Route path="/problems/Interschimbare doua jumatati" element={<InterchangeHalfNumber />} />

              <Route path="/problems/Structura Repetitiva for" element={<ForLecture />} />
              <Route path="/problems/Siruri de numere" element={<Arrays />} />
              <Route path="/problems/Produsul numerelor" element={<ArrayProduct />} />
              <Route path="/problems/Pozitii pare" element={<EvenPositions />} />
              <Route path="/problems/Afisam descrescator" element={<Decrement />} />
              <Route path="/problems/Stergerea unui element" element={<ElementDelete />} />
              <Route path="/problems/Stergerea unui element 2.0" element={<ElementDelete2 />} />
              <Route path="/problems/Inserarea unui element" element={<ElementInsert />} />
              <Route path="/problems/Inserarea unui element 2.0" element={<ElementInsert2 />} />
              <Route path="/problems/Bubble Sort" element={<BubbleSort />} />
              <Route path="/problems/Insertion Sort" element={<InsertionSort />} />
              <Route path="/problems/Selection Sort" element={<SelectionSort />} />
              <Route path="/problems/Linear Search" element={<LinearSearch />} />
              <Route path="/problems/Binary Search" element={<BinarySearch />} />

              <Route path="/problems/Sortare descrescatoare" element={<DescendingSort />} />
              <Route path="/problems/Sortare si eliminare duplicate" element={<SortAndDelete />} />
              <Route path="/problems/Nota maxima si minima" element={<MaxAndMinFor />} />
              <Route path="/problems/Sortare si interschimbare" element={<SortAndInterchange />} />
              <Route path="/problems/Cautarea unui element" element={<ElementSearch />} />
              <Route path="/problems/Numar lipsa" element={<MissingNumber />} />
              <Route path="/problems/Element majoritar" element={<MajorityElement />} />
              <Route path="/problems/Vecini pari" element={<EvenNeighbors />} />
              <Route path="/problems/Sub-secventa array" element={<Subsequence />} />
              <Route path="/problems/Suma a doua siruri" element={<TwoArraysSum />} />
              <Route path="/problems/Suma a doua siruri2.0" element={<TwoArraysSum2 />} />
              <Route path="/problems/Sirul lui Fibonacci" element={<Fibonacci />} />

              <Route path="/problems/Matrici" element={<Matrix />} />
              <Route path="/problems/Declarare/Citire/Afisare" element={<MatrixDetails />} />
              <Route path="/problems/Suma elementelor" element={<ElementsSum />} />
              <Route path="/problems/Diagonale si submatrici" element={<SubmatrixAndDiagonals />} />
              <Route path="/problems/Diferenta diagonalei principale" element={<PrinDiagDiff />} />
              <Route path="/problems/Minim pe diagonala secundara" element={<SecondaryDiagonal />} />
              <Route path="/problems/Extragerea unei submatrici" element={<Submatrix />} />
              <Route path="/problems/Matrice de identitate" element={<IdentityMatrix />} />
              <Route path="/problems/Inlocuirea unei coloane" element={<ColumnReplace />} />
              <Route path="/problems/Cel mai mare de pe rand" element={<MaxRow />} />

              <Route path="/problems/Contorizarea valorilor" element={<ValuesCounter />} />
              <Route path="/problems/Matrice simetrica" element={<SymmetricMatrix />} />
              <Route path="/problems/Vecinii" element={<Neighbours />} />
              <Route path="/problems/Generare matrice" element={<GenerateMatrix />} />
              <Route path="/problems/Interschimbare linii" element={<InterchangeMinAndMax />} />
              <Route path="/problems/Gaseste elementii" element={<FindElements />} />
              <Route path="/problems/Rotire la 90 de grade" element={<MatrixRotate />} />
              <Route path="/problems/Permutari la stanga" element={<LeftPermutation />} />
              <Route path="/problems/Triunghi inferior" element={<TriangleInferior />} />

              <Route path="/problems/Functii" element={<Functions />} />
              <Route path="/problems/Verificare numar prim" element={<FunctionPrimeNumber />} />
              <Route path="/problems/Afisare mesaj" element={<VoidMessage />} />
              <Route path="/problems/Schimbarea valorilor" element={<SwapNumbers />} />
              <Route path="/problems/Modificarea unui tablou" element={<ArrayModify />} />
              <Route path="/problems/Fibonacci recursiv" element={<FibonacciRecursiv />} />
              <Route path="/problems/Functie-Factorialul unui numar" element={<FactorialNumber />} />

              <Route path="/problems/Siruri de caractere" element={<Char />} />
              <Route path="/problems/ASCII" element={<ASCII />} />
              <Route path="/problems/Functii predefinite" element={<PredefinedFunctions />} />
              <Route path="/problems/Palindrom-siruri de caractere" element={<CharPalindrom />} />
              <Route path="/problems/Numarul total de vocale" element={<VowsCounter />} />
              <Route path="/problems/Convertirea literelor mari sau mici" element={<Conversion />} />
              <Route path="/problems/Stergerea unui caracter dat" element={<CharDelete />} />
              <Route path="/problems/Inversarea unui sir de caractere" element={<ReversedArray />} />
              <Route path="/problems/Copia unui sir de caractere" element={<StrCopy />} />
              <Route path="/problems/Cea mai lunga propozitie" element={<LongestSentence />} />
              <Route path="/problems/Concatenarea a doua siruri" element={<CatConsonant />} />
              <Route path="/problems/Cenzurarea unui cuvant" element={<Cenzor />} />
              <Route path="/problems/Numararea cuvintelor" element={<WordsCounter />} />
              <Route path="/problems/Anagrame" element={<Anagrams />} />

              <Route path="/problems/Ce este backtracking?" element={<Backtracking />} />
              <Route path="/problems/Generare aranjamente" element={<GenerateArrangements />} />
              <Route path="/problems/Suma de numere naturale" element={<ThreeTermsSum />} />
              <Route path="/problems/Fructe si legume" element={<FruitsAndVegetables />} />

              <Route path="/problems/Struct" element={<Struct />} />
              <Route path="/problems/Vector de structuri" element={<StructVector />} />
              <Route path="/problems/Gestionarea unei liste de persoane" element={<InsertData />} />
              <Route path="/problems/Sortarea unei liste de persoane" element={<ListSort />} />
              <Route path="/problems/Gestionarea unui vector de structuri" element={<StructAddRemoveSearch />} />
              <Route path="/problems/Cautarea unei persoane" element={<SearchData />} />
              <Route path="/problems/Cea mai mare medie" element={<AverageNote />} />
              <Route path="/problems/Grafuri" element={<Graphs />} />

            </Routes>
          </NotificationProvider>
        </UserProgress>
        
      </AuthProvider>
    </div >
  );
}

export default App;
