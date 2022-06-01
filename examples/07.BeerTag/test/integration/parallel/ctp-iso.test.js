const test = require('ut-run/test');
const opt = require('../../lib/appConfig');

test({
    type: 'integration',
    name: 'iso',
    brokerConfig: opt.brokerConfig,
    server: opt.server,
    serverConfig: [
        ...opt.serverConfig,
        {
            utCtpPan: true,
            utCtpPayshield: true,
            utCtpIso: true,
            utIsoAcquirerSimulator: true
        }
    ],
    imports: /\.steps$/,
    jobs: 'utCtpIso.test'
}, module.parent);
