import { createContext, useState, useContext, useEffect, useRef } from "react";
import { getAllReplies } from "../../../backend/functions/handleComments";
import { UserAuth } from "../../../backend/firebaseConfig/authProvider";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const { user } = UserAuth();
    const userId = user?.uid;
    const [newMessagesCount, setNewMessagesCount] = useState(0);
    const [lastViewed, setLastViewed] = useState(null);
    const [commentsList, setCommentsList] = useState([]);

    const userComments = commentsList.filter(comm => comm.userId === userId);
    const commentsLength = userComments.length;
    const prevCommentsCountRef = useRef(0);
console.log(commentsList)
    useEffect(() => {

        // Ascultăm comentariile în timp real
        const unsubscribe = getAllReplies(setCommentsList);

        // Dezabonăm la demontarea componentei
        return () => unsubscribe && unsubscribe();
    }, []);


    useEffect(() => {
        // Calculăm diferența doar dacă numărul de comentarii a crescut
        if (commentsLength > prevCommentsCountRef.current) {
            setNewMessagesCount(commentsLength - prevCommentsCountRef.current);
        }

        // Actualizăm ref-ul pentru următoarea comparație
        prevCommentsCountRef.current = commentsLength;
    }, [commentsLength]);
  
    console.log('refCount:', prevCommentsCountRef.current);
    console.log('allReplies:', commentsLength)
    return (
        <NotificationContext.Provider value={{ newMessagesCount, setNewMessagesCount, setLastViewed, lastViewed }}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext);

