import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../backend/firebaseConfig/authProvider'
import { FaUser } from "react-icons/fa"
import Logo from '../components/Logo'

function ResetPassword({ changePassword }) {
    const { forgotPassword, logout } = UserAuth();
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleEmail = (email) => {
        setEmail(email);
        if (errors) {
            setErrors('')
        }
    }
 
    const fetchPassword = async (e) => {
        e.preventDefault();
    
        if (email.length <= 0) {
            return;
        } else {
            try {
                setIsLoading(true);
                await forgotPassword(email);
                logout();
                navigate('/Login');
            } catch (error) {
                console.log(error.message);
                setErrors('Vertificati daca email-ul introdus este valabil.')
            } finally {
                setIsLoading(false);
            }
        }


    }
    return (
        <>
            {!changePassword ? (
                <div className='login-container'>
                    <Logo />
                    <form action="" onSubmit={fetchPassword}>
                        <h1>Resetare parola</h1>
                        <div className='input-box'>
                            <input type='text' placeholder='E-mail' name="email" required onChange={(event) => handleEmail(event.target.value)} />
                            <FaUser className='icon' />

                        </div>
                        {errors && (
                            <span className="text-danger"> {errors}</span>
                        )}
                        <div>
                            <button type="submit" className="costumButton">Confirma</button>
                            {isLoading && (<i className="fa-solid fa-gear" style={{ position: 'absolute', color: '#00bfff', left: '530px', top: '257px', fontSize: '20px' }}></i>)}
                        </div>


                    </form>

                </div>

            ) : (
                <div className='login-container' style={{height: '50%'}}>

                    <Logo />
                    <form action="" onSubmit={fetchPassword}>
                        <h1>Schimba parola</h1>

                        <div className='input-box'>
                            <input type='text' placeholder='E-mail' name="email" required onChange={(event) => handleEmail(event.target.value)} />

                        </div>

                        {errors && (
                            <span className="text-danger"> {errors}</span>
                        )}

                        <div style={{ marginTop: '5px' }}>
                            <button type="submit" className="button" style={{background: '#333'}}>Confirma</button>
                            {isLoading && (<i className="fa-solid fa-gear fa-spin" style={{ position: 'absolute', color: '#00bfff', left: '520px', top: errors ? '280px' : '257px', fontSize: '20px' }}></i>)}

                        </div>

                    </form>
                </div>
            )}


        </>
    )
}

export default ResetPassword