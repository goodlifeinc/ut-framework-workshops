module.exports = {
    implementation: 'bdb',
    repl: false,
    utLog: {
        streams: {
            udp: false
        }
    },
    debug: true,
    browser: true,
    utBus: {
        serviceBus: {
            logLevel: 'trace',
            socket: false
        }
    },
    utLogin: {
        browser: true
    },
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
                'report',
                'bulk',
                'mirrors',
                'agent',
                'notice',
                'aml',
                'monitoring',
                'externalAudit',
                'history',
                'content',
                'plan',
                'loan',
                'bdb'
            ]
        }
    },
    utFrontReact: {browser: true},
    utPortal: {
        browser: true,
        portal: {
            help: {
                default: '/a/help/index',
                'user.user.browse': '/a/help/user.user.browse',
                'user.role.browse': '/a/help/user.role.browse',
                'policy.policy.browse': '/a/help/policy.policy.browse'
            }
        }
    },
    utMicroservice: {browser: true},
    utCore: {browser: true},
    utAudit: {browser: true},
    utHistory: {browser: true},
    utUser: {browser: true},
    utCustomer: {browser: true},
    utDocument: {browser: true},
    utTransfer: {browser: true},
    utRule: {browser: true},
    utAgent: {browser: true},
    utLedger: {browser: true},
    utBulk: {browser: true},
    utNotice: {browser: true},
    utAml: {browser: true},
    utReport: {browser: true},
    utUssd: {browser: true},
    utCard: {browser: true},
    utAtm: {browser: true},
    utPos: {browser: true},
    utIso: {browser: true},
    utMirrors: {browser: true},
    utBdb: {
        browser: true
    },
    utContent: {
        browser: true
    },
    utPlan: {
        browser: true
    }
};
