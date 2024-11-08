import React, { useEffect, useState } from 'react'
import { getAllComments } from '../../backend/functions/handleComments'
import { UserProgressData } from '../components/contexts/userProgress';

function Messages() {
    const [commentsList, setCommentsList] = useState([]);
    const { admin } = UserProgressData();

    useEffect(() => {
        // Ascultăm comentariile în timp real
        const unsubscribe = getAllComments(setCommentsList);

        // Dezabonăm la demontarea componentei
        return () => unsubscribe && unsubscribe();
    }, []);
   
    return (
        <div className='main-container'>
            <h1 className='home-container' style={{ color: 'white' }}>
                Toate comentariile
            </h1>
            {admin && (
                <>
                    {
                        commentsList.map((comments) => (
                            <div key={comments.id} className='userInfo' style={{ marginTop: '20px', width: '50%', flexDirection: 'column' }}>
                                <strong>{comments.userName}</strong> {comments.timestamp}
                                <a href={`/problems/${comments.lesson}`}>{comments.lesson}</a>
                            </div >
                        ))
                    }
                </>
            )}



        </div >
    )
}

export default Messages