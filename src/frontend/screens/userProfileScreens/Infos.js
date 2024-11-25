import React from 'react'
import { UserAuth } from '../../../backend/firebaseConfig/authProvider'
import { UserProgressData } from '../../components/contexts/userProgress';

function Infos() {
    const { user } = UserAuth();
    const { userProgressPoints } = UserProgressData();
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{
                display: 'flex', flexDirection: 'column', borderTop: '1px solid white', borderBottom: '1px solid white', height: '30%',
                width: '40%', justifyContent: 'space-between', textAlign: 'center'
            }}>
                <div style={{ marginLeft: '5px' }}>
                    <h3> Nume: {user && (user.displayName)} </h3>
                </div>

            </div>

            <div style={{
                display: 'flex', flexDirection: 'column', borderTop: '1px solid white', borderBottom: '1px solid white', height: '30%',
                width: '40%', justifyContent: 'space-between', textAlign: 'center'
            }}>

                <div style={{ marginLeft: '5px' }}>
                    <h3>Email: {user && (user.email)} </h3>
                </div>

            </div>

            <div style={{ position: 'absolute', top: '370px', left: '350px', padding: '5px' }}>
                <h3>Punctaj actual</h3>
                <div style={{ alignSelf: 'center' }} className="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-warning" style={{width: userProgressPoints ? `${userProgressPoints}%` : '0%', color: 'black' }}>
                        {userProgressPoints}%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infos
