import { db } from "../firebaseConfig/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { format } from 'date-fns-tz';


export const setAccessExpiration = async (userId, durationInHours) => {
    try {
        const userDocRef = doc(db, 'solvedProblems', userId);
        const userDocSnapshot = await getDoc(userDocRef);

        const timeZone = 'Europe/Berlin'; // Fus orar pentru afișare
        let newExpirationTime;

        if (userDocSnapshot.exists()) {
            const existingData = userDocSnapshot.data();
            const currentExpiration = existingData?.accessExpiration
                ? new Date(existingData.accessExpiration)
                : null;

            if (currentExpiration && currentExpiration > new Date()) {
                // Dacă limita încă nu a expirat, adăugăm ore la data existentă
                newExpirationTime = new Date(currentExpiration.getTime()); // Folosim timestamp-ul direct


                newExpirationTime.setHours(newExpirationTime.getHours() + parseInt(durationInHours));
                // console.log("Data regasita in DB:", currentExpiration);
                //console.log("Data dupa adaugare ore:", newExpirationTime);
            } else {
                // Limita a expirat sau nu există, setăm o nouă dată
                newExpirationTime = new Date(); // Data curentă
                newExpirationTime.setHours(newExpirationTime.getHours() + parseInt(durationInHours));
            }
        } else {
            // Documentul nu există, setăm limita pentru prima dată
            newExpirationTime = new Date();
            newExpirationTime.setHours(newExpirationTime.getHours() + durationInHours);
        }

        // Formatarea pentru afișare
        const formattedDate = format(newExpirationTime, 'yyyy-MM-dd HH:mm:ss', { timeZone });

        // Salvarea în baza de date
        if (userDocSnapshot.exists()) {
            await updateDoc(userDocRef, {
                accessExpiration: formattedDate,
            });
        } else {
            await setDoc(userDocRef, {
                accessExpiration: formattedDate,
            });
        }

        console.log("Access Expiration updated:", formattedDate);
    } catch (error) {
        console.error("Error updating Access Expiration:", error);
    }
};


export const updateLimitAccess = async (userId, newLimit) => {
    // Salvează noul timp în baza de date
    try {
        const userDocRef = doc(db, 'solvedProblems', userId);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
            await updateDoc(userDocRef, {
                accessExpiration: newLimit,
            });
        }
        console.log('upadeLimitAccess has worked successfully.')
    } catch (error) {
        console.error('upadeLimitAccess has an error: ', error);
    }

};