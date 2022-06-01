const test = require('ut-run/test');
const opt = require('../../lib/appConfig');

test({
    type: 'integration',
    name: 'payshield',
    brokerConfig: opt.brokerConfig,
    server: opt.server,
    serverConfig: [
        ...opt.serverConfig,
        {
            utCtpPayshield: true
        }
    ],
    imports: /\.steps$/,
    jobs: 'utCtpPayshield.test'
}, module.parent);
