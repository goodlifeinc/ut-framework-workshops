const test = require('ut-run/test');
const opt = require('../../lib/appConfig');

test({
    type: 'integration',
    name: 'iso',
    brokerConfig: opt.brokerConfig,
    server: opt.server,
    serverConfig: opt.serverConfig.concat({
        service: 'eft',
        utIso: true,
        utCtpPan: {
            test: false
        },
        utCtpPayshield: {
            test: false
        },
        utCtpIso: {
            test: false,
            tcpIso: {
                port: 18000,
                echo: {
                    request: {
                        32: '0000000058',
                        70: 301
                    }
                }
            },
            tcpIsoAcquirer: {
                port: 18001,
                echo: {
                    request: {
                        32: '0000000058',
                        70: 301
                    }
                }
            }
        },
        utIsoAcquirerSimulator: {
            isoSimIssuer: {
                port: 18000
            },
            isoSimAcquirer: {
                port: 18001
            }
        }
    }),
    imports: /\.steps$/,
    jobs: 'utIso.test'
}, module.parent);
