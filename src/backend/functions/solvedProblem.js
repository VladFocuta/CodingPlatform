import { db } from "../firebaseConfig/firebaseConfig"
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";

const solvedProblem = async (data, user, progressPoints, problemsName) => {
    if (user && data) {
        try {
            const userId = user.uid;
            const solvedProblemsRef = doc(db, 'solvedProblems', userId);

            const docSnapShot = await getDoc(solvedProblemsRef);

            if (docSnapShot.exists()) {
                const existingSolvedProblems = docSnapShot.data().solvedProblem || []; // Dacă array-ul nu există, inițializează-l cu unul gol
                if (!existingSolvedProblems.includes(problemsName)) {

                    const updatedSolvedProblems = [...existingSolvedProblems, problemsName];

                    await updateDoc(solvedProblemsRef, {
                        solvedProblem: updatedSolvedProblems,
                        pointsPerChapter: progressPoints,
                    });
                }
            } else {
                // Inițializează documentul cu un array gol la prima salvare
                await setDoc(solvedProblemsRef, {
                    solvedProblem: [problemsName],
                    pointsPerChapter: progressPoints,
                    userId: user?.uid,
                    name: user?.displayName,
                    credits: 100
                });
            }

        } catch (error) {
            console.log(error.message);
        }
    }
}

export { solvedProblem };