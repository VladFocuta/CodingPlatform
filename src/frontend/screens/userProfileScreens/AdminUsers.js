import React, { useEffect, useState } from 'react';
import { deleteUserChapter, getAllUsers, updateUserChapter } from '../../../backend/functions/handleGetUsers';
import { setAccessExpiration } from '../../../backend/functions/handleAccess';
import { fetchCredits, updateCredits } from '../../../backend/functions/handleCredits';

function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [selectedCapitol, setSelectedCapitol] = useState({});
    const [userId, setUserId] = useState('');
    const [userMessages, setUserMessages] = useState({});
    const [hours, setHours] = useState(0);
    const [newCredits, setNewCredits] = useState(0);
    
    // trebuie sa fetchuiesc creditele utilizatorlui selectat,nu pe ale mele
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

    const handleGetNewCredits = (event, userId) => {
        setNewCredits(event.target.value);
        setUserId(userId);
    }

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

    const handleCreditsUpdate = async () => {
        try {
            const credits = await fetchCredits(userId);
            const updatedCredits = parseInt(credits) + parseInt(newCredits);
            await updateCredits(updatedCredits, userId);
            setUserMessages((prev) => ({
                ...prev,
                [userId]: { success: 'Creditele au fost actualizate.', error: '' }
            }));

        } catch (error) {
            setUserMessages((prev) => ({
                ...prev,
                [userId]: { success: '', error: 'Creditele nu pot fi actualizate.' }
            }));

        }
    }

    const handleConfirmLimit = async () => {
        try {
            await setAccessExpiration(userId, hours);
            setUserMessages((prev) => ({
                ...prev,
                [userId]: { success: 'Limita orelor a fost actualizata.', error: '' }
            }));
        } catch (error) {
            setUserMessages((prev) => ({
                ...prev,
                [userId]: { success: '', error: 'Limita orelor nu poate fi actualizata. ' }
            }));
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
                                    <option value="3">Structura repetitiva for</option>
                                    <option value="4">Recapitulare For</option>
                                    <option value="5">Matrici</option>
                                    <option value="6">Recapitulare Matrici</option>
                                    <option value="7">Subprograme</option>
                                    <option value="8">Siruri de caractere</option>
                                    <option value="9">Recursivitate & Metoda backtracking</option>
                                    <option value="10">Struct</option>
                                    <option value="11">Fisiere text</option>
                                    <option value="12">Grafuri</option>
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
                                Confirmă limita ore
                            </button>

                            <div style={{ marginTop: '10px', width: '100%', textAlign: 'center' }}>
                                <label style={{ marginRight: '10px' }}>Credite:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Credite"
                                    onChange={(event) => handleGetNewCredits(event, user.userId)}
                                    style={{ width: '100px', padding: '5px', textAlign: 'center' }}
                                />
                            </div>

                            <button
                                onClick={handleCreditsUpdate}
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
                                Confirmă noile credite
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
