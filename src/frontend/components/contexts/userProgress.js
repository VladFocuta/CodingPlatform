import React, { createContext, useContext, useLayoutEffect, useState } from 'react'
import { db } from '../../../backend/firebaseConfig/firebaseConfig'
import { UserAuth } from '../../../backend/firebaseConfig/authProvider'
import { getDoc, doc } from 'firebase/firestore'

const AuthContext = createContext();

export const UserProgress = ({ children }) => {
    const { user } = UserAuth();
    const userId = user?.uid;
    const [userProgressPoints, setUserProgressPoints] = useState(null);
    const [problemsSolved, setProblemsSolved] = useState([]);

    useLayoutEffect(() => {
        const fetchUserProgress = async () => {
            if (!userId) {
                return;
            }

            try {
                const userProgressRef = doc(db, 'solvedProblems', userId)
                const docSnapshot = await getDoc(userProgressRef);
                if (docSnapshot.exists()) {
                    setUserProgressPoints(docSnapshot.data().pointsPerChapter);
                    setProblemsSolved(docSnapshot.data().solvedProblem);
               
                }
            } catch (error) {
                console.error('Error while fetching user progress:', error);
            }
        }

        fetchUserProgress();
    }, [userId])

    return (
        <AuthContext.Provider value={{ userProgressPoints, problemsSolved, setUserProgressPoints }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserProgressData = () => {
    return useContext(AuthContext);
}
