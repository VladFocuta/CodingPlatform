import { db } from "../firebaseConfig/firebaseConfig"
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";

const solvedProblem = async (data, user, progressPoints, problemsName) => {
    if (user && data) {
        try {
            const userId = user.uid;
            const solvedProblemsRef = doc(db, 'solvedProblems', userId);

            const docSnapShot = await getDoc(solvedProblemsRef)
            if (docSnapShot.exists()) {
                const existingSolvedProblems = docSnapShot.data().solvedProblem || [];
                if (!existingSolvedProblems.includes(problemsName)) {
                   
                    const updatedSolvedProblems = [...existingSolvedProblems, problemsName];

                   
                    await updateDoc(solvedProblemsRef, {
                        solvedProblem: updatedSolvedProblems,
                        pointsPerChapter: progressPoints
                    });
                }
            } else {
                await setDoc(solvedProblemsRef, data);
            }

        } catch (error) {
            console.log(error.message);
        }
    }
}

export { solvedProblem };