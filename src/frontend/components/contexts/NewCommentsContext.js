import { createContext, useState, useContext } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [newMessagesCount, setNewMessagesCount] = useState(0);

    return (
        <NotificationContext.Provider value={{ newMessagesCount, setNewMessagesCount }}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext);

