const fs = require('fs');
const { exec } = require('child_process');

// Verifică dacă procesul este activ
function isProcessRunning(filePath) {
    return new Promise((resolve) => {
        const command = `tasklist | findstr ${filePath}`;
        exec(command, (err, stdout) => {
            resolve(!err && stdout.includes(filePath));
        });
    });
}

// Termină procesul
function terminateProcess(filePath) {
    return new Promise(async (resolve, reject) => {
        const isRunning = await isProcessRunning(filePath);
        if (!isRunning) {
            resolve(); // Procesul nu rulează
            return;
        }

        const command = `taskkill /IM ${filePath} /F`;
        exec(command, (err, stdout, stderr) => {
            if (err) {
                reject(new Error(stderr || err.message));
            } else {
                resolve();
            }
        });
    });
}

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Metoda HTTP nu este permisă' }),
        };
    }

    const { userCode, testCases } = JSON.parse(event.body);

    if (!userCode || !Array.isArray(testCases)) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Codul utilizatorului sau testele sunt invalide' }),
        };
    }

    const fileName = `user_code_${Date.now()}.cpp`;
    const outputFileName = `user_output_${Date.now()}`;

    // Scrie codul utilizatorului într-un fișier temporar
    fs.writeFileSync(fileName, userCode);

    let results = [];

    try {
        // Compilează fișierul C++ cu g++
        const compileCommand = `g++ ${fileName} -o ${outputFileName}`;
        console.log("Compile command:", compileCommand);
        await execPromise(compileCommand);

        // Verifică dacă fișierul executabil a fost creat
        if (!fs.existsSync(`${outputFileName}.exe`)) {
            throw new Error(`Fișierul executabil ${outputFileName}.exe nu a fost găsit.`);
        }

        console.log("Fișierul executabil a fost generat cu succes.");

        // Rulează fiecare test case separat
        for (const [index, testCase] of testCases.entries()) {
            // Creează fișierul de input pentru testul curent
            const inputFileName = `input_${Date.now()}_${index}.txt`;
            const inputContent = testCase.params.join(' ');
            fs.writeFileSync(inputFileName, inputContent);

            const command = `${outputFileName}.exe < ${inputFileName}`;  // Redirecționează inputul din fișier

            try {
                const runOutput = await execPromise(command, 5000); // Timeout de 5 secunde

                //   const output = runOutput.trim();
                const userResult = runOutput.trim().split(/\s+/).map(value => {
                    // Încearcă să convertești în număr, dar lasă ca string dacă nu reușește
                    const parsed = Number(value);
                    return isNaN(parsed) ? value : parsed;
                });

                const isCorrect = (() => {
                    if (Array.isArray(testCase.expected)) {
                        return JSON.stringify(userResult) === JSON.stringify(testCase.expected) ||
                               userResult.join(' ') === testCase.expected.join(' ');
                    } 
                    if (typeof testCase.expected === 'string') {
                        return userResult.join(' ') === testCase.expected;
                    } 
                    if (typeof testCase.expected === 'number') {
                        return userResult.length === 1 && userResult[0] === testCase.expected;
                    }
                    return false;
                })();

                if (!isCorrect) {
                    console.log(`Test ${index + 1} failed:`);
                    console.log(`  Expected: ${JSON.stringify(testCase.expected)}`);
                    console.log(`  Received: ${JSON.stringify(userResult)}`);
                }

                console.log('Continul testului este: ', runOutput.trim());
                results.push({
                    testCase: index + 1,
                    result: isCorrect ? 'Corect' : 'Incorect',
                    userResult: userResult.length === 1 ? userResult[0] : userResult,
                    expected: testCase.expected,
                });
            } catch (runErr) {
                console.error(Error `running test case ${index + 1}:, runErr.message`);
                results.push({
                    testCase: index + 1,
                    result:`Eroare la rulare: ${runErr.message}`,
                    userResult: null,
                    expected: testCase.expected,
                });
            } finally {
                // Șterge fișierul de input
                if (fs.existsSync(inputFileName)) {
                    fs.unlinkSync(inputFileName);
                }
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ results }),
        };
    } catch (compileErr) {
        console.error("Compilation failed:", compileErr.message);
        return {
            statusCode: 400,
            body: JSON.stringify({ error: `Eroare de compilare: ${compileErr.message}` }),
        };
    } finally {
        try {
            console.log("Verific procese active înainte de ștergere...");
            await terminateProcess(`${outputFileName}.exe`);
        } catch (err) {
            console.warn(`Nu s-a putut termina procesul: ${err.message}`);
        }

        console.log('Verific existența:', fs.existsSync(outputFileName) ? 'Există' : 'Nu există');

        // Șterge fișierele temporare
        if (fs.existsSync(fileName)) fs.unlinkSync(fileName);
        if (fs.existsSync(`${outputFileName}.exe`)) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Așteaptă înainte de ștergere
            fs.unlinkSync(`${outputFileName}.exe`);
        }
    }
};

function execPromise(command, timeout = 0) {
    return new Promise((resolve, reject) => {
        const execOptions = timeout ? { timeout } : {};
        exec(command, execOptions, (err, stdout, stderr) => {
            if (err) {
                reject(new Error(stderr || err.message));
            } else {
                resolve(stdout);
            }
        });
    });
}