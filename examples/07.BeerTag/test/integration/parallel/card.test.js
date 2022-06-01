const test = require('ut-run/test');
const opt = require('../../lib/appConfig');

test({
    type: 'integration',
    name: 'card',
    brokerConfig: opt.brokerConfig,
    server: opt.server,
    serverConfig: opt.serverConfig.concat({
        utCtpPan: {
            adapter: true,
            orchestrator: true,
            gateway: true,
            test: false
        },
        utCtpPayshield: {
            adapter: true,
            orchestrator: true,
            test: false
        }
    }),
    client: opt.client,
    clientConfig: opt.clientConfig,
    imports: /\.steps$/,
    jobs: 'utCard.test'
}, module.parent);
