/* eslint no-process-env: 0 */
module.exports = {
    broker: require('../broker'),
    brokerConfig: [
        require('../broker/test')
    ],
    server: require('../../server'),
    serverConfig: [
        require('../../server/common'),
        require('../../server/' + (process.env.UT_ENV || 'test')),
        require('../../server/db'),
        {
            utUser: {test: true},
            configFilenames: ['common', (process.env.UT_ENV || 'test'), 'db']
        }
    ],
    client: require('../client'),
    clientConfig: [
        require('../client/common'),
        require('../client/' + (process.env.UT_ENV || 'test')),
        {
            configFilenames: ['common', (process.env.UT_ENV || 'test'), 'db']
        }
    ]
};
