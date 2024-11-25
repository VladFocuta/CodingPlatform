import React, { useState, useEffect } from 'react'
import { db } from '../../../backend/firebaseConfig/firebaseConfig'
import { UserAuth } from '../../../backend/firebaseConfig/authProvider'
import { doc, getDoc } from "firebase/firestore"
import { updateEmail } from "firebase/auth";
import Logo from '../../components/Logo';

function EmailChange() {
    const { user } = UserAuth();
    const userId = user?.uid;

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [checkAnswer, setCheckAnswer] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [error, setError] = useState('');

    const handleAnswer = (answer) => {
        setCheckAnswer(answer);
        if (error) {
            setError('')
        }
    }

    const handleNewEmail = (email) => {
        setNewEmail(email);
    }

    useEffect(() => {
        if (!userId) {
            return;
        }

        const getSecretQuestion = async () => {

            try {
                const getQuestionRef = doc(db, 'usersInfo', userId);
                const docSnapShot = await getDoc(getQuestionRef);

                if (docSnapShot.exists()) {
                    const secretQuestion = docSnapShot.data().question;
                    const answer = docSnapShot.data().secretAnswer;
                    setQuestion(secretQuestion);
                    setAnswer(answer);
                }
            } catch (error) {
                console.error('Error while fetching secret question and answer', error);
            }
        }
        getSecretQuestion();
    }, [userId])

    const handleUpdateEmail = async () => {
        if (!userId) {
            return;
        }
        if (checkAnswer === answer && newEmail) {
            try {
                await updateEmail(user, newEmail);
                console.log('updated')
            } catch (error) {
                console.log('Error updating email', error);
            }
        } else {
            setError('Raspunsul nu este corect.')
        }

    }

    return (
        <>
            <div className='login-container' style={{ height: '70%' }}>
                <Logo />
                <form action="" >

                    <h1 style={{ marginBottom: '15px' }}>Schimba-ti email-ul</h1>
                    <strong>Introdu raspunsul corect si noul email.</strong>

                    <div>
                        <input type='text' className="input-group mb-3" style={{ padding: '5px', textAlign: 'center' }} disabled placeholder={question ? (question) : ("Trebuie sa iti setezi intrebarea secreta mai intai.")}></input>
                    </div>

                    <div className='input-box'>
                        <input type='text' placeholder='Raspuns' name="answer" required onChange={(event) => handleAnswer(event.target.value)} />
                    </div>
                    {error && (<span style={{ color: 'red' }}>{error}</span>)}
                    <div className='input-box'>
                        <input type='text' placeholder='Noul email' name="email" required onChange={(event) => handleNewEmail(event.target.value)} />
                    </div>


                    <div>
                        <button type="submit" className="button" onClick={handleUpdateEmail} style={{ background: '#333' }}>Confirma</button>
                    </div>


                </form>
            </div>
        </>
    )
}

export default EmailChange