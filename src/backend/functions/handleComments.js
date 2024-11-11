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
        //handle all replies
        const repliesRef = doc(db, 'allReplies');
        await updateDoc(repliesRef, {
            replies: arrayUnion({
                ...replyData,
                timestamp: new Date().toLocaleString()
            })
        });
        //handle each reply
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

export const getComments = (lessonId, userId, setCommentsList, asAdmin) => {
    const commentsRef = collection(db, 'lessons', lessonId, 'comments');
    const q = asAdmin ? query(commentsRef, orderBy("timestamp", "desc")) : query(commentsRef, where("userId", "==", userId), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const comments = [];
        querySnapshot.forEach((doc) => {
            comments.push({ id: doc.id, ...doc.data() });
        });

        setCommentsList(comments);

    }, (error) => {
        console.error("Error getting comments: ", error);
    });

    // Returnăm funcția de dezabonare
    return unsubscribe;
};


export const getAllComments = (setCommentsList) => {

    const commentsRef = collection(db, 'comments');
    const q = query(commentsRef, orderBy("timestamp", "desc"));
    // Ascultă modificările în timp real pentru toate comentariile
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const comments = [];
        querySnapshot.forEach((doc) => {
            comments.push({ id: doc.id, ...doc.data() });
        });

        setCommentsList(comments);
    }, (error) => {
        console.error("Error getting all comments: ", error);
    });

    // Returnăm funcția de dezabonare
    return unsubscribe;
}

export const getAllReplies = (setAllReplies) => {
    const repliesRef = collection(db, "allReplies");
    const q = query(repliesRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const replies = [];
        querySnapshot.forEach((doc) => {
            replies.push({ id: doc.id, ...doc.data() });
        });
        setAllReplies(replies);
    }, (error) => {
        console.error("Error getting all replies: ", error);
    });
    return unsubscribe;
}
