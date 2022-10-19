const dispatch = require('ut-function.dispatch');

module.exports = () =>
    function utUser() {
        return {
            orchestrator: [
                dispatch({
                    'user.user.login'({ username, password }, $meta) {
                        return this.bus.importMethod('login.firebase.auth')(
                            { username, password },
                            $meta
                        );
                    }
                })
            ],
            gateway: [
                function validation({ joi }) {
                    return {
                        'user.user.login': () => ({
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
