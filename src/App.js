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
import Stiva from './frontend/problems/for/Stiva.js';
import StackStimulating from './frontend/problems/for/StackStimulating.js';
import ElementsSumStack from './frontend/problems/for/ElementsSumStack.js';
import SequenceReverse from './frontend/problems/for/SequenceReverse.js';
import FrequenceArray from './frontend/problems/for/FrequenceArray.js';
import FreqCounter from './frontend/problems/for/FreqCounter.js';

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
import ShowMultiply from './frontend/problems/functions/ShowMultiply.js';
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
import RepGraph from './frontend/problems/graphs/quiz/RepGraph.js';
import RepAndDegree from './frontend/problems/graphs/RepAndDegree.js';
import GraphDegree from './frontend/problems/graphs/quiz/GraphDegree.js';
import ListAndMatrixDiff from './frontend/problems/graphs/quiz/ListAndMatrixDiff.js';
import PartialSubgraphComp from './frontend/problems/graphs/PartialSubgraphComp.js';
import Partial from './frontend/problems/graphs/quiz/Partial.js';
import Subgraf from './frontend/problems/graphs/quiz/Subgraf.js';
import Complementar from './frontend/problems/graphs/quiz/Complementar.js';
import NullCompletRegBip from './frontend/problems/graphs/NullCompletRegBip.js';
import NulGraph from './frontend/problems/graphs/quiz/NulGraph.js';
import GraphComplet from './frontend/problems/graphs/quiz/GraphComplet.js';
import GraphRegulat from './frontend/problems/graphs/quiz/GraphRegulat.js';
import GraphBipartit from './frontend/problems/graphs/quiz/GraphBipartit.js';
import ChainAndCicle from './frontend/problems/graphs/ChainAndCicle.js';
import Chain from './frontend/problems/graphs/quiz/Chain.js';
import Cicle from './frontend/problems/graphs/quiz/Cicle.js';
import ConexComponentsBiconex from './frontend/problems/graphs/ConexComponentsBiconex.js';
import Conex from './frontend/problems/graphs/quiz/Conex.js';
import ConexComponents from './frontend/problems/graphs/quiz/ConexComponents.js';
import Biconex from './frontend/problems/graphs/quiz/Biconex.js';
import ArborHamilEuler from './frontend/problems/graphs/ArborHamilEuler.js';
import Arbore from './frontend/problems/graphs/quiz/Arbore.js';
import Hamiltonian from './frontend/problems/graphs/quiz/Hamiltonian.js';
import Eulerian from './frontend/problems/graphs/quiz/Eulerian.js';
import AdiacentMatrix from './frontend/problems/graphs-problems/AdiacentMatrix.js';
import TopDegree from './frontend/problems/graphs-problems/TopDegree.js';
import MaxAndMinKnots from './frontend/problems/graphs-problems/MaxAndMinKnots.js';
import EdgesDelete from './frontend/problems/graphs-problems/EdgesDelete.js';
import SubGraph from './frontend/problems/graphs-problems/SubGraph.js';
import ComplementGraph from './frontend/problems/graphs-problems/ComplementGraph.js';
import CompletGraph from './frontend/problems/graphs-problems/CompletGraph.js';
import GraphBipartitProblem from './frontend/problems/graphs-problems/GraphBipartitProblem.js';
import ChainProblem from './frontend/problems/graphs-problems/ChainProblem.js';
import ConexComponentsProblem from './frontend/problems/graphs-problems/ConexComponentsProblem.js';
import GraphTreeProblem from './frontend/problems/graphs-problems/GraphTreeProblem.js';
import HamiltonianGraphProblem from './frontend/problems/graphs-problems/HamiltonianGraphProblem.js';
import EulerianGraphProblem from './frontend/problems/graphs-problems/EulerianGraphProblem.js';
import TextFile from './frontend/problems/text/TextFile.js';
import HighNumbersSum from './frontend/problems/for-recap/HighNumbersSum.js';
import HighNumbersProduct from './frontend/problems/for-recap/HighNumbersProduct.js';
import TemporarlyFriends from './frontend/problems/for-recap/TemporarlyFriends.js';
import SpecialPalindrom from './frontend/problems/for-recap/SpecialPalindrom.js';
import ControlDigit from './frontend/problems/while-recap/ControlDigit.js';
import ParanthesisCheck from './frontend/problems/char/ParanthesisCheck.js';
import PopAndPush from './frontend/problems/functions/PopAndPush.js';
import Castels from './frontend/problems/functions/Castels.js';
import Library from './frontend/problems/for-recap/Library.js';
import AILabor from './frontend/problems/for-recap/AILabor.js';
import DepoCode from './frontend/problems/for-recap/DepoCode.js';
import EvenDividersInterval from './frontend/problems/for-recap/EvenDividersInterval.js';
import SecretCodes from './frontend/problems/for-recap/SecretCodes.js';
import FreqMatrix from './frontend/problems/matrix/FreqMatrix.js';
import AgentsMission from './frontend/problems/for-recap/AgentsMission.js';
import QualityCheck from './frontend/problems/for-recap/QualityCheck.js';
import DigitalCatalog from './frontend/problems/for-recap/DigitalCatalog.js';
import TwoTestsRoad from './frontend/problems/for-recap/TwoTestsRoad.js';
import GradesProgress from './frontend/problems/for-recap/GradesProgress.js';
import BinarConversion from './frontend/problems/matrix-recap/BinarConversion.js';
import Congruences from './frontend/problems/while-recap/Congruences.js';
import PrimeInterval from './frontend/problems/while-recap/PrimeInterval.js';
import DecompPrimeFactors from './frontend/problems/while-recap/DecompPrimeFactors.js';
import Rhymes from './frontend/problems/char/Rhymes.js';
import WordsFilter from './frontend/problems/char/WordsFilter.js';
import VowsPairs from './frontend/problems/char/VowsPairs.js';
import CodeRepeatDigits from './frontend/problems/char/CodeRepeatDigits.js';
import PolicyAndConf from './frontend/components/policy/PolicyAndConf.js';
import TermsAndConditions from './frontend/components/policy/TermsAndConditions.js';
import PseudoCode from './frontend/problems/second-chapter/PseudoCode.js';
import If from './frontend/problems/If-Instruction/If.js';
import DistancePermutations from './frontend/problems/backtracking/DistancePermutations.js';
import Adv from './frontend/components/advertisement/Adv.js';
import Labirinth from './frontend/problems/backtracking/Labirinth.js';
import FibonacciMatrix from './frontend/problems/matrix-recap/FibonacciMatrix.js';
import DigitsOfLines from './frontend/problems/matrix-recap/DigitsOfLines.js';
import EqualLines from './frontend/problems/matrix-recap/EqualLines.js';

