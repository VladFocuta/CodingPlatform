import { FaLock, FaUser } from "react-icons/fa"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from "../../backend/firebaseConfig/authProvider";
import Logo from "../components/Logo";
import { getLeftMinutes, updateLimitAccess } from "../../backend/functions/handleAccess";
import { auth } from "../../backend/firebaseConfig/firebaseConfig";

function Login() {

    const [wrongCredentials, setWrongCredentials] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { signIn } = UserAuth();


    const handleRegisterAccount = () => {
        navigate('/Register');
    }


    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const logInUser = async (e) => {
        e.preventDefault();

        if (Object.keys(values).length <= 0) {
            return;
        } else {
            try {
                setIsLoading(true);
                await signIn(values.email, values.password);

                const currentUserId = auth.currentUser?.uid;
                if (!currentUserId) {
                    console.error("User ID not found after login.");
                    return;
                }

                const minutes = await getLeftMinutes(currentUserId);
                if (minutes) {
                    await updateLimitAccess(currentUserId, minutes);
                } else {
                    console.log("Minutes not found.");
                }

                navigate('/Main');
            } catch (error) {
                console.log(error.message)
                if (error) {
                    setWrongCredentials('Wrong credentials! Please check your password or email.');
                }
            } finally {
                setIsLoading(false);
            }
        }

    };

    return (
        <div className='login-container'>
            <Logo />
            <form action="" onSubmit={logInUser}>

                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='E-mail' name="email" required onChange={handleInput} />
                    <FaUser className='icon' />

                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Parola' name="password" required onChange={handleInput} />
                    <FaLock className='icon' />

                </div>

                <div className='forgot-password' style={{ flexDirection: 'column' }}>
                    {wrongCredentials && (
                        <span className="text-danger"> {wrongCredentials}</span>
                    )}
                    <a href="/ResetPassword">Ai uitat parola?</a>

                </div>
                <div>
                    <button type="submit" className="costumButton">Logheaza-ma {isLoading && (
                        <i className="fa-solid fa-gear fa-spin" style={{ color: '#00bfff', fontSize: '20px' }}></i>
                    )}</button>

                </div>

                <div className='register-link' style={{ marginTop: 5 }}>
                    <p >Nu ai un cont?
                        <button onClick={handleRegisterAccount} className='costumButton' style={{ marginTop: 8 }}>Inregistreaza-te!</button>

                    </p>
                </div>
            </form>

        </div>
    )
}

export default Login