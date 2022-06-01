const paths = service => [`/a/${service}/{path*}`, `/api/${service}/{path*}`, `/rpc/${service}/{path*}`];

module.exports = {
    implementation: 'beertag',
    defaultLanguage: 'en',
    repl: false,
    utPort: {
        concurrency: 200
    },
    utBus: {
        serviceBus: {
            logLevel: 'debug'
        }
    },
    run: {
        logLevel: 'debug',
        edit: {
            server: {
                host: 'localhost'
            }
        },
        layers: {
            console: 'console',
            adapter: 'core,user,customer,document,transfer,eft,wallet,rule,ledger,notice,bot,externalaudit,cms,misc,chat',
            adminPortal: 'portal',
            eftGateway: '',
            servicePortal: '',
            solutionPortal: '',
            cmsPortal: '',
            'utBrowser.gateway': 'portal',
            'utLogin.adapter': 'login',
            'utLogin.orchestrator': 'login',
            'utLogin.gateway': 'portal,login',
            'utCore.adapter': 'core',
            'utCore.orchestrator': 'core',
            'utCore.gateway': 'portal,core',
            'utAudit.adapter': 'externalaudit',
            'utAudit.orchestrator': 'externalaudit',
            'utAudit.gateway': 'portal,externalaudit',
            'utHistory.adapter': 'history',
            'utHistory.orchestrator': 'history',
            'utHistory.gateway': 'portal,history',
            'utUser.adapter': 'user',
            'utUser.orchestrator': 'user',
            'utUser.gateway': 'portal,user',
            'utCustomer.adapter': 'customer',
            'utCustomer.orchestrator': 'customer',
            'utCustomer.gateway': 'portal,customer',
            'utDocument.adapter': 'document',
            'utDocument.orchestrator': 'document',
            'utDocument.gateway': 'portal,document',
            'utTransfer.adapter': 'transfer,eft',
            'utTransfer.orchestrator': 'transfer',
            'utTransfer.gateway': 'portal,transfer',
            'utRule.adapter': 'rule,eft,wallet',
            'utRule.orchestrator': 'rule',
            'utRule.gateway': 'portal,rule',
            'utReport.adapter': 'report',
            'utReport.orchestrator': 'report',
            'utReport.gateway': 'portal,report',
            'utLedger.adapter': 'ledger',
            'utLedger.orchestrator': 'ledger',
            'utLedger.gateway': 'portal,ledger',
            'utNotice.adapter': 'notice',
            'utNotice.orchestrator': 'notice',
            'utNotice.gateway': 'portal,notice',
            'utEmail.adapter': 'email',
            'utEmail.gateway': 'poral,email',
            // misc
            'utBulk.adapter': 'misc',
            'utBulk.gateway': 'portal,misc',
            'utBulk.orchestrator': 'misc',
            'utAml.adapter': 'misc',
            'utAml.gateway': 'portal,misc',
            'utAml.orchestrator': 'misc',
            'utAgent.adapter': 'misc',
            'utAgent.gateway': 'portal,misc',
            'utAgent.orchestrator': 'misc',
            // bot
            'utBot.adapter': 'bot',
            'utBot.gateway': 'portal,bot',
            'utBot.orchestrator': 'bot',
            'utFulfill.gateway': 'portal,bot',
            'utFulfill.orchestrator': 'bot',
            'utFulfill.demo': 'bot',
            'utSpeech.adapter': 'chat',
            'utSpeech.gateway': 'portal,chat',
            'utSpeech.orchestrator': 'chat',
            'utDialogflow.adapter': 'chat',
            'utDialogflow.gateway': 'portal,chat',
            'utDialogflow.orchestrator': 'chat',
            'utMessenger.adapter': 'chat',
            'utMessenger.gateway': 'portal,chat',
            'utMessenger.orchestrator': 'chat',
            'utSkype.adapter': 'chat',
            'utSkype.gateway': 'portal,chat',
            'utSkype.orchestrator': 'chat',
            'utSlack.adapter': 'chat',
            'utSlack.gateway': 'portal,chat',
            'utSlack.orchestrator': 'chat',
            'utViber.adapter': 'chat',
            'utViber.gateway': 'portal,chat',
            'utViber.orchestrator': 'chat',
            // cms
            'utAtm.adapter': 'cms,eft',
            'utAtm.gateway': 'portal,cms',
            'utAtm.orchestrator': 'cms',
            'utCard.adapter': 'cms,eft',
            'utCard.gateway': 'portal,cms',
            'utCard.orchestrator': 'cms',
            'utPos.adapter': 'cms,eft',
            'utPos.gateway': 'portal,cms',
            'utPos.orchestrator': 'cms',
            'utIso.adapter': 'cms,eft',
            'utIso.gateway': 'portal,cms',
            'utIso.orchestrator': 'cms',
            // eft
            'utAtm.eft': 'eft',
            'utAtm.eftGateway': 'eft',
            'utPos.eft': 'eft',
            'utPos.eftGateway': 'eft',
            'utIso.eft': 'eft',
            'utIso.eftGateway': 'eft',
            'utTransfer.eft': 'eft',
            'utTransfer.eftGateway': 'eft',
            // wallet
            'utWallet.adapter': 'wallet',
            'utWallet.orchestrator': 'wallet',
            'utWallet.gateway': 'portal,wallet',
            'utWallet.override': 'customer',
            'utWallet.integration': 'wallet',
            'utWallet.dev': 'wallet',
            // ctp
            'utCtpPayshield.adapter': 'ctp',
            'utCtpPayshield.orchestrator': 'ctp',
            'utCtpPan.adapter': 'ctp',
            'utCtpPan.orchestrator': 'ctp',
            'utCtpPan.gateway': 'portal,ctp',
            'utCtpAptra.adapter': 'ctp',
            'utCtpAptra.orchestrator': 'ctp',
            'utCtpAptra.gateway': 'portal,ctp',
            'utCtpIso.adapter': 'ctp',
            'utCtpIso.orchestrator': 'ctp',
            'utCtpIso.gateway': 'portal,ctp',
            'utCtpPos.adapter': 'ctp',
            'utCtpPos.gateway': 'portal,ctp'
        }
    },
    utLog: {
        transformData: {
            Authorization: 'hide',
            auth: 'hide',
            verifyToken: 'hide',
            uri: 'hide',
            access_token: 'hide',
            accessToken: 'hide',
            secret: 'hide',
            clientSecret: 'hide',
            private_key: 'hide',
            hash: 'hide',
            rawData: 'hide',
            customerEmail: 'hide',
            text: 'hide',
            username: 'hide',
            html: 'hide',
            host: 'hide',
            subject: 'hide',
            profile: 'hide',
            to: 'hide'
        }
    },
    utTransfer: {
        sql: {
            utc: true
        }
    },
    utRule: {
        sql: {
            utc: true
        }
    },
    utWallet: true,
    utCustomer: true,
    utAgent: true,
    utReport: true,
    // reportHTTP: require('../impl/browser/ui/admin/config/report/helpers').helpers
    utLedger: true,
    utLogin: true,
    utCore: true,
    utUser: true,
    utDocument: true,
    utNotice: true,
    utBulk: true,
    utUssd: true,
    utBot: true,
    utBeertag: true,
    utAtm: true,
    utCard: true,
    utIso: true,
    utPos: true,
    utCache: {
        adapter: true
    },
    utAml: false,
    utAudit: true,
    utHistory: true,
    eftApi: {
        server: {
            port: 8005
        },
        discover: true,
        api: [
            {path: '/oauth2-redirect.html', service: 'browser'},
            {path: '/api', service: 'browser'},
            {path: '/api/{path*}', service: 'browser'}
        ].concat(...[
            'browser',
            'login',
            'transferFlow'
        ].map(paths))
    },
    cmsApi: {
        server: {
            port: 8004
        },
        discover: true,
        api: [
            {path: '/oauth2-redirect.html', service: 'browser'},
            {path: '/api', service: 'browser'},
            {path: '/api/{path*}', service: 'browser'},
            '/rpc/customer/organization/graphFetch',
            '/rpc/customer/organization/list',
            '/rpc/core/translation/fetch',
            '/rpc/core/itemName/fetch'
        ].concat(...[
            'browser',
            'login',
            'atm',
            'pos',
            'iso',
            'card',
            'rule',
            'transfer'
        ].map(paths))
    },
    adminApi: {
        server: {
            port: 8004
        },
        discover: true,
        api: [
            {path: '/oauth2-redirect.html', service: 'browser'},
            {path: '/api', service: 'browser'},
            {path: '/a/help/{path*}', service: 'browser'},
            {path: '/aa/document/{path*}', service: 'document'},
            {path: '/api/{path*}', service: 'browser'}
        ].concat(...[
            'browser',
            'login',
            'core',
            'document',
            'customer',
            'externalAudit',
            'history',
            'user',
            'policy',
            'identity',
            'permission',
            'agent',
            'aml',
            'notice',
            'bulk',
            'transfer',
            'ledger',
            'rule',
            'speech',
            'report'
        ].map(paths))
    },
    serviceApi: {
        server: {
            port: 8004
        },
        discover: true,
        api: [
            {path: '/a/help/{path*}', service: 'browser'},
            {path: '/oauth2-redirect.html', service: 'browser'}
        ].concat(...[
            'browser',
            'login',
            'core',
            'document',
            'customer',
            'transfer',
            'bulk'
        ].map(paths))
    },
    solutionApi: {
        server: {
            port: 8004
        },
        discover: true,
        api: [
            {path: '/a/help/{path*}', service: 'browser'},
            {path: '/oauth2-redirect.html', service: 'browser'},
            {path: '/aa/document/{path*}', service: 'document'}
        ].concat(...[
            'browser',
            'login',
            'core',
            'document',
            'customer',
            'ledger',
            'transfer',
            'bulk'
        ].map(paths))
    },
    panApi: {
        server: {
            port: 8009
        },
        discover: true,
        api: [
            {path: '/a/help/{path*}', service: 'browser'},
            {path: '/oauth2-redirect.html', service: 'browser'},
            '/a/pan/panFrame',
            '/rpc/pan/cardId/get'
        ]
    },
    utMirrors: true,
    firebase: {
        apiKey: '----'
    },
    cron: {
        jobsList: {
            test: {
                opcode: 'test',
                pattern: '00 */1 * * * *'
            }
        }
    },
    push: {
        firebase: {
            apiKey: '-----',
            baseUrl: 'https://fcm.googleapis.com',
            endpoints: {
                send: '/fcm/send'
            }
        }
    },
    email: {
        from: 'impl-application@softwaregroup.com',
        url: 'smtp://smtp.gmail.com',
        service: 'gmail'
    },
    bulk: {
        batchFileMaxBytes: 26214400
    }
};
