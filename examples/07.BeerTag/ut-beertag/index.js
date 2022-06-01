module.exports = require('ut-run').microservice(
    module,
    require,
    () => function utBeertag() {
        return {
            config: require('./config'),
            adapter: () => [
                require('./api/sql/schema'),
                require('./api/sql/seed'),
                require('./api/sql/standard'),
                require('./errors')
            ],
            orchestrator: () => [
                require('./errors'),
                require('./api/beertag'),
                require('ut-dispatch-db')(['beertag', 'example'], ['utBeertag.foo'], ['utBeertag.validation'])
            ],
            gateway: () => [
                require('./errors'),
                require('./validations'),
                require('./openApi')
            ],
            test: () => [
                ...require('./test/steps'),
                ...require('./test/jobs')
            ]
        };
    }
);
