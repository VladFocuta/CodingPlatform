import { db } from "../firebaseConfig/firebaseConfig";
import { collection, getDocs, getDoc, doc, updateDoc, arrayUnion, setDoc, arrayRemove } from "firebase/firestore";


export const getAllUsers = async () => {
    try {
        const usersCollectionRef = collection(db, 'solvedProblems');

        const querySnapShot = await getDocs(usersCollectionRef);

        const users = querySnapShot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        return users;
    } catch (error) {
        console.error('Error while fetching all users:', error);
        throw error;
    }
}

export const updateUserChapter = async (userId, chapterName) => {
    try {
        const userDocRef = doc(db, 'solvedProblems', userId);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
            await updateDoc(userDocRef, {
                capitols: arrayUnion(chapterName)
            })

        } else {
            await setDoc(userDocRef, {
                capitols: [chapterName]
            })
        }
        console.log(`Chapter "${chapterName}" updated/added for user ${userId}`);
    } catch (error) {
        console.error("Error updating user's capitols:", error);
    }

}

export const deleteUserChapter = async (userId, chapterName) => {
    try {
        const userDocRef = doc(db, 'solvedProblems', userId);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
            await updateDoc(userDocRef, {
                capitols: arrayRemove(chapterName)
            })
        } else {
            console.log("User document does not exist - chapter");
        }
        console.log('Chapter deleted successfully');

    } catch (error) {
        console.error("Error deleting chapter:", error);
    }
}