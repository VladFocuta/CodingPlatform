import React, { useState } from 'react'
import ProblemPage from "../../../components/functions/ProblemPage"
import { checkAnswers } from '../../../components/functions/quizValidation';

function GraphComplet() {
    const [testPassed, setTestPassed] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [lastSubmitTime, setLastSubmitTime] = useState(null);

    const answersChoices = [
        { id: 1, a: 'Fals.' },
        { id: 2, a: 'Adevarat.' },

    ];

    const validateQuiz = () => {
        checkAnswers(setTestPassed, selectedAnswers, correctAnswers, setFeedbackMessage, setLastSubmitTime, lastSubmitTime);
    }

    const correctAnswers = [2];

    const handleCheckboxChange = (id) => {
        setSelectedAnswers((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const problemContent = (
        <>
            <h4 style={{ marginBottom: '30px', borderBottom: '1px solid white' }}>
                Într-un graf complet, fiecare nod este conectat la toate celelalte.
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
            problemName="Complet"
            problemPoints={1}
            problemContent={problemContent}
            lecture={false}
            quiz={true}
            nextRoute="/quiz/Regulat"
            testPassed={testPassed} />

    )
}

export default GraphComplet