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
        {
            service: 'bot',
            adapter: true,
            utFulfill: {
                gateway: true,
                demo: true,
                orchestrator: true
            },
            utCore: {
                orchestrator: true,
                adapter: true
            },
            utUser: {
                orchestrator: true,
                adapter: true
            },
            utNotice: {
                orchestrator: true,
                adapter: true
            },
            utEmail: {
                adapter: true,
                email: {
                    drainSend: false
                }
            },
            utBot: {
                test: true,
                orchestrator: true,
                adapter: true
            },
            utBotSim: {
                orchestrator: true
            }
        }, {
            configFilenames: [
                'common',
                (process.env.UT_ENV || 'test'),
                'bot'
            ]
        }
    ]
};
