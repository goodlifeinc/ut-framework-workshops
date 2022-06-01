const test = require('ut-run/test');
const opt = require('../../lib/appConfig');

test({
    type: 'integration',
    name: 'transfer',
    brokerConfig: opt.brokerConfig,
    server: opt.server,
    serverConfig: opt.serverConfig,
    client: opt.client,
    clientConfig: opt.clientConfig,
    imports: /\.steps$/,
    exclude: ['utTransfer.test.reverseCard', 'utTransfer.test.getTransferDetails'], // requires ut-atm
    jobs: 'utTransfer.test'
}, module.parent);
