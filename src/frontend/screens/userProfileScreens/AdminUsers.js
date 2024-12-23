import React, { useEffect, useState } from 'react';
import { deleteUserChapter, getAllUsers, updateUserChapter } from '../../../backend/functions/handleGetUsers';
import { setAccessExpiration } from '../../../backend/functions/handleAccess';

function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [selectedCapitol, setSelectedCapitol] = useState({});
    const [userId, setUserId] = useState('');
    const [userMessages, setUserMessages] = useState({});
    const [hours, setHours] = useState(0);


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

    const handleGetHours = (event, userId) => {
        const hours = event.target.value;
        setHours(hours);
        setUserId(userId);
    }

    const handleCofirmLimit = async () => {
        if (hours > 0) {
            try {
                await setAccessExpiration(userId, hours);
                console.log("Limita a fost actualizata cu:", hours)
            } catch (error) {
                console.error("Limita nu a putut fi actualizata", error);
            }
        } else {

        }
    }

    const handleConfirm = async () => {
        if (Object.keys(selectedCapitol).length > 0 && selectedCapitol !== 'Capitol:') {
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
                    <ul key={index} style={{ width: '100%', fontSize: '20px' }} >
                        <li
                            style={{
                                padding: '5px',
                                borderBottom: '1px solid white',
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'column'
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
                                    marginRight: '5px',
                                    width: '10%',
                                    alignSelf: 'center',
                                    marginTop: '5px',
                                    marginBottom: '5px'
                                }}
                            >
                                Confirmă
                            </button>
                            <button onClick={handleDelete} className="btn btn-danger"
                                style={{
                                    width: '10%',
                                    alignSelf: 'center',
                                    marginTop: '5px',
                                    marginBottom: '5px'
                                }}>
                                Șterge
                            </button>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Limita de ore</span>
                                <input type="text" className="form-control" placeholder="Ore" aria-label="Username" aria-describedby="basic-addon1"
                                    onChange={(event) => handleGetHours(event, user.userId)} />
                            </div>
                            <button
                                onClick={handleCofirmLimit}
                                className="costumButton"
                                style={{
                                    background: '#00bfff',
                                    padding: '3px',
                                    borderRadius: '10px',
                                    marginRight: '5px',
                                    width: '10%',
                                    alignSelf: 'center',

                                    marginBottom: '5px'
                                }}
                            >
                                Confirmă limita
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
