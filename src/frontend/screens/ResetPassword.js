import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../backend/firebaseConfig/authProvider';
import { FaUser } from "react-icons/fa";
import Logo from '../components/Logo';

function ResetPassword({ changePassword }) {
  const { forgotPassword, logout } = UserAuth();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (errors) setErrors('');
  };

  const fetchPassword = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrors("Te rog introdu un email.");
      return;
    }

    try {
      setIsLoading(true);
      await forgotPassword(email);
      setSuccess("Emailul de resetare a fost trimis.");
      setEmail('');
      await logout();
      setTimeout(() => {
        navigate('/Login');
      }, 2000);
    } catch (error) {
      console.error(error.message);
      setErrors("Verifică dacă emailul introdus este corect sau înregistrat.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderForm = () => (
    <form onSubmit={fetchPassword}>
      <h1>{changePassword ? 'Schimbă parola' : 'Resetare parolă'}</h1>

      <div className='input-box'>
        <input
          type='email'
          placeholder='E-mail'
          name='email'
          required
          value={email}
          onChange={handleEmail}
        />
        <FaUser className='icon' />
      </div>

      {errors && <span className="text-danger">{errors}</span>}
      {success && <span className="text-success">{success}</span>}

      <div style={{ marginTop: '10px', position: 'relative' }}>
        <button
          type="submit"
          className={changePassword ? 'button' : 'costumButton'}
          style={changePassword ? { background: '#333' } : {}}
        >
          Confirmă
        </button>

        {isLoading && (
          <i className="fa-solid fa-gear fa-spin"
             style={{
               position: 'absolute',
               color: '#00bfff',
               left: '50%',
               top: '50%',
               transform: 'translate(-50%, -50%)',
               fontSize: '20px'
             }} />
        )}
      </div>
    </form>
  );

  return (
    <div className='login-container' style={changePassword ? { height: '50%' } : {}}>
      <Logo />
      {renderForm()}
    </div>
  );
}

export default ResetPassword;
