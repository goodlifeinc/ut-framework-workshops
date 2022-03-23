const dispatch = require("ut-function.dispatch");

module.exports = () =>
    function utLogin({ config }) {
        return {
            orchestrator: [
                dispatch({
                    "login.token.create": ({ name, actorId }) => {
                        return [config.jwtToken, name, actorId].join(":");
                    },
                    "login.token.verify": (_, $meta) => {
                        const { authorization = null } =
                            $meta?.httpRequest?.headers;
                        if (!authorization) {
                            throw new Error("Missing Authorization header");
                        }
                        const [token, name, actorId] = authorization
                            .split("Bearer ")[1]
                            .split(":");
                        const valid = token === config.jwtToken;
                        if (!valid) throw new Error("Unauthorized");
                        return { name, actorId };
                    },
                }),
            ]
        };
    };
