import React, { useEffect, useState } from 'react';
import { deleteUserChapter, getAllUsers, updateUserChapter } from '../../../backend/functions/handleGetUsers';

function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [selectedCapitol, setSelectedCapitol] = useState({});
    const [userId, setUserId] = useState('');
    const [userMessages, setUserMessages] = useState({});

    const handleSelectCapitol = (event, userId) => {
        const text = event.target.options[event.target.selectedIndex].text;
        setUserId(userId);
        setSelectedCapitol(text);

        // Reset specific user messages
        setUserMessages((prev) => ({
            ...prev,
            [userId]: { success: '', error: '' }
        }));
    };

    const handleConfirm = async () => {
        if (selectedCapitol && selectedCapitol !== 'Capitol:') {
            try {
                await updateUserChapter(userId, selectedCapitol);
                setUserMessages((prev) => ({
                    ...prev,
                    [userId]: { success: 'Capitolul a fost actualizat.', error: '' }
                }));
                
            } catch (error) {
                setUserMessages((prev) => ({
                    ...prev,
                    [userId]: { success: '', error: 'Capitolul nu se poate actualiza.' }
                }));
                console.error('Capitolul nu se poate actualiza.', error);
            }
        } else {
            setUserMessages((prev) => ({
                ...prev,
                [userId]: { success: '', error: 'Capitolul nu a fost selectat.' }
            }));
        }
    };

    const handleDelete = async () => {
        if (selectedCapitol && selectedCapitol !== 'Capitol:') {
            try {
                await deleteUserChapter(userId, selectedCapitol);
                setUserMessages((prev) => ({
                    ...prev,
                    [userId]: { success: 'Capitolul a fost șters.', error: '' }
                }));
                
            } catch (error) {
                setUserMessages((prev) => ({
                    ...prev,
                    [userId]: { success: '', error: 'Capitolul nu poate fi șters.' }
                }));
                console.error('Capitolul nu poate fi șters', error);
            }
        } else {
            setUserMessages((prev) => ({
                ...prev,
                [userId]: { success: '', error: 'Capitolul nu a fost selectat.' }
            }));
        }
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getAllUsers();
                setUsers(users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            {users.map((user, index) => {
                const messages = userMessages[user.userId] || { success: '', error: '' }; // Mesaje specifice utilizatorului curent
                return (
                    <ul key={index} style={{ width: '100%' }}>
                        <li
                            style={{
                                padding: '5px',
                                borderBottom: '1px solid white',
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}
                        >
                            {user.name}{' '}
                            <select
                                onChange={(event) => handleSelectCapitol(event, user.userId)}
                                className="form-select"
                                aria-label="Default select example"
                                style={{ marginRight: '5px' }}
                            >
                                <option value="">
                                    Capitol:
                                </option>
                                <option value="1">While-structură de control</option>
                                <option value="2">Recapitulare While</option>
                            </select>{' '}
                            <button
                                onClick={handleConfirm}
                                className="costumButton"
                                style={{
                                    background: '#00bfff',
                                    padding: '3px',
                                    borderRadius: '10px',
                                    marginRight: '5px'
                                }}
                            >
                                Confirmă
                            </button>
                            <button onClick={handleDelete} className="btn btn-danger">
                                Șterge
                            </button>
                        </li>
                        {messages.success && <div style={{ color: 'green' }}>{messages.success}</div>}
                        {messages.error && <div style={{ color: 'red' }}>{messages.error}</div>}
                    </ul>
                );
            })}
        </div>
    );
}

export default AdminUsers;
