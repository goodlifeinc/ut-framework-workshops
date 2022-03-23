const dispatch = require("ut-function.dispatch");

module.exports = () =>
    function utHello() {
        return {
            orchestrator: [
                dispatch({
                    "subject.object.predicate": ({ name = "world" }, $meta) => {
                        return `Hello ${name || $meta?.auth?.name}`;
                    },
                    async "request.send"(msg, $meta) {
                        if (!$meta?.auth?.actorId) {
                            const user = await this.bus.importMethod(
                                "login.token.verify"
                            )(msg, $meta);
                            if (!user) {
                                throw new Error("Unauthorized");
                            }
                            $meta.auth = {
                                ...$meta.auth,
                                ...user,
                            };
                        }
                        return msg;
                    },
                    "response.receive"(msg, $meta) {
                        return msg;
                    },
                }),
            ],
            gateway: [
                function validation({ joi }) {
                    return {
                        "subject.object.predicate": () => ({
                            auth: false,
                            params: joi.object({
                                name: joi.string().min(2).optional(),
                            }),
                            result: joi.string(),
                        }),
                    };
                },
                require("ut-gateway")({ namespace: "apiGateway" }),
            ],
        };
    };
