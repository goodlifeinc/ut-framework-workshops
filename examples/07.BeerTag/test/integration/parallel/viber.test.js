const test = require('ut-run/test');
const opt = require('../../lib/bot');

test({
    type: 'integration',
    name: 'bot',
    brokerConfig: opt.brokerConfig,
    server: opt.server,
    serverConfig: opt.serverConfig.concat({
        utDialogflow: {
            adapter: true,
            orchestrator: true
        },
        utViber: {
            adapter: true,
            orchestrator: true
        },
        utBotSim: {
            viber: true
        }
    }),
    jobs: 'utBot.testViber'
}, module.parent);
