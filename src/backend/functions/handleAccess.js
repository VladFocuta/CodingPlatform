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
    try {
        const userDocRef = doc(db, 'solvedProblems', userId);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
            const timeZone = 'Europe/Berlin';

            // Calcularea timpului de expirare
            const now = new Date();
            const newExpirationTime = new Date(now.getTime() + newLimit * 60000); // Adăugăm minutele (newLimit)

            // Formatarea datei corecte în funcție de fusul orar
            const formattedDate = format(newExpirationTime, 'yyyy-MM-dd HH:mm:ss', { timeZone });

            await updateDoc(userDocRef, {
                accessExpiration: formattedDate,
            });
          
            
        } else {
            throw new Error('Invalid date or user does not exist.');
        }
    } catch (error) {
        console.error('updateLimitAccess has an error: ', error);
    }
};


export const storeLeftMinutes = async (userId, minutes) => {
    try {
        const userDocRef = doc(db, 'solvedProblems', userId);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
            await updateDoc(userDocRef, {
                leftTime: minutes
            });
        } else {
            setDoc(userDocRef, {
                leftTime: minutes
            })
        }
        console.log("Left minutes stored successfully", minutes);
    } catch (error) {
        console.error("Error while storing left minutes", error);
    }

}

export const getLeftMinutes = async (userId) => {
    let leftMinutes;
    try {
        const userDocRef = doc(db, 'solvedProblems', userId);
        const userDocSnapshot = await getDoc(userDocRef);
        
        if (userDocSnapshot.exists()) {
            const data = userDocSnapshot.data();
            leftMinutes = data.leftTime;
        }
    } catch (error) {
        console.error("Error while getting left minutes", error);
    }
    return leftMinutes;
}