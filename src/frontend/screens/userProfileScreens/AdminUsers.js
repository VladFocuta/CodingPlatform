import React, { useEffect, useState } from 'react';
import { deleteUserChapter, getAllUsers, updateUserChapter } from '../../../backend/functions/handleGetUsers';
import { setAccessExpiration } from '../../../backend/functions/handleAccess';

function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [selectedCapitol, setSelectedCapitol] = useState({});
    const [userId, setUserId] = useState('');
    const [userMessages, setUserMessages] = useState({});
    const [hours, setHours] = useState(0);

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

    const handleSelectCapitol = (event, userId) => {
        const text = event.target.options[event.target.selectedIndex].text;
        setUserId(userId);
        setSelectedCapitol(text);
        setUserMessages((prev) => ({
            ...prev,
            [userId]: { success: '', error: '' }
        }));
    };

    const handleGetHours = (event, userId) => {
        setHours(event.target.value);
        setUserId(userId);
    };

    const handleConfirmLimit = async () => {
        if (hours > 0) {
            try {
                await setAccessExpiration(userId, hours);
                console.log("Limita a fost actualizată cu:", hours);
            } catch (error) {
                console.error("Limita nu a putut fi actualizată", error);
            }
        }
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
            }
        } else {
            setUserMessages((prev) => ({
                ...prev,
                [userId]: { success: '', error: 'Capitolul nu a fost selectat.' }
            }));
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {users.map((user, index) => {
                const messages = userMessages[user.userId] || { success: '', error: '' };

                return (
                    <ul key={index} style={{ width: '90%', fontSize: '20px', padding: '10px', listStyleType: 'none' }}>
                        <li
                            style={{
                                padding: '15px',
                                borderBottom: '1px solid white',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                background: '#222',
                                color: 'white',
                                borderRadius: '10px',
                                marginBottom: '10px'
                            }}
                        >
                            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{user.name}</div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', width: '100%' }}>
                                <select
                                    onChange={(event) => handleSelectCapitol(event, user.userId)}
                                    className="form-select"
                                    style={{ width: '250px', padding: '5px' }}
                                >
                                    <option value="">Capitol:</option>
                                    <option value="1">While-structură de control</option>
                                    <option value="2">Recapitulare While</option>
                                    <option value="2">Structura repetitiva for</option>
                                    <option value="2">Recapitulare For</option>
                                </select>

                                <button
                                    onClick={handleConfirm}
                                    className="costumButton"
                                    style={{
                                        background: '#00bfff',
                                        padding: '5px',
                                        borderRadius: '10px',
                                        width: '150px',
                                        color: 'white',
                                        border: 'none'
                                    }}
                                >
                                    Confirmă
                                </button>

                                <button
                                    onClick={handleDelete}
                                    className="btn btn-danger"
                                    style={{
                                        width: '150px',
                                        padding: '5px',
                                        borderRadius: '10px',
                                    }}
                                >
                                    Șterge
                                </button>
                            </div>

                            <div style={{ marginTop: '10px', width: '100%', textAlign: 'center' }}>
                                <label style={{ marginRight: '10px' }}>Limita de ore:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Ore"
                                    onChange={(event) => handleGetHours(event, user.userId)}
                                    style={{ width: '100px', padding: '5px', textAlign: 'center' }}
                                />
                            </div>

                            <button
                                onClick={handleConfirmLimit}
                                className="costumButton"
                                style={{
                                    background: '#00bfff',
                                    padding: '5px',
                                    borderRadius: '10px',
                                    width: '150px',
                                    color: 'white',
                                    border: 'none',
                                    marginTop: '10px'
                                }}
                            >
                                Confirmă limita
                            </button>

                            {messages.success && <div style={{ color: 'green', marginTop: '10px' }}>{messages.success}</div>}
                            {messages.error && <div style={{ color: 'red', marginTop: '10px' }}>{messages.error}</div>}
                        </li>
                    </ul>
                );
            })}
        </div>
    );
}

export default AdminUsers;
