const utBrowser = require('ut-webpack/preset');
module.exports = {
    options: {
        mains: {
            admin: 'admin',
            service: 'service',
            solution: 'solution',
            adminPortal: 'adminPortal',
            cmsPortal: 'cmsPortal'
        }
    },
    use: [utBrowser({
        csp: {
            nonceEnabled: {
                'style-src': false
            },
            policy: {
                'script-src': ["'unsafe-eval'"],
                'style-src': ["'unsafe-inline'", "'self'"]
            }
        },
        _proxy: {
            context: ['!/a/browser/**'],
            target: 'https://admin.application.k8s.softwaregroup.com',
            changeOrigin: true
        },
        split: [
            'ut-core',
            'ut-audit',
            'ut-history',
            'ut-user',
            'ut-customer',
            'ut-document',
            'ut-transfer',
            'ut-rule',
            'ut-agent',
            'ut-ledger',
            'ut-bulk-payment',
            'ut-aml',
            'ut-atm',
            'ut-card',
            'ut-pos',
            'ut-iso',
            'ut-report',
            'ut-mirrors'
        ]
    })]
};
