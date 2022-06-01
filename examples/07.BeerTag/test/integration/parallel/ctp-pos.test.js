const test = require('ut-run/test');
const opt = require('../../lib/appConfig');

test({
    type: 'integration',
    name: 'pos',
    brokerConfig: opt.brokerConfig,
    server: opt.server,
    serverConfig: [
        ...opt.serverConfig,
        {
            utCtpPan: true,
            utCtpPayshield: true,
            utCtpPos: true,
            utIsoAcquirerSimulator: {
                isoSimAcquirer: {
                    port: 16000,
                    // initialize: true,
                    deviceInfo: {
                        41: '123321',
                        62: {
                            deviceSerial: '12345678',
                            deviceCpuSerial: 'b26703220c0804d0fc071ec0b0000000',
                            posVersion: '01.02.03',
                            ksn: 'FFFF00000000000',
                            pinKsn: 'FFFF00000000000'
                        }
                    }
                },
                isoSimIssuer: false
            }
        }
    ],
    imports: /\.steps$/,
    jobs: 'utCtpPos.test'
}, module.parent);
