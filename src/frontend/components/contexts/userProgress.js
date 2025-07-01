import React, { createContext, useContext, useLayoutEffect, useState, useEffect, useMemo } from 'react'
import { db } from '../../../backend/firebaseConfig/firebaseConfig'
import { UserAuth } from '../../../backend/firebaseConfig/authProvider'
import { getDoc, doc, onSnapshot } from 'firebase/firestore'


const AuthContext = createContext();

export const UserProgress = ({ children }) => {
    const { user } = UserAuth();
    const userId = user?.uid;
    const [userProgressPoints, setUserProgressPoints] = useState(null);
    const [problemsSolved, setProblemsSolved] = useState([]);
    const [admin, setAdmin] = useState(null);
    const [capitols, setCapitols] = useState('');
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
                setCredits(data.credits);
            } else {
                setUserProgressPoints(null);
                setCapitols("");
                setProblemsSolved([]);
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

    const contextValue = useMemo(() => ({
        userProgressPoints,
        problemsSolved,
        setUserProgressPoints,
        admin,
        capitols,
        credits
    }), [userProgressPoints, problemsSolved, admin, capitols, credits]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserProgressData = () => {
    return useContext(AuthContext);
}
