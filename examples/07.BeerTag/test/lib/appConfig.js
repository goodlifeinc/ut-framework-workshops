/* eslint no-process-env: 0 */
const params = {
    broker: require('../broker'),
    brokerConfig: [
        require('../broker/test')
    ],
    server: require('../../server'),
    serverConfig: [
        require('../../server/common'),
        require('../../server/' + (process.env.UT_ENV || 'test')),
        {
            adapter: true,
            orchestrator: true
        }, {
            configFilenames: [
                'common',
                (process.env.UT_ENV || 'test'),
                'integration'
            ]
        }
    ],
    client: require('../client'),
    clientConfig: [
        require('../client/common'),
        require('../client/' + (process.env.UT_ENV || 'test')),
        {
            configFilenames: ['common', (process.env.UT_ENV || 'test'), 'integration']
        }
    ],
    services: {}
};

module.exports = params;
