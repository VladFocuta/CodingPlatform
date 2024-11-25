import { FaLock, FaUser } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md";
import { useState } from 'react'
import { registerValidation } from "../components/functions/registerValidation";
import { useNavigate } from 'react-router-dom'
import { UserAuth } from "../../backend/firebaseConfig/authProvider";
import { getAuth, updateProfile, sendEmailVerification } from "firebase/auth";
import Logo from "../components/Logo";


function Register() {
    const [errors, setErrors] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { registerUser } = UserAuth();
    const auth = getAuth();

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleNavigateToLogin = () => {
        navigate('/Login')
    }

    const updateUserProfile = () => {
        if (Object.keys(values).length > 0) {
            updateProfile(auth.currentUser, {
                displayName: values.name
            }).then(() => {
                console.log('profile updated')
            }).catch((error) => {
                console.log('error while updating profile', error)
            })
        }

    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Please check your email for confirmation');
            });
    }

    const storeUser = async (e) => {
        e.preventDefault();
        const validationErrors = registerValidation(values);
        setErrors(validationErrors);

        try {
            await registerUser(values.email, values.password);
            updateUserProfile();
            verifyEmail();
            setIsLoading(true);
            navigate('/Main');
        } catch (e) {
            console.log(e.message)
        } finally {
            setIsLoading(false);
        }
    }

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    return (
        <div className='login-container'>
            <Logo />
            <form action="" onSubmit={storeUser} >
                <h1>Register</h1>

                <div className='input-box'>
                    <input type='text' placeholder='Nume si prenume' onChange={handleInput} required name='name' />
                    <FaUser className='icon' />
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>

                <div className='input-box'>
                    <input type='text' placeholder='E-mail' required onChange={handleInput} name='email' />
                    <MdOutlineEmail className='icon' />
                    {errors.email && <span className='text-danger' style={{ fontSize: 15 }} >{errors.email}</span>}

                </div>

                <div className='input-box'>
                    <input type='password' placeholder='Parola' required onChange={handleInput} name='password' />
                    <FaLock className='icon' />
                </div>

                <button style={{ marginTop: errors.password ? 20 : 0 }} type="submit" className="costumButton">Inregistreaza-ma</button>

                <div className='register-link'>

                    {errors.password && <span className='text-danger' >{errors.password}</span>}
                    {!loading && (
                       <i className="fa-solid fa-gear fa-spin" style={{ position: 'absolute', color: '#00bfff', top: errors ? '565px' : '535px', left: errors ? '265px' : '265px', fontSize: '20px' }}></i>
                    )}
                    <p>Ai deja un cont? <button className="costumButton" onClick={handleNavigateToLogin} style={{ marginTop: 8 }}>Logheaza-te!</button>
                    </p>
                </div>
            </form>

        </div>
    )
}

export default Register