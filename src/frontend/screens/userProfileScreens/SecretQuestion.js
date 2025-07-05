import React, { useState } from 'react';
import Logo from '../../components/Logo';
import { UserAuth } from '../../../backend/firebaseConfig/authProvider';
import { addSecretQuestion } from '../../../backend/functions/handleSecretQuestion';

function SecretQuestion() {
  const { user } = UserAuth();
  const userId = user?.uid;

  const [answer, setAnswer] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
    if (error) setError('');
  };

  const handleSelectQuestion = (e) => {
    const text = e.target.options[e.target.selectedIndex].text;
    setSelectedQuestion(text);
    if (error) setError('');
  };

  const handleSecretQuestion = async (e) => {
    e.preventDefault();

    if (!selectedQuestion || !answer.trim()) {
      setError("Te rog selectează o întrebare și introdu un răspuns.");
      return;
    }

    const data = {
      userId: userId,
      secretAnswer: answer.trim(),
      question: selectedQuestion
    };

    try {
      await addSecretQuestion(userId, data);
      setMessage("Întrebarea secretă a fost salvată cu succes!");
      setAnswer('');
      setSelectedQuestion('');
      
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error while entering secret question:', error);
      setError("A apărut o eroare la salvare. Încearcă din nou.");
    }
  };

  return (
    <>
      <div className='login-container' style={{ height: '55%' }}>
        <Logo />
        <form onSubmit={handleSecretQuestion}>
          <h1 style={{ marginBottom: '15px' }}>Întrebare secretă</h1>

          <select
            onChange={handleSelectQuestion}
            value={selectedQuestion}
            className="form-select mb-3"
            aria-label="Selectează o întrebare"
          >
            <option value="" disabled>Selectează una din întrebări:</option>
            <option value="1">Numele primului tău animal de companie</option>
            <option value="2">Locul unde ai copilărit</option>
          </select>

          <div className='input-box'>
            <input
              type='text'
              placeholder='Răspuns'
              name="answer"
              required
              value={answer}
              onChange={handleAnswer}
            />
          </div>

          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}

          <div>
            <button type="submit" className="button" style={{ background: '#333' }}>Confirmă</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SecretQuestion;
