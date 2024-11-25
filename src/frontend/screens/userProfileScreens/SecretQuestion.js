import React, { useState } from 'react'
import Logo from '../../components/Logo';
import { UserAuth } from '../../../backend/firebaseConfig/authProvider';
import { addSecretQuestion } from '../../../backend/functions/handleSecretQuestion';

function SecretQuestion() {
  const { user } = UserAuth();
  const userId = user?.uid;
  const [answer, setAnswer] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const handleAnswer = (answer) => {
    setAnswer(answer);
  }

  const handleSelectQuestion = (event) => {
    const text = event.target.options[event.target.selectedIndex].text;
    setSelectedQuestion(text);
  }

  const handleSecretQuestion = async () => {
    const data = {
      userId: userId,
      secretAnswer: answer,
      question: selectedQuestion
    }
    await addSecretQuestion(userId, data);
  }
 

  return (
    <>
      <div className='login-container' style={{ height: '50%' }}>
        <Logo />
        <form action="" >
          <h1 style={{ marginBottom: '15px' }}>Intrebare secreta</h1>

          <select onChange={handleSelectQuestion} className="form-select" aria-label="Default select example">
            <option value="" disabled>Selecteaza una din intrebari:</option>
            <option value="1">Numele primului tau animal de companie</option>
            <option value="2">Locul unde ai copilarit</option>
          </select>

          <div className='input-box'>
            <input type='text' placeholder='Raspuns' name="answer" required onChange={(event) => handleAnswer(event.target.value)} />
          </div>

          <div>
            <button onClick={handleSecretQuestion} type="submit" className="button" style={{ background: '#333' }}>Confirma</button>
          </div>


        </form>

      </div>
    </>
  )
}

export default SecretQuestion