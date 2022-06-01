require('ut-run').run({
    main: require('./'),
    config: [
        require('./common'),
        {
            adminBrowser: true,
            service: 'admin',
            utCustomer: {
                ui: {
                    service: 'admin'
                }
            }
        },
        // eslint-disable-next-line no-process-env
        (process.env.NODE_ENV === 'production') ? require('./prod') : require('./dev')
    ],
    method: 'debug'
});
