import { db } from "../firebaseConfig/firebaseConfig";
import { collection, addDoc, doc, updateDoc, arrayUnion, onSnapshot, query, where, orderBy } from 'firebase/firestore';

export const addComment = async (lessonId, commentData) => {
    try {
        const allCommentsCollection = collection(db, 'comments');
        const commentsCollection = collection(db, 'lessons', lessonId, 'comments');
        await addDoc(commentsCollection, {
            ...commentData,
            timestamp: new Date().toLocaleString()
        });
        await addDoc(allCommentsCollection, {
            ...commentData,
            lesson: lessonId,
            timestamp: new Date().toLocaleString()
        })
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

export const getComments = (lessonId, userId, setCommentsList, asAdmin, setNewMessagesCount) => {
    const commentsRef = collection(db, 'lessons', lessonId, 'comments');
    const q = asAdmin ? query(commentsRef, orderBy("timestamp", "asc")) : query(commentsRef, where("userId", "==", userId), orderBy("timestamp", "asc"));

    let initialLoad = true;

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const comments = [];
        querySnapshot.forEach((doc) => {
            comments.push({ id: doc.id, ...doc.data() });
        });

        if (!initialLoad) {
            //const newComments = comments.filter(comment => comment.userId !== userId);
            const newReplies = comments.filter(comment => comment.replies?.some(reply => reply.userId !== userId));
        
            if (newReplies.length > 0) {
                setNewMessagesCount((prevCount) => prevCount + newReplies.length);
            }
        }

        setCommentsList(comments);
        initialLoad = false;
    }, (error) => {
        console.error("Error getting comments: ", error);
    });

    // Returnăm funcția de dezabonare
    return unsubscribe;
};


export const getAllComments = (setCommentsList) => {

    const commentsRef = collection(db, 'comments');
    const q = query(commentsRef, orderBy("timestamp", "asc"));
    // Ascultă modificările în timp real pentru toate comentariile
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const comments = [];
        querySnapshot.forEach((doc) => {
            comments.push({ id: doc.id, ...doc.data() });
        });

        // Actualizăm lista de comentarii

        setCommentsList(comments);
    }, (error) => {
        console.error("Error getting all comments: ", error);
    });

    // Returnăm funcția de dezabonare
    return unsubscribe;
}
