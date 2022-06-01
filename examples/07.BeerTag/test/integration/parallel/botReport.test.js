const test = require('ut-run/test');
const opt = require('../../lib/bot');

test({
    type: 'integration',
    name: 'bot',
    brokerConfig: opt.brokerConfig,
    server: opt.server,
    serverConfig: opt.serverConfig.concat({
        utSkype: {
            skype: {
                server: {
                    port: 8090
                },
                openIdUrl: 'http://localhost:8190/openId'
            },
            adapter: true,
            orchestrator: true
        },
        utBotSim: {
            skype: true,
            skypeSim: {
                server: {
                    port: 8190
                },
                request: {
                    baseUrl: 'http://localhost:8090/skype/'
                }
            }
        }
    }),
    jobs: 'utBot.testReport'
}, module.parent);
