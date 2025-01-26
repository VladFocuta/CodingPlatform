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

exports.handler = async (event) => {
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

    const language = 'cpp';
    const versionIndex = '5';

    try {
        const results = await Promise.all(
            testCases.map(async (testCase) => {
                try {
                    const result = await executeCodeJDoodle(userCode, language, versionIndex, testCase.params.join(' '));
                    const normalize = (str) => str.trim().replace(/\s+/g, ' ').replace(/\n/g, ' ').trim();

                    const isCorrect = (() => {
                        const outputNormalized = normalize(result.output);
                        if (Array.isArray(testCase.expected)) {
                            return outputNormalized === normalize(testCase.expected.join(' '));
                        } else if (typeof testCase.expected === 'string') {
                            return outputNormalized === normalize(testCase.expected);
                        } else if (typeof testCase.expected === 'number') {
                            return parseFloat(outputNormalized) === testCase.expected;
                        }
                        return false;
                    })();

                    return {
                        testCase: testCase.params,
                        output: result.output.trim(),
                        expected: testCase.expected,
                        passed: isCorrect,
                    };
                } catch (error) {
                    return {
                        testCase: testCase.params,
                        error: error.message,
                        passed: false,
                    };
                }
            })
        );

        return {
            statusCode: 200,
            body: JSON.stringify({ results }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Eroare internă a serverului' }),
        };
    }
};
