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
        }
    }),
    jobs: 'utBot.testDialogflow'
}, module.parent);
