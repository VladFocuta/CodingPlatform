import React, { useState } from 'react'
import ProblemPage from "../../../components/functions/ProblemPage"
import { checkAnswers } from '../../../components/functions/quizValidation';

function Biconex() {
    const [testPassed, setTestPassed] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [lastSubmitTime, setLastSubmitTime] = useState(null);

    const answersChoices = [
        { id: 1, a: 'Un graf complet este întotdeauna biconex.' },
        { id: 2, a: 'Orice ciclu este biconex (nu putem deconecta graful prin eliminarea unui singur nod).' },
        { id: 3, a: 'Un graf care conține un punct de articulație (nod a cărui eliminare rupe conexitatea) NU este biconex.' },
        { id: 4, a: 'Un graf biconex nu poate fi „spart” prin eliminarea unui singur nod.' },
    ];

    const correctAnswers = [1, 2, 3, 4];


    const handleCheckboxChange = (id) => {
        setSelectedAnswers((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

     const validateQuiz = () => {
            checkAnswers(setTestPassed, selectedAnswers, correctAnswers, setFeedbackMessage, setLastSubmitTime, lastSubmitTime);
        }


    const problemContent = (
        <>
            <h4 style={{ marginBottom: '30px', borderBottom: '1px solid white' }}>
                Care din următoarele afirmații sunt adevărate?
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
            problemName="Biconex"
            problemPoints={1}
            problemContent={problemContent}
            lecture={false}
            quiz={true}
            nextRoute="/problems/Numarul de componente conexe"
            testPassed={testPassed} />

    )
}

export default Biconex