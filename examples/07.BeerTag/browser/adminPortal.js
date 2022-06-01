require('ut-run').run({
    main: (...params) => [
        require('ut-login')(...params),
        require('ut-browser')(...params),
        require('ut-core/portal').default(...params),
        require('ut-audit/portal').default(...params),
        require('ut-history/portal').default(...params),
        require('ut-user/portal').default(...params),
        require('ut-customer/portal').default(...params),
        require('ut-document/portal').default(...params),
        require('ut-transfer/portal').default(...params),
        require('ut-rule/portal').default(...params),
        // require('ut-agent/portal').default(...params),
        require('ut-ledger/portal').default(...params),
        require('ut-bulk-payment/portal').default(...params),
        require('ut-ussd/portal').default(...params),
        require('ut-aml/portal').default(...params),
        require('ut-report/portal').default(...params),
        require('ut-mirrors/portal').default(...params),
        // require('ut-microservice/portal').default(...params),
        require('ut-portal')(...params),
        require('ut-portal-admin')(...params)
    ],
    config: [
        require('./common'),
        {
            configFilenames: [
                'common'
            ],
            adminBrowser: true,
            service: 'admin',
            utCustomer: {
                ui: {
                    service: 'admin'
                }
            }
        },
        require('./theme/vela-blue').default,
        // eslint-disable-next-line no-process-env
        (process.env.NODE_ENV === 'production') ? require('./prod') : require('./dev')
    ],
    method: 'debug'
});
