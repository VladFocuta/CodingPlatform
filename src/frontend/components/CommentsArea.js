import React, { useState } from 'react';

function CommentsArea({ onAddComment }) {
    const [comment, setComment] = useState('');

  
    const handleAdd = () => {
        if (comment.trim()) {
            onAddComment(comment);  // Trimitere comentariu către `ProblemPage`
            setComment('');       // Resetare comentariu după trimitere
        }
    };

    return (
        <>
            <div className="form-floating">
                <textarea 
                    className="form-control" 
                    placeholder="Leave a comment here" 
                    id="floatingTextarea2" 
                    style={{ height: '100px' }}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <label htmlFor="floatingTextarea2">Comments</label>
            </div>
            <button onClick={handleAdd} className="btn btn-primary" style={{ marginTop: '10px' }}>
                Add Comment
            </button>
        </>
    );
}

export default CommentsArea;
