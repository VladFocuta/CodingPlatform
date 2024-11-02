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


function App() {

  return (

    <div >
      <AuthProvider>
        <UserProgress>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Introduction" element={<Introduction />} />
            <Route path="/Variables" element={<Variables />} />
            <Route path="/Operators" element={<Operators />} />
            <Route path="/ConsoleLog" element={<ConsoleLog />} />
            <Route path="/SumOfTwoNumbers" element={<SumOfTwoNumbers />} />
            <Route path="/Functions" element={<Functions />} />
            <Route path="/WordsDisplay" element={<WordsDisplay />} />
            <Route path="/Average" element={<Average />} />
            <Route path="/IfExplanation" element={<IfExplanation />} />
            <Route path="/Brothers" element={<Brothers />} />
            <Route path="/Vacancy" element={<Vacancy />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/Maxim" element={<Maxim />} />
            <Route path="/Ascending" element={<Ascending />} />
            <Route path="/Ascending3" element={<Ascending3 />} />
            <Route path="/While" element={<While />} />
            <Route path="/ReverseCounter" element={<ReverseCounter />} />
            <Route path="/EvenNumbers" element={<EvenNumbers />} />
            <Route path="/Counter" element={<Counter />} />

          </Routes>
        </UserProgress>
      </AuthProvider>
    </div>

  );
}

export default App;
