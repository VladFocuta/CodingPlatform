import React, { useState } from 'react'
import ProblemPage from "../../../components/functions/ProblemPage"
import { checkAnswers } from '../../../components/functions/quizValidation';

function Partial() {
    const [testPassed, setTestPassed] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [lastSubmitTime, setLastSubmitTime] = useState(null);

    const answersChoices = [
        { id: 1, a: 'Se obține păstrând toate muchiile și eliminând unele dintre vârfuri (noduri).' },
        { id: 2, a: 'Se obține păstrând toate vârfurile (nodurile) și eliminând unele dintre muchii (sau chiar niciuna).' },
        { id: 3, a: 'Are aceleași noduri ca graful inițial , dar mai puține (sau aceleași) muchii.' },
        { id: 4, a: 'Are aceleași muchii ca graful inițial , dar mai puține (sau aceleași) noduri.' },
    ];

    const validateQuiz = () => {
        checkAnswers(setTestPassed, selectedAnswers, correctAnswers, setFeedbackMessage, setLastSubmitTime, lastSubmitTime);
    }

    const correctAnswers = [2, 3];


    const handleCheckboxChange = (id) => {
        setSelectedAnswers((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const problemContent = (
        <>
            <h4 style={{ marginBottom: '30px', borderBottom: '1px solid white' }}>
                Care dintre următoarele afirmații despre graful parțial sunt adevărate?
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
            problemName="Partial"
            problemPoints={1}
            problemContent={problemContent}
            lecture={false}
            quiz={true}
            nextRoute="/quiz/Subgraf"
            testPassed={testPassed} />

    )
}

export default Partial