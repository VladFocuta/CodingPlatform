import { createContext, useState, useContext, useEffect, useRef } from "react";
import { getAllReplies } from "../../../backend/functions/handleComments";
import { UserAuth } from "../../../backend/firebaseConfig/authProvider";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const { user } = UserAuth();
    const userId = user?.uid;
    const [newMessagesCount, setNewMessagesCount] = useState(0);
    const [relevantReplies, setRelevantReplies] = useState([]);

    const [commentChecked, setCommentChecked] = useState(false);


    const prevRepliesCountRef = useRef(0);
 

    useEffect(() => {
        if (!userId) {
            return;
        }
        // Ascultăm comentariile în timp real
        const unsubscribe = getAllReplies(userId, setRelevantReplies);

        // Dezabonăm la demontarea componentei
        return () => unsubscribe && unsubscribe();
    }, [userId]);


    useEffect(() => {
        const repliesCount = relevantReplies.length;
        // Calculăm diferența doar dacă numărul de comentarii a crescut
        if (repliesCount > prevRepliesCountRef.current) {
            setNewMessagesCount(repliesCount - prevRepliesCountRef.current);
        } else if (commentChecked) { // mesajul a fost vazut. Setam counterul la 0
            prevRepliesCountRef.current = repliesCount;
            setNewMessagesCount(0)
        }

        // Actualizăm ref-ul pentru următoarea comparație
        prevRepliesCountRef.current = repliesCount;
    }, [relevantReplies, commentChecked]);


    return (
        <NotificationContext.Provider value={{ newMessagesCount, setNewMessagesCount, commentChecked, setCommentChecked }}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext);

