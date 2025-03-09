export const checkAnswers = async (setTestPassed, selectedAnswers, correctAnswers, setFeedbackMessage, setLastSubmitTime, lastSubmitTime) => {
    if (selectedAnswers.length) {
        const currentTime = new Date().getTime();
        if (lastSubmitTime && currentTime - lastSubmitTime < 30000) {
            const remainingTime = 30 - Math.floor((currentTime - lastSubmitTime) / 1000);
            setFeedbackMessage(`Trebuie să aștepți ${remainingTime} secunde înainte de a trimite din nou.`);
            return;
        }
        setFeedbackMessage('');
        

        try {
            const isCorrect =
                selectedAnswers.length === correctAnswers.length &&
                selectedAnswers.every((id) => correctAnswers.includes(id));

            setTestPassed(isCorrect);
            setFeedbackMessage(isCorrect ? '✔️ Răspuns corect!' : '❌ Răspuns greșit. Încearcă din nou!');
            setLastSubmitTime(currentTime);
        } catch (error) {
            console.log('Error while running the quiz', error);
        } 

    }


}