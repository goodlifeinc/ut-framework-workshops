module.exports = {
    utPort: {
        logLevel: 'info'
    },
    utBus: {
        serviceBus: {
            jsonrpc: true
        }
    },
    sqlStandard: true,
    utLedger: {
        sql: {
            integration: true
        }
    },
    utAgent: {
        sqlStandard: true
    },
    utDocument: {
        document: {
            repository: '/var/lib/SoftwareGroup/ut-document'
        }
    },
    utSkype: {
        webchat: true
    },
    utAtm: {
        atmFlow: {
            getCustomization: require('ut-atm/test/customization')
        }
    },
    utCtpIso: {
        tcpIso: {
            port: 14000,
            listen: true
        }
    }
};
