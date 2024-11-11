import { createContext, useState, useContext, useEffect, useRef } from "react";
import { getAllReplies } from "../../../backend/functions/handleComments";
import { UserAuth } from "../../../backend/firebaseConfig/authProvider";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const { user } = UserAuth();
    const userId = user?.uid;
    const [newMessagesCount, setNewMessagesCount] = useState(0);
    const [relevantReplies, setRelevantReplies] = useState([]);

    const [lastViewed, setLastViewed] = useState(null);


    const prevRepliesCountRef = useRef(0);

    useEffect(() => {

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
        }

        // Actualizăm ref-ul pentru următoarea comparație
        prevRepliesCountRef.current = repliesCount;
    }, [relevantReplies]);

 
    return (
        <NotificationContext.Provider value={{ newMessagesCount, setNewMessagesCount, setLastViewed, lastViewed }}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext);

