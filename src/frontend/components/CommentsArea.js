import React, { useState, useEffect } from 'react';
import { UserAuth } from '../../backend/firebaseConfig/authProvider';
import { addComment, addReplyToComment, getComments } from '../../backend/functions/handleComments';
import { UserProgressData } from './contexts/userProgress';

function CommentsArea({ problemName }) {
    const { user } = UserAuth();
    const { admin } = UserProgressData();
    const adminId = "TApDY4IDxHQ4dC1sdjC4R0u4aP03";
    const userdId = user?.uid;
    const [commentsList, setCommentsList] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');
    const [replyText, setReplyText] = useState({});

    useEffect(() => {
        const unsubscribe = getComments(problemName, userdId, setCommentsList, admin);

        return () => unsubscribe && unsubscribe();
    }, [problemName, userdId, admin]);

    const handleAddComment = async () => {
        if (!newCommentText.trim()) return;

        const commentData = {
            text: newCommentText,
            userId: user?.uid,
            userName: user?.displayName || 'Anonim',
            replies: []
        };
        await addComment(problemName, commentData);
        setNewCommentText('');
    };

    const handleAddReply = async (commentId) => {
        const text = replyText[commentId];
        if (!text) return;

        const replyData = {
            text,
            userId: user?.uid,
            userName: user?.displayName || 'Anonim'
        };
        await addReplyToComment(problemName, commentId, replyData);
        setReplyText((prev) => ({ ...prev, [commentId]: '' }));
    };

    const handleReplyTextChange = (commentId, text) => {
        setReplyText((prev) => ({ ...prev, [commentId]: text }));
    };

    return (
        <div>
            <h4>Intrebari recente</h4>
            <>
                {
                    commentsList.map((comment) => (
                        <div key={comment.id} style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                            {comment.userId === adminId && <small style={{ color: '#00bfff', marginRight: '3px', fontWeight: 'bold' }}> (Admin)</small>}
                            <strong>{comment.userName}</strong> - {comment.timestamp}
                            <p>{comment.text}</p>

                            {/* Reply input for each comment */}
                            <input
                                type="text"
                                placeholder="Răspuns..."
                                value={replyText[comment.id] || ''}
                                onChange={(e) => handleReplyTextChange(comment.id, e.target.value)}
                                style={{ marginBottom: '5px', width: '100%', padding: '3px', borderRadius: '5px' }}
                            />
                            <button onClick={() => handleAddReply(comment.id)} className="btn btn-secondary btn-sm">Răspunde</button>

                            {/* Display replies */}
                            {comment.replies.length > 0 && (
                                <div style={{ marginLeft: '20px', marginTop: '10px' }}>
                                    {comment.replies.map((reply, idx) => (
                                        <div key={idx} style={{ background: reply.userId === adminId ? 'rgb(240, 239, 239)' : '#ccc', padding: '5px', marginBottom: '2px', borderRadius: '5px', color: 'black' }}>
                                            {reply.userId === adminId && <small style={{ color: '#00bfff', marginRight: '3px', fontWeight: 'bold' }}> (Admin)</small>}
                                            <strong >{reply.userName}</strong> - {reply.timestamp}
                                            <p style={{ color: 'black' }}>{reply.text}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    ))
                }
            </>

            <div style={{ marginTop: '20px' }}>
                <textarea
                    className="form-control"
                    placeholder="Adauga comentariul tau aici"
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    style={{ height: '100px', marginBottom: '10px' }}
                />
                <button onClick={handleAddComment} className="btn btn-primary">Adaugă comentariu</button>
            </div>
        </div>
    );
}

export default CommentsArea;
