require('ut-run').run({
    main: (...params) => [
        require('ut-login')(...params),
        require('ut-browser')(...params),
        require('ut-core/portal').default(...params),
        require('ut-transfer/portal').default(...params),
        require('ut-rule/portal').default(...params),
        require('ut-atm/portal').default(...params),
        require('ut-card/portal').default(...params),
        require('ut-report/portal').default(...params),
        require('ut-iso/portal').default(...params),
        require('ut-pos/portal').default(...params),
        require('ut-portal')(...params),
        require('ut-portal-cms')(...params)
    ],
    config: [
        require('./common'),
        {
            configFilenames: [
                'common'
            ],
            cmsBrowser: true,
            service: 'cms'
        },
        // eslint-disable-next-line no-process-env
        (process.env.NODE_ENV === 'production') ? require('./prod') : require('./dev')
    ],
    method: 'debug'
});
