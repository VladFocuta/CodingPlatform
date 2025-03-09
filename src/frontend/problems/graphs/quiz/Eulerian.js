import React, { useState } from 'react'
import ProblemPage from "../../../components/functions/ProblemPage"
import { checkAnswers } from '../../../components/functions/quizValidation';

function Eulerian() {
    const [testPassed, setTestPassed] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [lastSubmitTime, setLastSubmitTime] = useState(null);

    const answersChoices = [
        { id: 1, a: 'Nu are noduri izolate' },
        { id: 2, a: 'Are un drum închis care trece prin toate muchiile exact o dată' },
        { id: 3, a: 'Toate vârfurile au grad impar' },
        { id: 4, a: 'Toate vârfurile au grad par' },

    ];
    const validateQuiz = () => {
        checkAnswers(setTestPassed, selectedAnswers, correctAnswers, setFeedbackMessage, setLastSubmitTime, lastSubmitTime);
    }

    const correctAnswers = [3];

    const handleCheckboxChange = (id) => {
        setSelectedAnswers((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    
    const problemContent = (
        <>
            <h4 style={{ marginBottom: '30px', borderBottom: '1px solid white' }}>
                Umătoarele afirmații despre graful eulerian sunt adevărate, cu excepția:
            </h4>

            {answersChoices.map((answer) => {
                return (
                    <div className="form-check" key={answer.id}>
                        <input className="form-check-input" type="checkbox" id={`checkbox-${answer.id}`}
                            checked={selectedAnswers.includes(answer.id)}
                            onChange={() => handleCheckboxChange(answer.id)} />
                        <label className="form-check-label" htmlFor={`checkbox-${answer.id}`}>
                            {answer.a}
                        </label>
                    </div>

                )

            })}
            <button onClick={validateQuiz} className="btn btn-primary mt-3">
                Verifică răspunsurile
            </button>

            {/* Afișează feedback */}
            {feedbackMessage && <p className="mt-2">{feedbackMessage}</p>}

        </>

    )

    return (
        <ProblemPage
            problemName="Eulerian"
            problemPoints={1}
            problemContent={problemContent}
            lecture={false}
            quiz={true}
            nextRoute="/quiz/Eulerian"
            testPassed={testPassed} />

    )
}

export default Eulerian