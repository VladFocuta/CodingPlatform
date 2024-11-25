import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './frontend/screens/Home';
import NavBar from './frontend/components/NavBar';
import Main from './frontend/screens/Main';
import Login from './frontend/screens/Login';
import { AuthProvider } from './backend/firebaseConfig/authProvider';
import Register from './frontend/screens/Register';
import Introduction from './frontend/problems/first-chapter/Introduction';
import Variables from './frontend/problems/first-chapter/Variables';
import Operators from './frontend/problems/first-chapter/Operators';
import { UserProgress } from './frontend/components/contexts/userProgress';
import ConsoleLog from './frontend/problems/first-chapter/ConsoleLog';
import SumOfTwoNumbers from './frontend/problems/first-chapter/SumOfTwoNumbers';
import Functions from './frontend/problems/first-chapter/Functions';
import WordsDisplay from './frontend/problems/first-chapter/WordsDisplay';
import Average from './frontend/problems/first-chapter/Average';
import IfExplanation from './frontend/problems/If-Instruction/IfExplanation';
import Brothers from './frontend/problems/If-Instruction/Brothers';
import Vacancy from './frontend/problems/If-Instruction/Vacancy';
import ResetPassword from './frontend/screens/ResetPassword';
import Maxim from './frontend/problems/If-Instruction/Maxim';
import Ascending from './frontend/problems/If-Instruction/Ascending';
import Ascending3 from './frontend/problems/If-Instruction/Ascending3';
import While from './frontend/problems/second-chapter/While';
import ReverseCounter from './frontend/problems/second-chapter/ReverseCounter';
import EvenNumbers from './frontend/problems/second-chapter/EvenNumbers';
import Counter from './frontend/problems/second-chapter/Counter';
import RepeatNumber from './frontend/problems/second-chapter/RepeatNumber';
import Concatenation from './frontend/problems/second-chapter/Concatenation';
import Concatenation2 from './frontend/problems/second-chapter/Concatenation2';
import CodeSubmitHistory from './frontend/components/CodeSubmitHistory';
import Return from './frontend/problems/second-chapter/Return';
import Messages from './frontend/screens/Messages';
import ScrollToTop from './frontend/components/ScrollToTop';
import { NotificationProvider } from './frontend/components/contexts/NewCommentsContext';
import Profile from './frontend/screens/Profile';
import Infos from './frontend/screens/userProfileScreens/Infos';



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


              <Route path="/problems/Introducere" element={<Introduction />} />
              <Route path="/problems/Variabile" element={<Variables />} />
              <Route path="/problems/Operatori" element={<Operators />} />
              <Route path="/problems/Afisare" element={<ConsoleLog />} />
              <Route path="/problems/Suma" element={<SumOfTwoNumbers />} />
              <Route path="/problems/Functii" element={<Functions />} />
              <Route path="/problems/Afisare text" element={<WordsDisplay />} />
              <Route path="/problems/Note" element={<Average />} />
              <Route path="/problems/Instructiunea If" element={<IfExplanation />} />
              <Route path="/problems/Fratii" element={<Brothers />} />
              <Route path="/problems/Vacanta" element={<Vacancy />} />
              <Route path="/problems/Maxim" element={<Maxim />} />
              <Route path="/problems/Crescator" element={<Ascending />} />
              <Route path="/problems/Crescator2.0" element={<Ascending3 />} />
              <Route path="/problems/While" element={<While />} />
              <Route path="/problems/Contor" element={<Counter />} />
              <Route path="/problems/Numaratoare inversa" element={<ReverseCounter />} />
              <Route path="/problems/Numerele pare" element={<EvenNumbers />} />
              <Route path="/problems/Numere repetate" element={<RepeatNumber />} />
              <Route path="/problems/Concatenare" element={<Concatenation />} />
              <Route path="/problems/Concatenare 2" element={<Concatenation2 />} />
              <Route path="/problems/Return" element={<Return />} />

            </Routes>
          </NotificationProvider>
        </UserProgress>

      </AuthProvider>
    </div >

  );
}

export default App;
