const test = require('ut-run/test');
const opt = require('../../lib/appConfig');

test({
    type: 'integration',
    name: 'pan',
    brokerConfig: opt.brokerConfig,
    server: opt.server,
    serverConfig: [
        ...opt.serverConfig,
        {
            utCtpPan: true,
            utCtpPayshield: true
        }
    ],
    imports: /\.steps$/,
    jobs: 'utCtpPan.test'
}, module.parent);