import GoogleTrafic from './frontend/components/advertisement/GoogleTrafic.js';
import SimpleAddPage from './frontend/components/advertisement/SimpleAddPage.js';

import PrimePairs from './frontend/problems/while-recap/PrimePairs.js';
import ContactSucces from './frontend/components/advertisement/ContactSucces.js';
import PrimeDiv from './frontend/problems/while-recap/PrimeDiv.js';
import CMMMC from './frontend/problems/while-recap/CMMMC.js';
import DigitsSumWithK from './frontend/problems/while-recap/DigitsSumWithK.js';
import PrimeFactorsNumb from './frontend/problems/while-recap/PrimeFactorsNumb.js';
import CommonDividers from './frontend/problems/while-recap/CommonDividers.js';


import Pointers from './frontend/problems/pointeri/Pointers.js';
import FirstPointer from './frontend/problems/pointeri/FirstPointer.js';
import PointersInterchange from './frontend/problems/pointeri/PointersInterchange.js';
import PointersArray from './frontend/problems/pointeri/PointersArray.js';
import PintersSum from './frontend/problems/pointeri/PintersSum.js';
import MaxPointer from './frontend/problems/pointeri/MaxPointer.js';
import ReverseArray from './frontend/problems/pointeri/ReverseArray.js';


//for bac
import KTermsSum from './frontend/problems/bac/for/KTermsSum.js';
import AscendingVerify from './frontend/problems/bac/for/AscendingVerify.js';
import MaxNrAndApp from './frontend/problems/bac/for/MaxNrAndApp.js';
import MultiplyApp from './frontend/problems/bac/for/MultiplyApp.js';
import ElementsRearange from './frontend/problems/bac/for/ElementsRearange.js';

