const path = require('path');

const testName = path.relative('.', require.main.filename)
    .trim()
    .replace(/[^a-zA-Z0-9._-]+/g, '-');

module.exports = require('ut-function.merge')({}, require('./test'), {
    utLog: {
        streams: {
            stdOut: false,
            errors: {
                level: 'error',
                stream: '../logRotateStream',
                streamConfig: {
                    path: path.resolve(`.lint/log-${testName}.jsonl`)
                }
            }
        }
    }
});
