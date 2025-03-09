import React, { useState } from 'react'
import ProblemPage from "../../../components/functions/ProblemPage"
import { checkAnswers } from '../../../components/functions/quizValidation';

function Hamiltonian() {
    const [testPassed, setTestPassed] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [lastSubmitTime, setLastSubmitTime] = useState(null);

    const answersChoices = [
        { id: 1, a: 'Un graf hamiltonian are un drum închis care trece prin toate nodurile exact o dată' },
        { id: 2, a: 'Dacă pentru orice nod x, gradul său este cel puțin n / 3, atunci graful conține un ciclu hamiltonian' },
        { id: 3, a: 'Dacă pentru orice nod x, gradul său este cel puțin n / 2, atunci graful conține un ciclu hamiltonian' },
        { id: 4, a: 'Gradul unui vârf d(x) este numărul de muchii incident cu acel vârf' },

    ];

    const validateQuiz = () => {
        checkAnswers(setTestPassed, selectedAnswers, correctAnswers, setFeedbackMessage, setLastSubmitTime, lastSubmitTime);
    }

    const correctAnswers = [1, 3, 4];

    const handleCheckboxChange = (id) => {
        setSelectedAnswers((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const problemContent = (
        <>
            <h4 style={{ marginBottom: '30px', borderBottom: '1px solid white' }}>
                Care dintre următoarele afirmații despre graful hamiltonian sunt adevarate?
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
            problemName="Hamiltonian"
            problemPoints={1}
            problemContent={problemContent}
            lecture={false}
            quiz={true}
            nextRoute="/problems/Verificare graf arbore"
            testPassed={testPassed} />

    )
}

export default Hamiltonian