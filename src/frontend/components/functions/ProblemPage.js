import React, { useState, useEffect } from 'react';
import { UserAuth } from '../../../backend/firebaseConfig/authProvider';
import { useNavigate } from 'react-router-dom';
import { solvedProblem } from '../../../backend/functions/solvedProblem';
import { UserProgressData } from '../contexts/userProgress';
import CommentsArea from '../CommentsArea';
import { addComment, addReplyToComment, getComments } from '../../../backend/functions/handleComments';


function ProblemPage({ problemName, problemPoints, problemContent, nextRoute, problemHeader, problemEnd, testPassed, lecture, comments }) {
    const { loggedIn, user } = UserAuth();
    const navigate = useNavigate();
    const { userProgressPoints, problemsSolved } = UserProgressData();
    const progressPoints = userProgressPoints + problemPoints;
    const [commentsList, setCommentsList] = useState([]);



    const data = {
        solvedProblem: problemName,
        status: true,
        userId: user?.uid,
        name: user?.displayName,
        pointsPerChapter: progressPoints
    };

    const isProblemSolved = problemsSolved?.includes(problemName);

    useEffect(() => {
        const fetchComments = async () => {
            const fetchedComments = await getComments(problemName);
            setCommentsList(fetchedComments);
        };
        fetchComments();
    }, [problemName]);

    const handleNextPage = () => {
        navigate(nextRoute);
    };

    const handleGoToNext = async () => {
        try {
            await solvedProblem(data, user, progressPoints, problemName);
            navigate(nextRoute);
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    };

    const handleAddComment = async (text) => {
        const commentData = {
            text,
            userId: user?.uid,
            userName: user?.displayName || 'Anonim',
            replies: []
        };
        await addComment(problemName, commentData); // Salvează comentariul în Firebase
        setCommentsList(await getComments(problemName)); // Actualizează lista locală a comentariilor
    };

    const handleAddReply = async (text, commentId) => {
        const replyData = {
            text,
            userId: user?.uid,
            userName: user?.displayName || 'Anonim'
        };
        await addReplyToComment(problemName, commentId, replyData); // Salvează răspunsul în Firebase
        setCommentsList(await getComments(problemName)); // Actualizează lista locală a comentariilor
    };

    return (
        <>
            {loggedIn ? (
                <div className='main-container'>


                    <h1 className='home-container' style={{ color: 'white' }}>
                        {problemName}
                    </h1>

                    {problemHeader && (
                        <div className='userInfo' style={{ marginTop: '60px', width: '50%' }}>
                            <strong className='common-text'>
                                {problemHeader}
                            </strong>
                        </div>
                    )}


                    {problemContent && (
                        <div className='userInfo' style={{ marginTop: '20px', width: '50%', flexDirection: 'column' }}>
                            {problemContent}
                        </div>
                    )}


                    {problemEnd && (
                        <div className='userInfo' style={{ marginTop: '20px', width: '50%', alignSelf: 'flex-start' }}>
                            {problemEnd}
                        </div>
                    )}



                    <div>
                        {isProblemSolved ? (
                            <>
                                <button onClick={handleNextPage} type="button" className="btn btn-light" style={{ marginTop: '10px', marginBottom: '30px' }}>
                                    Urmatoarea problema
                                </button>



                            </>
                        ) : (
                            <>
                                < button onClick={handleGoToNext} type="button" className="btn btn-success" style={{ marginTop: '10px', marginBottom: '30px' }} disabled={!testPassed && !lecture} >
                                    Am inteles
                                </button>


                            </>
                        )}

                    </div>

                    <div className='userInfo' style={{ marginTop: '20px', width: '50%', flexDirection: 'column' }}>
                        <h4>Intrebari recente</h4>
                        {commentsList.map((comment) => (
                            <div key={comment.id} style={{ background: 'grey', padding: '10px', marginBottom: '2px', borderRadius: '5px' }}>
                                <strong>{comment.userName}</strong> - {comment.timestamp}
                                <p>{comment.text}</p>
                                <button onClick={() => handleAddReply("Răspuns", comment.id)} className="btn btn-secondary btn-sm">Răspunde</button>

                                {/* Afișează răspunsurile */}
                                {comment.replies.length > 0 && (
                                    <div style={{ marginLeft: '20px', marginTop: '10px' }}>
                                        {comment.replies.map((reply, idx) => (
                                            <div key={idx} style={{ background: '#ccc', padding: '5px', marginBottom: '2px', borderRadius: '5px' }}>
                                                <strong>{reply.user}</strong> - {reply.date}
                                                <p>{reply.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>


                    <div style={{ marginBottom: '40px', width: '50%' }}>
                        <CommentsArea
                            onAddComment={handleAddComment}
                        />
                    </div>

                </div >
            ) : (
                <h1 className='home-container' style={{ color: 'white' }}>Trebuie sa te loghezi!</h1>
            )
            }
        </>
    )
}

export default ProblemPage