import React, { useEffect, useState } from 'react'
import { getAllComments } from '../../backend/functions/handleComments'
import { UserProgressData } from '../components/contexts/userProgress';
import { UserAuth } from '../../backend/firebaseConfig/authProvider';
import { useNotification } from '../components/contexts/NewCommentsContext';


function Messages() {
    const [commentsList, setCommentsList] = useState([]);
    const { admin } = UserProgressData();
    const { user } = UserAuth();
    const { setCommentChecked } = useNotification();
    const userId = user?.uid;

    const userComments = commentsList.filter(comm => comm.userId === userId);

    useEffect(() => {
        setCommentChecked(true);
        // Ascultăm comentariile în timp real
        const unsubscribe = getAllComments(setCommentsList);

        // Dezabonăm la demontarea componentei
        return () => unsubscribe && unsubscribe();
    }, [setCommentChecked]);


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

            {userComments && (
                <>
                    {userComments.map((comments) => (
                        <div key={comments.id} className='userInfo' style={{ marginTop: '20px', width: '50%', flexDirection: 'column' }}>
                            <strong>{comments.userName}</strong> {comments.timestamp}
                            <a href={`/problems/${comments.lesson}`}>{comments.lesson}</a>
                        </div >
                    ))}
                </>
            )}



        </div >
    )
}

export default Messages