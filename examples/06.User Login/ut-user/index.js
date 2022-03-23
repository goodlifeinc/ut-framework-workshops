const dispatch = require("ut-function.dispatch");

module.exports = () => function utUser() {
    return {
        orchestrator: [
            dispatch({
                "user.user.login": ({ name }) => {
                    return `Hello ${name || "world"}`;
                },
            }),
        ],
        gateway: [
            function validation({joi}) {
                return {
                    // 'subject.object.predicate': () => ({
                    //     auth: false,
                    //     params: joi.object({
                    //         name: joi.string().min(2).optional()
                    //     }),
                    //     result: joi.string()
                    // })
                };
            },
        ]
    };
};