//matrice bac
import DiffValuesMatrix from './frontend/problems/bac/matrix/DiffValuesMatrix.js';
import DiffSumLinesCol from './frontend/problems/bac/matrix/DiffSumLinesCol.js';
import EvenNumbersMatrix from './frontend/problems/bac/matrix/EvenNumbersMatrix.js';
import LastDigitProduct from './frontend/problems/bac/matrix/LastDigitProduct.js';

//subprograme bac
import EvenNumbersSum from './frontend/problems/bac/subprograme/EvenNumbersSum.js';
import PrimeNrSquare from './frontend/problems/bac/subprograme/PrimeNrSquare.js';
import SumAndDigits from './frontend/problems/bac/subprograme/SumAndDigits.js';
import AverageDigit from './frontend/problems/bac/subprograme/AverageDigit.js';
import IrreducibleFractions from './frontend/problems/bac/subprograme/IrreducibleFractions.js';
import MinNumberMaxDigit from './frontend/problems/bac/subprograme/MinNumberMaxDigit.js';

//while bac
import KPows from './frontend/problems/bac/while/KPows.js';

//char bac
import ConsonantDelete from './frontend/problems/bac/char/ConsonantDelete.js';


















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
              <Route path="/advertisement/adv" element={<Adv />} />
              <Route path="/meditatii-informatica" element={<GoogleTrafic />} />
              <Route path="/policy/policy and confidentiality" element={<PolicyAndConf />} />
              <Route path="/policy/terms and conditions" element={<TermsAndConditions />} />
              <Route path="/contact-succes" element={<ContactSucces />} />
              <Route path="/informatica" element={<SimpleAddPage />} />


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
              <Route path="/problems/If-structura alternativa" element={<If />} />

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
              <Route path="/problems/Definitia pseudocodului" element={<PseudoCode />} />
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
              <Route path="/problems/CMMMC" element={<CMMMC />} />
              <Route path="/problems/Suma maxima" element={<MaxSum />} />
              <Route path="/problems/Numar impar" element={<OddNumber />} />
              <Route path="/problems/Factorialul unui numar" element={<Factorial />} />
              <Route path="/problems/Numarul magic" element={<MagicNumber />} />
              <Route path="/problems/Oglindire" element={<MirrorNumber />} />
              <Route path="/problems/Factori primi" element={<PrimeDiv />} />
              <Route path="/problems/Maxim si minim" element={<MaxAndMin />} />
              <Route path="/problems/Produsul" element={<Product />} />
              <Route path="/problems/Eliminarea" element={<Elimination />} />
              <Route path="/problems/Generare numere" element={<GeneratePrimeNumbers />} />
              <Route path="/problems/Numere perfecte" element={<PerfectNumbers />} />
              <Route path="/problems/Interschimbare doua jumatati" element={<InterchangeHalfNumber />} />
              <Route path="/problems/Cifra de control" element={<ControlDigit />} />
              <Route path="/problems/Congruente simultane cu acelasi rest" element={<Congruences />} />
              <Route path="/problems/Intervalul primelor" element={<PrimeInterval />} />
              <Route path="/problems/Descompunere in factori primi" element={<DecompPrimeFactors />} />
              <Route path="/problems/Perechi de numere prime" element={<PrimePairs />} />
              <Route path="/problems/Suma numerelor cu prima cifra k" element={<DigitsSumWithK />} />
              <Route path="/problems/Numarul de factori primi" element={<PrimeFactorsNumb />} />
              <Route path="/problems/Divizori comuni" element={<CommonDividers />} />


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
              <Route path="/problems/Stiva" element={<Stiva />} />
              <Route path="/problems/Simulare stiva" element={<StackStimulating />} />
              <Route path="/problems/Suma elementelor din stiva" element={<ElementsSumStack />} />
              <Route path="/problems/Inversarea unei secvente" element={<SequenceReverse />} />
              <Route path="/problems/Sir de frecventa" element={<FrequenceArray />} />
              <Route path="/problems/Numarari de aparitii" element={<FreqCounter />} />

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
              <Route path="/problems/Suma a doua numere mari" element={<HighNumbersSum />} />
              <Route path="/problems/Produsul a doua numere mari" element={<HighNumbersProduct />} />
              <Route path="/problems/Analiza cercului prietenilor" element={<TemporarlyFriends />} />
              <Route path="/problems/Numere speciale palindromizate" element={<SpecialPalindrom />} />
              <Route path="/problems/Gestionarea unei librarii" element={<Library />} />
              <Route path="/problems/Laboratorul de inteligenta artificiala" element={<AILabor />} />
              <Route path="/problems/Analiza cifrelor in codurile unui depozit" element={<DepoCode />} />
              <Route path="/problems/Codurile secrete" element={<SecretCodes />} />
              <Route path="/problems/Interval divizori pari" element={<EvenDividersInterval />} />
              <Route path="/problems/Misiunea Agentilor P" element={<AgentsMission />} />
              <Route path="/problems/Controlul de calitate" element={<QualityCheck />} />
              <Route path="/problems/Catalogul digital" element={<DigitalCatalog />} />
              <Route path="/problems/Drumul dintre doua teste reusite" element={<TwoTestsRoad />} />
              <Route path="/problems/Progresul notelor" element={<GradesProgress />} />



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
              <Route path="/problems/Turnirul Cifrarilor" element={<FreqMatrix />} />


              <Route path="/problems/Contorizarea valorilor" element={<ValuesCounter />} />
              <Route path="/problems/Matrice simetrica" element={<SymmetricMatrix />} />
              <Route path="/problems/Vecinii" element={<Neighbours />} />
              <Route path="/problems/Generare matrice" element={<GenerateMatrix />} />
              <Route path="/problems/Interschimbare linii" element={<InterchangeMinAndMax />} />
              <Route path="/problems/Generare sir Fibonacci" element={<FibonacciMatrix />} />
              <Route path="/problems/Numere din liniile unei matrice de cifre" element={<DigitsOfLines />} />
              <Route path="/problems/Linii egale" element={<EqualLines />} />


              <Route path="/problems/Gaseste elementii" element={<FindElements />} />
              <Route path="/problems/Rotire la 90 de grade" element={<MatrixRotate />} />
              <Route path="/problems/Permutari la stanga" element={<LeftPermutation />} />
              <Route path="/problems/Triunghi inferior" element={<TriangleInferior />} />
              <Route path="/problems/Conversie binara pe linii" element={<BinarConversion />} />


              <Route path="/problems/Pointeri" element={<Pointers />} />
              <Route path="/problems/Primul Pointer" element={<FirstPointer />} />
              <Route path="/problems/Interschimbare cu pointeri" element={<PointersInterchange />} />
              <Route path="/problems/Pointeri si tablouri" element={<PointersArray />} />
              <Route path="/problems/Suma elementelor cu pointer" element={<PintersSum />} />
              <Route path="/problems/Valoarea maxima cu pointer" element={<MaxPointer />} />
              <Route path="/problems/Inversarea vectorului" element={<ReverseArray />} />



              <Route path="/problems/Functii" element={<Functions />} />
              <Route path="/problems/Verificare numar prim" element={<FunctionPrimeNumber />} />
              <Route path="/problems/Afisare mesaj" element={<VoidMessage />} />
              <Route path="/problems/Schimbarea valorilor" element={<SwapNumbers />} />
              <Route path="/problems/Modificarea unui tablou" element={<ArrayModify />} />
              <Route path="/problems/Fibonacci recursiv" element={<FibonacciRecursiv />} />
              <Route path="/problems/Functie-Factorialul unui numar" element={<FactorialNumber />} />
              <Route path="/problems/Simularea unei stive" element={<PopAndPush />} />
              <Route path="/problems/Castele" element={<Castels />} />
              <Route path="/problems/Primele n numere divizibile cu x" element={<ShowMultiply />} />


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
              <Route path="/problems/Verificarea corectitudinii parantezelor" element={<ParanthesisCheck />} />
              <Route path="/problems/Verificarea rimelor" element={<Rhymes />} />
              <Route path="/problems/Filtrarea cuvintelor dupa lungime" element={<WordsFilter />} />
              <Route path="/problems/Perechi de vocale consecutive" element={<VowsPairs />} />
              <Route path="/problems/Codificare prin repetare ghidata de cifre" element={<CodeRepeatDigits />} />



              <Route path="/problems/Ce este backtracking?" element={<Backtracking />} />
              <Route path="/problems/Generare aranjamente" element={<GenerateArrangements />} />
              <Route path="/problems/Suma de numere naturale" element={<ThreeTermsSum />} />
              <Route path="/problems/Fructe si legume" element={<FruitsAndVegetables />} />
              <Route path="/problems/Permutari la distanta" element={<DistancePermutations />} />
              <Route path="/problems/Cautarea drumului intr-un labirint" element={<Labirinth />} />


              <Route path="/problems/Struct" element={<Struct />} />
              <Route path="/problems/Vector de structuri" element={<StructVector />} />
              <Route path="/problems/Gestionarea unei liste de persoane" element={<InsertData />} />
              <Route path="/problems/Sortarea unei liste de persoane" element={<ListSort />} />
              <Route path="/problems/Gestionarea unui vector de structuri" element={<StructAddRemoveSearch />} />
              <Route path="/problems/Cautarea unei persoane" element={<SearchData />} />
              <Route path="/problems/Cea mai mare medie" element={<AverageNote />} />

              <Route path="/problems/Grafuri" element={<Graphs />} />
              <Route path="/problems/Reprezentare si graduri" element={<RepAndDegree />} />
              <Route path="/quiz/Reprezentarea unui graf" element={<RepGraph />} />
              <Route path="/quiz/Graduri" element={<GraphDegree />} />
              <Route path="/quiz/Diferenta dintre matricea si lista de adiacenta" element={<ListAndMatrixDiff />} />
              <Route path="/problems/Partial-Subgraf-Complementar" element={<PartialSubgraphComp />} />
              <Route path="/quiz/Partial" element={<Partial />} />
              <Route path="/quiz/Subgraf" element={<Subgraf />} />
              <Route path="/quiz/Complementar" element={<Complementar />} />
              <Route path="/problems/Nul-Complet-Regulat-Bipartit" element={<NullCompletRegBip />} />
              <Route path="/quiz/Nul" element={<NulGraph />} />
              <Route path="/quiz/Complet" element={<GraphComplet />} />
              <Route path="/quiz/Regulat" element={<GraphRegulat />} />
              <Route path="/quiz/Bipartit" element={<GraphBipartit />} />
              <Route path="/problems/Conexitate-Lant-Ciclu" element={<ChainAndCicle />} />
              <Route path="/quiz/Lant" element={<Chain />} />
              <Route path="/quiz/Ciclu" element={<Cicle />} />
              <Route path="/problems/Conex-Componente conexe-Biconex" element={<ConexComponentsBiconex />} />
              <Route path="/quiz/Conex" element={<Conex />} />
              <Route path="/quiz/Componente conexe" element={<ConexComponents />} />
              <Route path="/quiz/Biconex" element={<Biconex />} />
              <Route path="/problems/Arbore-Hamiltonian-Eulerian" element={<ArborHamilEuler />} />
              <Route path="/quiz/Arbore" element={<Arbore />} />
              <Route path="/quiz/Hamiltonian" element={<Hamiltonian />} />
              <Route path="/quiz/Eulerian" element={<Eulerian />} />

              <Route path="/problems/Matrice de adiacenta" element={<AdiacentMatrix />} />
              <Route path="/problems/Calculul gradului unui varf" element={<TopDegree />} />
              <Route path="/problems/Nodurile cu grad maxim si minim" element={<MaxAndMinKnots />} />
              <Route path="/problems/Eliminarea muchiilor" element={<EdgesDelete />} />
              <Route path="/problems/Subgraf conex" element={<SubGraph />} />
              <Route path="/problems/Graf complementar" element={<ComplementGraph />} />
              <Route path="/problems/Graf complet" element={<CompletGraph />} />
              <Route path="/problems/Graf bipartit" element={<GraphBipartitProblem />} />
              <Route path="/problems/Determinarea tipului de lant" element={<ChainProblem />} />
              <Route path="/problems/Numarul de componente conexe" element={<ConexComponentsProblem />} />
              <Route path="/problems/Verificare graf arbore" element={<GraphTreeProblem />} />
              <Route path="/problems/Verificare graf Hamiltonian" element={<HamiltonianGraphProblem />} />
              <Route path="/problems/Verificare graf Eulerian" element={<EulerianGraphProblem />} />

              <Route path="/problems/Fisiere text" element={<TextFile />} />



              {/*PROBLEME BAC*/}

              {/*PROBLEME FOR*/}
              <Route path="/problems/bac/Cea mai mare suma de k termeni" element={<KTermsSum />} />
              <Route path="/problems/bac/Verificarea numerelor crescatoare" element={<AscendingVerify />} />
              <Route path="/problems/bac/Cifra maxima si nr de aparitii" element={<MaxNrAndApp />} />
              <Route path="/problems/bac/Determinarea numerelor cu aparitii multiple" element={<MultiplyApp />} />
              <Route path="/problems/bac/Rearanjarea elementelor" element={<ElementsRearange />} />

              {/*PROBLEME MATRICI*/}
              <Route path="/problems/bac/Matrice cu valori diferite" element={<DiffValuesMatrix />} />
              <Route path="/problems/bac/Matrice cu sume diferite pe linii si coloane" element={<DiffSumLinesCol />} />
              <Route path="/problems/bac/Generarea unei matrice cu numere pare" element={<EvenNumbersMatrix />} />
              <Route path="/problems/bac/Produs sub diagonala secundara" element={<LastDigitProduct />} />
              
              {/*PROBLEME SUBPROGRAME*/}
              <Route path="/problems/bac/Suma numerelor pare" element={<EvenNumbersSum />} />
              <Route path="/problems/bac/Patratul numerelor prime" element={<PrimeNrSquare />} />
              <Route path="/problems/bac/Suma si numarul de cifre" element={<SumAndDigits />} />
              <Route path="/problems/bac/Cifra cu proprietate de medie aritmetica" element={<AverageDigit />} />
              <Route path="/problems/bac/Fractii ireductibile" element={<IrreducibleFractions />} />
              <Route path="/problems/bac/Numar minim cu cifra maxima" element={<MinNumberMaxDigit />} />



              {/*PROBLEME WHILE*/}
              <Route path="/problems/bac/Puteri ale lui k" element={<KPows />} />

              {/*PROBLEME CHAR*/}
              <Route path="/problems/bac/Eliminarea consoanelor" element={<ConsonantDelete />} />

            </Routes>
          </NotificationProvider>
        </UserProgress>

      </AuthProvider>
    </div >
  );
}

export default App;
