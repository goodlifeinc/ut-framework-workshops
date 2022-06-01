const test = require('ut-run/test');
const opt = require('../../lib/appConfig');

test({
    type: 'integration',
    name: 'atm',
    brokerConfig: opt.brokerConfig,
    server: opt.server,
    serverConfig: opt.serverConfig.concat({
        service: 'eft',
        utAtmSimulator: {
            atmSimNetwork: {
                external: {
                    port: 5001
                }
            }
        },
        utAtm: {
            test: {
                getCustomization: require('ut-atm/test/customization')
            }
        },
        utCtpAptra: {
            test: false,
            ncr: {
                port: 5001
            }
        },
        utCtpPan: {
            test: false
        },
        utCtpPayshield: {
            test: false
        }
    }),
    imports: /\.steps$/,
    jobs: 'utAtm.test'
}, module.parent);
