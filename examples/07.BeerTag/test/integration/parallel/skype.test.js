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
        utSkype: {
            adapter: true,
            orchestrator: true
        },
        utBotSim: {
            skype: true
        }
    }),
    jobs: 'utBot.testSkype'
}, module.parent);
