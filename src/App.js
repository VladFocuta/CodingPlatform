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
              <Route path="/problems/Stop" element={<Stop />} />
              
              <Route path="/problems/Numar maxim" element={<MaxNumber />} />
              <Route path="/problems/CMMD" element={<CMMD />} />
              <Route path="/problems/Suma maxima" element={<MaxSum />} />
              <Route path="/problems/Numar impar" element={<OddNumber />} />
              <Route path="/problems/Factorialul unui numar" element={<Factorial />} />

            </Routes>
          </NotificationProvider>
        </UserProgress>

      </AuthProvider>
    </div >

  );
}

export default App;
