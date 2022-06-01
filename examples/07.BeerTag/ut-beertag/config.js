const test = {
    sqlStandard: true
};

const key = ({id}) => ({
    id: String(id),
    segment: 'beertag.session'
});

module.exports = () => ({
    // environments
    common: {
        foo: {
            import: {
                'db/beertag.session.set': {
                    cache: {
                        instead: 'set',
                        ttl: 60000,
                        key
                    }
                },
                'db/beertag.session.get': {
                    cache: {
                        instead: 'get',
                        key
                    }
                },
                'db/beertag.session.delete': {
                    cache: {
                        instead: 'drop',
                        key
                    }
                }
            }
        }
    },
    dev: {
        sqlStandard: true
    },
    test,
    jenkins: test,
    uat: {
        sqlStandard: true
    },
    // methods
    kustomize: {
        adapter: true,
        orchestrator: true,
        gateway: true
    },
    types: {
        adapter: true,
        gateway: true
    },
    doc: {
        gateway: true
    },
    // test types
    unit: {
        adapter: true,
        orchestrator: true,
        gateway: true,
        test: true
    },
    integration: {
        adapter: true,
        orchestrator: true,
        gateway: true,
        test: true
    },
    // overlays
    db: {
        adapter: true
    },
    beertag: {
        adapter: true,
        orchestrator: true,
        gateway: true
    },
    validation: ({joi}) => joi.object({
        adapter: joi.boolean(),
        orchestrator: joi.boolean(),
        gateway: joi.boolean(),
        test: joi.boolean(),
        foo: joi.object(),
        sql: joi.object({
            exclude: joi.any()
        }),
        sqlStandard: [
            joi.boolean(),
            joi.object({
                exclude: joi.any()
            })
        ],
        beertagDispatch: [
            joi.boolean(),
            joi.object()
        ]
    })
});
