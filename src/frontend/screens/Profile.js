import React, { useState } from 'react'
import Infos from './userProfileScreens/Infos';
import ResetPassword from './ResetPassword';
import { UserAuth } from '../../backend/firebaseConfig/authProvider';
import SecretQuestion from './userProfileScreens/SecretQuestion';
import EmailChange from './userProfileScreens/EmailChange';
import { UserProgressData } from '../components/contexts/userProgress';
import AdminUsers from './userProfileScreens/AdminUsers';

function Profile() {
    const { loggedIn } = UserAuth();
    const { admin } = UserProgressData();
    const [infosIsClicked, setInfosIsClicked] = useState(true);
    const [changePasswordIsClicked, setChangePasswordIsClicked] = useState(false);
    const [secretQuestionIsClicked, setSecretQuestionIsClicked] = useState(false);
    const [changeEmailIsClicked, setChangeEmailIsClicked] = useState(false);
    const [adminUsersIsClicked, setAdminUsersIsClicked] = useState(false);


    const handleAdminUsers = () => {
        setChangePasswordIsClicked(false);
        setSecretQuestionIsClicked(false);
        setChangeEmailIsClicked(false);
        setInfosIsClicked(false);
        setAdminUsersIsClicked(true);
    }

    const handleInfos = () => {
        setChangePasswordIsClicked(false);
        setSecretQuestionIsClicked(false);
        setChangeEmailIsClicked(false);
        setAdminUsersIsClicked(false);
        setInfosIsClicked(true);
    }

    const handleChangePassword = () => {
        setInfosIsClicked(false)
        setSecretQuestionIsClicked(false);
        setChangeEmailIsClicked(false)
        setAdminUsersIsClicked(false);
        setChangePasswordIsClicked(true);
    }

    const handleSecretQuestion = () => {
        setInfosIsClicked(false)
        setChangePasswordIsClicked(false);
        setAdminUsersIsClicked(false);
        setChangeEmailIsClicked(false)
        setSecretQuestionIsClicked(true);
    }

    const handleChangeEmail = () => {
        setSecretQuestionIsClicked(false);
        setChangePasswordIsClicked(false);
        setAdminUsersIsClicked(false);
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
                            <button onClick={handleSecretQuestion} className='button' style={{ background: secretQuestionIsClicked ? '#e4dddd' : 'transparent', color: secretQuestionIsClicked ? '#747373' : '#fff' }}>Intrebare secreta</button>
                            {admin && (
                                <button onClick={handleAdminUsers} className='button' style={{ background: adminUsersIsClicked ? '#e4dddd' : 'transparent', color: adminUsersIsClicked ? '#747373' : '#fff' }}>Administrare utilizatori</button>
                            )}
                        </div>

                        <div className='infos' >
                            <h5 style={{ textAlign: 'center', marginTop: '3px' }}>Profilul meu</h5>
                            {infosIsClicked && (<Infos />)}
                            {changePasswordIsClicked && (<ResetPassword changePassword={true} />)}
                            {secretQuestionIsClicked && (<SecretQuestion />)}
                            {changeEmailIsClicked && (<EmailChange />)}
                            {adminUsersIsClicked && (<AdminUsers />)}

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