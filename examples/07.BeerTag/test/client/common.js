module.exports = {
    implementation: 'beertag',
    repl: false,
    log: false,
    debug: true,
    utBrowser: {
        browser: true,
        backend: {
            namespace: [
                'login',
                'core',
                'document',
                'customer',
                'permission',
                'user',
                'ledger',
                'policy',
                'bio',
                'identity',
                'rule',
                'transfer',
                'transferFlow',
                'wallet',
                'erp',
                'bulk',
                'mirrors',
                'agent',
                'notice',
                'aml',
                'card',
                'atm',
                'pos',
                'iso',
                'monitoring',
                'externalAudit',
                'history',
                'userTest',
                'ledgerTest',
                'customerTest',
                'auditTest'
            ]
        }
    },
    utLogin: {
        browser: true
    },
    adapter: true,
    utBus: {
        serviceBus: {
            logLevel: 'error',
            socket: false
        }
    },
    utPort: {
        concurrency: 200,
        logLevel: 'error'
    },
    run: {
        logLevel: 'error'
    }
};
