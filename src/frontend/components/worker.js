// Înlocuiește globalThis cu self
/* eslint-disable no-restricted-globals */

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
}


self.onmessage = async (e) => {
    const { code, testCases, maxExecutionTime } = e.data;

    try {

        // eslint-disable-next-line
        const userFunction = new Function(`
            ${code}
            return ${code.match(/function\s+(\w+)/)[1]};
        `)();

        const results = [];
        for (let i = 0; i < testCases.length; i++) {
            const { params, expected } = testCases[i];
            const startTime = Date.now();

            try {
                // Creăm o promisiune care va verifica timpul de execuție
                const userResult = await new Promise((resolve, reject) => {
                    const timeoutId = setTimeout(() => {
                        reject(new Error("Depășire timp maxim de execuție")); // Respingem promisiunea
                    }, maxExecutionTime);

                    try {
                        const result = userFunction(...params); // Executăm funcția utilizatorului
                        clearTimeout(timeoutId); // Clear timeout if function execution is completed
                        resolve(result); // Rezolvăm promisiunea cu rezultatul
                    } catch (e) {
                        clearTimeout(timeoutId); // Clear timeout if an error occurs
                        reject(new Error(`${e.message}`)); // Respingem promisiunea cu mesaj de eroare
                    }
                });

                const executionTime = Date.now() - startTime;
                // Verificăm timpul de execuție
                if (executionTime > maxExecutionTime) throw new Error("Depășire timp maxim de execuție");

                const isCorrect = Array.isArray(userResult) && Array.isArray(expected)
                ? arraysEqual(userResult, expected)
                : userResult === expected;

                results.push({
                    testCase: i + 1,
                    result: isCorrect ? 'Corect' : 'Incorect',
                    userResult,
                    expected,
                });
            } catch (error) {
                results.push({
                    testCase: i + 1,
                    result: `Eroare: ${error.message}`,
                    userResult: null,
                    expected,
                });
            }
        }

        // Trimitem rezultatele înapoi
        self.postMessage({ results });
    } catch (error) {
        self.postMessage({ error: `Eroare în codul utilizatorului: ${error.message}` });
    }
};
