import React, { createContext, useContext, useLayoutEffect, useState, useEffect, useMemo, useCallback } from 'react'
import { db } from '../../../backend/firebaseConfig/firebaseConfig'
import { UserAuth } from '../../../backend/firebaseConfig/authProvider'
import { getDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore'


const AuthContext = createContext();

export const UserProgress = ({ children }) => {
    const { user } = UserAuth();
    const userId = user?.uid;
    const [userProgressPoints, setUserProgressPoints] = useState(null);
    const [reviewed, setReviewed] = useState(null);
    const [problemsSolved, setProblemsSolved] = useState([]);
    const [admin, setAdmin] = useState(null);
    const [capitols, setCapitols] = useState('');
    const [credits, setCredits] = useState(0);
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        if (!userId) {
            setLoading(false);
            setReviewed(false);
            setUserProgressPoints(null);
            setProblemsSolved([]);
            setAdmin(null);
            setCapitols('');
            setCredits(0);
            return;
        }

        setLoading(true);

        const userProgressRef = doc(db, 'solvedProblems', userId);

        const unsubscribeProgress = onSnapshot(userProgressRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data();

                setUserProgressPoints(data.pointsPerChapter);
                setProblemsSolved(data.solvedProblem);
                setCapitols(data.capitols);
                setCredits(data.credits);
                setReviewed(data.reviewed ?? false);
            } else {
                setUserProgressPoints(null);
                setCapitols("");
                setProblemsSolved([]);
                setReviewed(false);
            }

            setLoading(false);
        }, (error) => {
            console.error('Error while fetching user progress:', error);
            setLoading(false);
        });

        return () => unsubscribeProgress();
    }, [userId]);

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

    const updateReviewed = useCallback(async (value) => {
        if (!userId) return;

        try {
            const userProgressRef = doc(db, 'solvedProblems', userId);

            await updateDoc(userProgressRef, {
                reviewed: value
            });

        } catch (error) {
            console.error('Error updating reviewed status:', error);
            throw error;
        }
    }, [userId]);

    const contextValue = useMemo(() => ({
        userProgressPoints,
        problemsSolved,
        setUserProgressPoints,
        admin,
        capitols,
        credits,
        reviewed,
        setReviewed,
        updateReviewed,
        loading
    }), [userProgressPoints, problemsSolved, admin, capitols, credits, reviewed, setReviewed, updateReviewed, loading]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserProgressData = () => {
    return useContext(AuthContext);
}
