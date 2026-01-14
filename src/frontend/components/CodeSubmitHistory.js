import React, { useEffect, useState } from 'react'
import CodeStyle from './CodeStyle'
import { getSubmitedCode } from '../../backend/functions/storeUserCode'
import { useLocation } from 'react-router-dom';
import { UserAuth } from '../../backend/firebaseConfig/authProvider';


function CodeSubmitHistory() {
    const [codeList, setCodeList] = useState([]);
    const location = useLocation();
    const problemName = location.state.data;
    const { user } = UserAuth();
    const userId = user?.uid;
   
    useEffect(() => {
        const fetchSubmittedCode = async () => {
            const fetchedCode = await getSubmitedCode(problemName, userId);
            setCodeList(fetchedCode);
        };
        fetchSubmittedCode();
    }, [problemName, userId]);

    return (
        <div className='main-container'>
            <h1 className='home-container' style={{ color: 'white' }}>
                <p>Submisiile tale</p>
            </h1>

            <div className='userInfo' style={{ marginTop: '40px', flexDirection: 'column' }}>

                {codeList.map((submission, index) => (
                    <div key={index}>
                        {index + 1}. Submis la data: {submission.timestamp}
                        <CodeStyle key={index} code={submission.userCode} />
                    </div>
                ))}
            </div>


        </div>
    )
}

export default CodeSubmitHistory