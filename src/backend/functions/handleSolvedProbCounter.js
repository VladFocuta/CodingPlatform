import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebaseConfig';

export const countProblemSolved = async (problemName) => {
    try {
        const solvedProblemsCollectionRef = collection(db, 'solvedProblems');

        const q = query(solvedProblemsCollectionRef, where('solvedProblem', 'array-contains', problemName));

        const querySnapShot = await getDocs(q);

        const count = querySnapShot.size;
      
        return count;
    } catch (error) {
        console.error('Error while counting problem occurrences:', error);
    }

}