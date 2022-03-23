const dispatch = require("ut-function.dispatch");

module.exports = () => function utHello() {
    return {
        orchestrator: [
            dispatch({
                "subject.object.predicate": ({ name }) => {
                    return `Hello ${name || "world"}`;
                },
            }),
        ],
        gateway: [
            function validation({joi}) {
                return {
                    'subject.object.predicate': () => ({
                        auth: false,
                        params: joi.object({
                            name: joi.string().min(2).optional()
                        }),
                        result: joi.string()
                    })
                };
            },
            require('ut-gateway')({namespace: 'apiGateway'})
        ]
    };
};
