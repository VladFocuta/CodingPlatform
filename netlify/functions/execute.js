const axios = require('axios');

const JDoodleClientID = '9ce995c32cba039871309c68822c96cd';  
const JDoodleClientSecret = 'be858d14a67460efcad582aee73067b62ef586ba1ed9495e4aba068fc86f1838';

async function executeCodeJDoodle(script, language, versionIndex, input) {
    const url = 'https://api.jdoodle.com/v1/execute';
    const payload = {
        clientId: JDoodleClientID,
        clientSecret: JDoodleClientSecret,
        script,
        language,
        versionIndex,
        stdin: input
    };

    try {
        const response = await axios.post(url, payload);
        return response.data;
    } catch (error) {
        console.error('Error executing code on JDoodle:', error.message);
        throw new Error('Eroare la apelul API JDoodle');
    }
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

    const language = 'cpp'; // Limba codului trimis (C++)
    const versionIndex = '5'; // Versiunea limbajului C++ suportată de JDoodle
    const results = [];

    for (const testCase of testCases) {
        try {
            // Apelează JDoodle pentru fiecare caz de test
            const result = await executeCodeJDoodle(userCode, language, versionIndex, testCase.params.join(' '));

            const isCorrect = (() => {
                const output = result.output.trim();
                if (Array.isArray(testCase.expected)) {
                    return output === testCase.expected.join(' ');
                } else if (typeof testCase.expected === 'string') {
                    return output === testCase.expected.trim();
                } else if (typeof testCase.expected === 'number') {
                    return parseFloat(output) === testCase.expected;
                }
                return false;
            })();

            results.push({
                testCase: testCase.params,
                output: result.output.trim(),
                expected: testCase.expected,
                passed: isCorrect
            });
        } catch (error) {
            results.push({
                testCase: testCase.params,
                error: error.message,
                passed: false
            });
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ results }),
    };
};
