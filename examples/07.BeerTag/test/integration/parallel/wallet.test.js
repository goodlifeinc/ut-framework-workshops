const test = require('ut-run/test');
const opt = require('../../lib/appConfig');

test({
    type: 'integration',
    name: 'wallet',
    brokerConfig: opt.brokerConfig,
    server: opt.server,
    serverConfig: opt.serverConfig,
    client: opt.client,
    clientConfig: opt.clientConfig,
    imports: /\.steps$/,
    jobs: 'utWallet.test'
}, module.parent);
