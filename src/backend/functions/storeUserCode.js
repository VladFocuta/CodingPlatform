import { db } from "../firebaseConfig/firebaseConfig"
import { getDocs, addDoc, collection, query, where, orderBy,doc, deleteDoc, limit } from "firebase/firestore";

export const storeCode = async (code, problemsName, userId) => {
    if (code && problemsName && userId) {
        try {
            const submitedCodeRef = collection(db, 'submitedCode', problemsName, 'submission');

            const currentEntriesQuery = query(submitedCodeRef, where("userId", "==", userId), orderBy("timestamp", "asc"));
            const currentEntriesSnapshot = await getDocs(currentEntriesQuery);

            if (currentEntriesSnapshot.size >= 5) {
                const oldestDoc = currentEntriesSnapshot.docs[0];
                await deleteDoc(doc(db, 'submitedCode', problemsName, 'submission', oldestDoc.id));
            }

            await addDoc(submitedCodeRef, {
                ...code,
                userId,
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
        const q = query(submitedCodeRef, where("userId", "==", userId), orderBy("timestamp", "desc", limit(5)))
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            code.push({ id: doc.id, ...doc.data() });
          
        });

    } catch (error) {
        console.error("Error getting submited code: ", error);
    }


    return code;
};