const dispatch = require("ut-function.dispatch");

const users = [
    { actorId: 1, name: "john", password: "123" },
    { actorId: 2, name: "jane", password: "345" },
];

module.exports = () =>
    function utUser() {
        return {
            orchestrator: [
                dispatch({
                    "user.user.login"({ name, password }, $meta) {
                        const user = users.find(
                            (u) => u.name === name && u.password === password
                        );
                        if (!user) throw new Error("Wrong credentials");
                        return this.bus.importMethod("login.token.create")(
                            { name, actorId: user.actorId },
                            $meta
                        );
                    },
                }),
            ],
            gateway: [
                function validation({ joi }) {
                    return {
                        'user.user.login': () => ({
                            auth: false,
                            params: joi.object({
                                name: joi.string().min(2).required(),
                                password: joi.string().min(2).required()
                            }),
                            result: joi.string()
                        })
                    };
                },
            ],
        };
    };
