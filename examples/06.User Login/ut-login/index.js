const dispatch = require("ut-function.dispatch");

module.exports = () =>
    function utLogin({ config }) {
        return {
            orchestrator: [
                dispatch({
                    "login.token.create": ({ name }) => {
                        return config.jwtToken;
                    },
                    "login.token.verify": ({ token }) => {
                        return token === config.jwtToken;
                    },
                }),
            ],
            gateway: [
                function validation({ joi }) {
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
            ],
        };
    };
