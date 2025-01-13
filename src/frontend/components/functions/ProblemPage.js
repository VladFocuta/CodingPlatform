import React, { useEffect, useState } from 'react';
import { UserAuth } from '../../../backend/firebaseConfig/authProvider';
import { useNavigate } from 'react-router-dom';
import { solvedProblem } from '../../../backend/functions/solvedProblem';
import { UserProgressData } from '../contexts/userProgress';
import CommentsArea from '../CommentsArea';
import { countProblemSolved } from '../../../backend/functions/handleSolvedProbCounter';



function ProblemPage({ problemName, problemPoints, problemContent, nextRoute, problemHeader, problemEnd, testPassed, lecture }) {
    const { loggedIn, user } = UserAuth();
    const navigate = useNavigate();
    const { userProgressPoints, problemsSolved } = UserProgressData();
    const progressPoints = userProgressPoints + problemPoints;
    const [counterSolvedProblem, setCounterSolvedProblem] = useState(0);


    useEffect(() => {
        countProblemSolved(problemName)
            .then(counter => {
                setCounterSolvedProblem(counter);
                
            })
            .catch(error => {
                console.error('Error fetching problem count:', error);
            })
    }, [problemName])


    const data = {
        solvedProblem: problemName,
        status: true,
        userId: user?.uid,
        name: user?.displayName,
        pointsPerChapter: progressPoints
    };

    const isProblemSolved = problemsSolved?.includes(problemName);

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

    return (
        <>
            {loggedIn ? (
                <div className='main-container'>


                    <h1 className='home-container' style={{ color: 'white' }}>
                        {problemName}
                    </h1>
                    <div>
                    {/*<strong style={{ color: 'white' }}>{counterSolvedProblem} </strong>*/}
                        <i className="fa-solid fa-users"
                            title={`Rezolvat de: ${counterSolvedProblem} utilizatori`}
                            style={{ color: 'white' }}></i>
                    </div>


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
                        <div style={{ marginBottom: '40px' }}>
                            <CommentsArea
                                problemName={problemName}
                            />
                        </div>
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