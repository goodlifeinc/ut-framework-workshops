require('ut-run').run({
    main: (...params) => [
        require('../ut-user/browser')(...params)
    ],
    config: [
        require('./common'),
        {
            configFilenames: [
                'common'
            ],
            service: 'admin'
        },
        // eslint-disable-next-line no-process-env
        (process.env.NODE_ENV === 'production') ? require('./prod') : require('./dev')
    ],
    method: 'debug'
});
