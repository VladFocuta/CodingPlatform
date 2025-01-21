import React, { createContext, useContext, useLayoutEffect, useState, useEffect } from 'react'
import { db } from '../../../backend/firebaseConfig/firebaseConfig'
import { UserAuth } from '../../../backend/firebaseConfig/authProvider'
import { getDoc, doc, onSnapshot } from 'firebase/firestore'


const AuthContext = createContext();

export const UserProgress = ({ children }) => {
    const { user, logout } = UserAuth();
    const userId = user?.uid;
    const [userProgressPoints, setUserProgressPoints] = useState(null);
    const [problemsSolved, setProblemsSolved] = useState([]);
    const [admin, setAdmin] = useState(null);
    const [capitols, setCapitols] = useState('');
    const [limitAccess, setLimitAccess] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(null);
    const [leftMinutes, setLeftMinutes] = useState(null);
    const [getLeftMinutes, setGetLeftMinutes] = useState(null);
    const [credits, setCredits] = useState(0);

    useLayoutEffect(() => {
        if (!userId) {
            return;
        }

        const userProgressRef = doc(db, 'solvedProblems', userId)
        const unsubscribeProgress = onSnapshot(userProgressRef, (docSnapshot) => {

            if (docSnapshot.exists()) {
                const data = docSnapshot.data();
                setUserProgressPoints(data.pointsPerChapter);
                setProblemsSolved(data.solvedProblem);
                setCapitols(data.capitols);
                setLimitAccess(data.accessExpiration)
                setGetLeftMinutes(data.leftTime);
                setCredits(data.credits);
            } else {
                setUserProgressPoints(null);
                setCapitols("");
                setProblemsSolved([]);
                setLimitAccess("");
            }
        }, (error) => {
            console.error('Error while fetching user progress:', error);
        });

        return () => unsubscribeProgress()
    }, [userId])

    useEffect(() => {
        const fetchAdmin = async () => {
            if (!userId) {
                return;
            }

            try {

                const userProgressRef = doc(db, 'admins', userId);

                const docSnapshot = await getDoc(userProgressRef);
                if (docSnapshot.exists()) {
                    setAdmin(docSnapshot.data().admin);
                }
            } catch (error) {
                console.error('Error while fetching admin:', error);
            }
        }

        fetchAdmin();

    }, [userId])

   /* useEffect(() => {
        if (user && limitAccess) {
            const expirationDate = new Date(limitAccess);

            const intervalId = setInterval(() => {
                const now = new Date();
                const timeLeft = expirationDate - now;

                if (timeLeft <= 0) {
                    clearInterval(intervalId);
                    alert("Timpul de acces a expirat. Veți fi delogat.");
                    logout();
                } else {
                    const hours = Math.floor(timeLeft / (1000 * 60 * 60));

                    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

                    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                    const totalMinutes = Math.floor(timeLeft / (1000 * 60)); // Calcul total minute rămase
                    setLeftMinutes(totalMinutes);

                    setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
                }
            }, 1000); // Actualizează la fiecare secundă

            return () => clearInterval(intervalId);
        }
    }, [user, limitAccess, logout]);*/



    return (
        <AuthContext.Provider value={{ userProgressPoints, problemsSolved, setUserProgressPoints, admin, capitols, timeRemaining, leftMinutes, getLeftMinutes, credits}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserProgressData = () => {
    return useContext(AuthContext);
}
