import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../backend/firebaseConfig/authProvider'
import { FaUser } from "react-icons/fa"
import Logo from '../components/Logo'

function ResetPassword() {
    const { forgotPassword } = UserAuth();
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const handleEmail = (email) => {
        setEmail(email);
    }

    const fetchPassword = async (e) => {
        e.preventDefault();
        if (email.length <= 0) {
            return;
        } else {
            try {
                await forgotPassword(email);
                navigate('/Login');
            } catch (error) {
                console.log(error.message);
                setErrors('Error found. Please check if you entered a valid email.')
            }
        }


    }
    return (
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

                </div>


            </form>

        </div>
    )
}

export default ResetPassword