const dispatch = require('ut-function.dispatch');
const fetch = require('node-fetch');

const users = [
    { actorId: 1, name: 'john', password: '123' },
    { actorId: 2, name: 'jane', password: '345' }
];

module.exports = () =>
    function utUser({
        config: {
            firebase: {
                key
            }
        }
    }) {
        return {
            orchestrator: [
                dispatch({
                    'user.user.login'({ name, password }, $meta) {
                        const user = users.find(
                            (u) => u.name === name && u.password === password
                        );
                        if (!user) throw new Error('Wrong credentials');
                        return this.bus.importMethod('login.token.create')(
                            { name, actorId: user.actorId },
                            $meta
                        );
                    },
                    async 'user.firebase.login'({ username, password}, $meta) {
                        const body = {email: username, password};

                        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
                            method: 'post',
                            body: JSON.stringify(body),
                            headers: {'Content-Type': 'application/json'}
                        });
                        const data = await response.json();

                        return data;
                    }
                })
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
                        }),
                        'user.firebase.login': () => ({
                            auth: false,
                            params: joi.object({
                                username: joi.string().min(2).required(),
                                password: joi.string().min(2).required()
                            }),
                            result: joi.string()
                        })
                    };
                }
            ]
        };
    };
