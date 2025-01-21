import { db } from "../firebaseConfig/firebaseConfig";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export const updateCredits = async (credits, userId) => {
    const solvedProblemsRef = doc(db, 'solvedProblems', userId);

    const docSnapShot = await getDoc(solvedProblemsRef);

    if (docSnapShot.exists()) {
        await updateDoc(solvedProblemsRef, {
            credits: credits
        });
    }
}

export const fetchCredits = async (userId) => {
    const solvedProblemsRef = doc(db, 'solvedProblems', userId);

    const docSnapShot = await getDoc(solvedProblemsRef);
    let userCredits;
    if (docSnapShot.exists()) {
        const data = docSnapShot.data();
        userCredits = data.credits;
    }
    return userCredits;
}