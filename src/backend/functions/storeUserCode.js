import { db } from "../firebaseConfig/firebaseConfig"
import { getDocs, addDoc, collection, query, where } from "firebase/firestore";

export const storeCode = async (code, problemsName) => {
    if (code && problemsName) {
        try {
            const submitedCodeRef = collection(db, 'submitedCode', problemsName, 'submission');
            await addDoc(submitedCodeRef, {
                ...code,
                timestamp: new Date().toLocaleString()
            });

        } catch (error) {
            console.error("Error adding submited code: ", error);
        }
    }

}


export const getSubmitedCode = async (problemsName, userId) => {
    const code = [];

    try {
        const submitedCodeRef = collection(db, 'submitedCode', problemsName, 'submission');
        const q = query(submitedCodeRef, where("userId", "==", userId))
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            code.push({ id: doc.id, ...doc.data() });
            console.log(doc.data())
        });

    } catch (error) {
        console.error("Error getting submited code: ", error);
    }


    return code;
};