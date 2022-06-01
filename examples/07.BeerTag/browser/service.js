require('ut-run').run({
    main: require('./'),
    config: [
        require('./common'),
        {
            serviceBrowser: true,
            service: 'service'
        },
        // eslint-disable-next-line no-process-env
        (process.env.NODE_ENV === 'production') ? require('./prod') : require('./dev')
    ],
    method: 'debug'
});
