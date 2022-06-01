const path = require('path');

module.exports = function sql({
    config
}) {
    return {
        namespace: 'db/beertag',
        schema: [{
            path: path.join(__dirname, 'schema'),
            linkSP: true,
            config
        }]
    };
};
