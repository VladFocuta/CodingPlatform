import React, { useEffect, useState } from 'react'
import { deleteUserChapter, getAllUsers, updateUserChapter } from '../../../backend/functions/handleGetUsers'

function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [selectedCapitol, setSelectedCapitol] = useState({});
    const [userId, setUserId] = useState('');

    const handleSelectCapitol = (event, userId) => {
        setUserId(userId);
        const text = event.target.options[event.target.selectedIndex].text;
        setSelectedCapitol(text);
    }

    const handleCofirm = async () => {
        await updateUserChapter(userId, selectedCapitol)
        console.log('Confirmat')
    }

    const handleDelete = async () => {
        await deleteUserChapter(userId, selectedCapitol)
        console.log('Document sters')
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getAllUsers();
                setUsers(users);

            } catch (error) {
                console.error("Error fetching users in front end side:", error);
            }
        }
        fetchUsers();
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            {users.map((user, index) => {
                return (
                    <ul key={index} style={{ width: '100%' }}>
                        <li style={{ padding: '5px', borderBottom: '1px solid white', display: 'flex', justifyContent: 'space-around' }}>
                            {user.name} <select onChange={(event) => handleSelectCapitol(event, user.userId)} className="form-select" aria-label="Default select example" style={{ marginRight: '5px' }}>
                                <option value="0">Capitol:</option>
                                <option value="1">While-structură de control</option>
                                <option value="2">Recapitulare While</option>
                            </select> <button onClick={handleCofirm} className='costumButton' style={{ background: '#00bfff', padding: '3px', borderRadius: '10px', marginRight: '5px' }}>confirma</button>
                            <button onClick={handleDelete} className='btn btn-danger'>sterge</button>
                        </li>
                    </ul>
                )

            })}
        </div >
    )
}

export default AdminUsers