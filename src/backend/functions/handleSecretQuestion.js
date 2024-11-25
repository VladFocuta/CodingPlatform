import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebaseConfig"


export const addSecretQuestion = async (userId, data) => {
    if (userId && data) {
        try {
            const answerDoc = doc(db, 'usersInfo', userId)
            await setDoc(answerDoc, data);
        } catch (error) {
            console.log('Cant add user secret question', error);
        }
    }
}


