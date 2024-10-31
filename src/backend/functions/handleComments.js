import { db } from "../firebaseConfig/firebaseConfig";
import { collection, addDoc, getDocs, doc, updateDoc, arrayUnion } from 'firebase/firestore';

export const addComment = async (lessonId, commentData) => {
    try {
        const commentsCollection = collection(db, 'lessons', lessonId, 'comments');
        await addDoc(commentsCollection, {
            ...commentData,
            timestamp: new Date().toLocaleString()
        });
    } catch (error) {
        console.error("Error adding comment: ", error);
    }
};

export const addReplyToComment = async (lessonId, commentId, replyData) => {
    try {
        const commentRef = doc(db, 'lessons', lessonId, 'comments', commentId);
        await updateDoc(commentRef, {
            replies: arrayUnion({
                ...replyData,
                timestamp: new Date().toLocaleString()
            })
        });
    } catch (error) {
        console.error("Error adding reply: ", error);
    }
};

export const getComments = async (lessonId) => {
    const comments = [];
    try {
        const querySnapshot = await getDocs(collection(db, 'lessons', lessonId, 'comments'));
        querySnapshot.forEach((doc) => {
            comments.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.error("Error getting comments: ", error);
    }
    return comments;
};
