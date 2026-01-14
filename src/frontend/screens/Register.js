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
        password: '',
        acceptTerms: false // ✅ adăugat
    });

    const handleNavigateToLogin = () => {
        navigate('/Login')
    }

    const updateUserProfile = () => {
        if (Object.keys(values).length > 0) {
            updateProfile(auth.currentUser, {
                displayName: values.name
            }).then(() => {
                // succes
            }).catch((error) => {
                console.log('error while updating profile', error)
            });
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
        const hasErrors = Object.values(validationErrors).some(error => error);
        if (hasErrors) return;

        try {
            console.log("Încep înregistrarea...");
            setIsLoading(true);
            await registerUser(values.email, values.password);
            console.log("Înregistrare reușită!");
            updateUserProfile();
            verifyEmail();

            navigate('/Main');
        } catch (e) {
            console.log(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    const handleInput = (event) => {
        const { name, value, type, checked } = event.target;
        setValues(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className='login-page'>
            <div className='login-container'>
                <Logo />
                <form onSubmit={storeUser} >
                    <h1>Register</h1>

                    <div className='input-box'>
                        <input type='text' placeholder='Nume si prenume' onChange={handleInput} required name='name' value={values.name} />
                        <FaUser className='icon' />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>

                    <div className='input-box'>
                        <input type='text' placeholder='E-mail' required onChange={handleInput} name='email' value={values.email} />
                        <MdOutlineEmail className='icon' />
                        {errors.email && <span className='text-danger' style={{ fontSize: 15 }}>{errors.email}</span>}
                    </div>

                    <div className='input-box'>
                        <input type='password' placeholder='Parola' required onChange={handleInput} name='password' value={values.password} />
                        <FaLock className='icon' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>

                    {/* ✅ Checkbox Politica de Confidențialitate */}
                    <div className='input-box checkbox' style={{ height: '20px' }}>
                        <input
                            type="checkbox"
                            name="acceptTerms"
                            id="acceptTerms"
                            checked={values.acceptTerms}
                            onChange={handleInput}
                            required
                        />
                        <label htmlFor="acceptTerms">
                            Sunt de acord cu <a href="/policy/policy and confidentiality" target="_blank" rel="noopener noreferrer">Politica de Confidențialitate</a>
                            <span> și </span> <a href="/policy/terms and conditions" target="_blank" rel="noopener noreferrer">Termeni și Condiții</a>
                        </label>
                        {errors.acceptTerms && <span className='text-danger'>{errors.acceptTerms}</span>}
                    </div>

                    <button
                        style={{ marginTop: errors.password ? 30 : 40 }}
                        type="submit"
                        className="costumButton"
                    >
                        Inregistreaza-ma
                        {loading && (
                            <i className="fa-solid fa-gear fa-spin" style={{ color: '#00bfff', fontSize: '20px' }}></i>
                        )}
                    </button>

                    <div className='register-link'>

                        <p>Ai deja un cont?
                            <button
                                className="costumButton"
                                onClick={handleNavigateToLogin}
                                style={{ marginTop: 8 }}
                                type="button"
                            >
                                Logheaza-te!
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
