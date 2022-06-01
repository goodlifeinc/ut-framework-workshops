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
        utMessenger: {
            adapter: true,
            orchestrator: true
        },
        utBotSim: {
            messenger: true
        }
    }),
    jobs: 'utBot.testMessenger'
}, module.parent);
