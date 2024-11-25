import React, { useState } from 'react'
import Infos from './userProfileScreens/Infos';
import ResetPassword from './ResetPassword';
import { UserAuth } from '../../backend/firebaseConfig/authProvider';
import SecretQuestion from './userProfileScreens/SecretQuestion';
import EmailChange from './userProfileScreens/EmailChange';



function Profile() {
    const { loggedIn } = UserAuth();
    const [infosIsClicked, setInfosIsClicked] = useState(true);
    const [changePasswordIsClicked, setChangePasswordIsClicked] = useState(false);
    const [secretQuestionIsClicked, setSecretQuestionIsClicked] = useState(false);
    const [changeEmailIsClicked, setChangeEmailIsClicked] = useState(false);

    const handleInfos = () => {
        setChangePasswordIsClicked(false);
        setSecretQuestionIsClicked(false);
        setChangeEmailIsClicked(false);
        setInfosIsClicked(true);
    }

    const handleChangePassword = () => {
        setInfosIsClicked(false)
        setSecretQuestionIsClicked(false);
        setChangeEmailIsClicked(false)
        setChangePasswordIsClicked(true);
    }

    const handleSecretQuestion = () => {
        setInfosIsClicked(false)
        setChangePasswordIsClicked(false);
        setChangeEmailIsClicked(false)
        setSecretQuestionIsClicked(true);
    }

    const handleChangeEmail = () => {
        setSecretQuestionIsClicked(false);
        setChangePasswordIsClicked(false);
        setInfosIsClicked(false)
        setChangeEmailIsClicked(true);
    }

    return (
        <>
            {loggedIn ? (
                <div className='profile-container'>
                    <div className='profile-header'>
                        <div className='picture'>
                            <div className='logo-for-profile'></div>
                        </div>

                        <div className='options'>
                            <button onClick={handleInfos} className='button' style={{ background: infosIsClicked ? '#e4dddd' : 'transparent', color: infosIsClicked ? '#747373' : '#fff' }} >Informatii</button>
                            <button onClick={handleChangeEmail} style={{ background: changeEmailIsClicked ? '#e4dddd' : 'transparent', color: changeEmailIsClicked ? '#747373' : '#fff' }} className='button'>Schimba email</button>
                            <button onClick={handleChangePassword} className='button' style={{ background: changePasswordIsClicked ? '#e4dddd' : 'transparent', color: changePasswordIsClicked ? '#747373' : '#fff' }}>Schimba parola</button>
                            <button onClick={handleSecretQuestion} className='button' style={{ background: secretQuestionIsClicked ? '#e4dddd' : 'transparent', color: secretQuestionIsClicked ? '#747373' : '#fff' }}> Intrebare secreta</button>
                        </div>

                        <div className='infos' >
                            <h5 style={{ textAlign: 'center', marginTop: '3px' }}>Profilul meu</h5>
                            {infosIsClicked && (<Infos />)}
                            {changePasswordIsClicked && (<ResetPassword changePassword={true} />)}
                            {secretQuestionIsClicked && (<SecretQuestion />)}
                            {changeEmailIsClicked && (<EmailChange />)}

                        </div>
                    </div>

                </div>
            ) : (
                <h1 className='home-container' style={{ color: 'white' }}>Trebuie sa te loghezi!</h1>
            )}

        </>
    )
}

export default Profile