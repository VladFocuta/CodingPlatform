import React, { useState } from 'react'
import ProblemPage from "../../../components/functions/ProblemPage"
import { checkAnswers } from '../../../components/functions/quizValidation';

function Arbore() {
    const [testPassed, setTestPassed] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [lastSubmitTime, setLastSubmitTime] = useState(null);

    const answersChoices = [
        { id: 1, a: '1. Ciclu' },
        { id: 2, a: '1. Graf bipartit' },
        { id: 3, a: '1. Graf regulat' },
        { id: 4, a: '1. Arbore' },
        { id: 5, a: '2. Eulerian' },
        { id: 6, a: '2. Hamiltonian' },
        { id: 7, a: '2. Complet' },
        { id: 8, a: '2. Neconex' },
        { id: 9, a: '3. Izolate' },
        { id: 10, a: '3. De grad impar' },
        { id: 11, a: '3. Fara muchii' },
        { id: 12, a: '3. Conectate' },
    ];

    const validateQuiz = () => {
        checkAnswers(setTestPassed, selectedAnswers, correctAnswers, setFeedbackMessage, setLastSubmitTime, lastSubmitTime);
    }

    const correctAnswers = [4, 8, 12];

    const handleCheckboxChange = (id) => {
        setSelectedAnswers((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

   /* const checkAnswers = () => {
        // Verificăm dacă răspunsurile selectate coincid exact cu cele corecte
        const isCorrect =
            selectedAnswers.length === correctAnswers.length &&
            selectedAnswers.every((id) => correctAnswers.includes(id));

        setTestPassed(isCorrect);
        setFeedbackMessage(isCorrect ? '✔️ Răspuns corect!' : '❌ Răspuns greșit. Încearcă din nou!');
    };*/


    const problemContent = (
        <>
            <h4 style={{ marginBottom: '30px', borderBottom: '1px solid white' }}>
                1. Graful care este conex și nu prezintă cicluri se numește...
            </h4>
            <h4 style={{ marginBottom: '30px', borderBottom: '1px solid white' }}>
                2. Dacă eliminăm o muchie dintr-un arbore, graful devine...
            </h4>
            <h4 style={{ marginBottom: '30px', borderBottom: '1px solid white' }}>
                3. Un arbore este un graf „fără bucle”, în care toate nodurile sunt...
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
            problemName="Arbore"
            problemPoints={1}
            problemContent={problemContent}
            lecture={false}
            quiz={true}
            nextRoute="/quiz/Hamiltonian"
            testPassed={testPassed} />

    )
}

export default Arbore