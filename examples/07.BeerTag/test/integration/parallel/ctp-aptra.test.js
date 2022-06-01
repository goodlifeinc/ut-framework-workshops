const test = require('ut-run/test');
const opt = require('../../lib/appConfig');

test({
    type: 'integration',
    name: 'aptra',
    brokerConfig: opt.brokerConfig,
    server: opt.server,
    serverConfig: [
        ...opt.serverConfig,
        {
            utCtpPan: true,
            utCtpAptra: true,
            utCtpPayshield: true
        }
    ],
    imports: /\.steps$/,
    jobs: 'utCtpAptra.test'
}, module.parent);
