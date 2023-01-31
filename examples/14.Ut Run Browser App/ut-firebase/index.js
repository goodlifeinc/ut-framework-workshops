const dispatch = require('ut-function.dispatch');

module.exports = () =>
    function utFirebase() {
        return {
            orchestrator: [
                dispatch({
                    async 'firebase.user.login'(msg, $meta) {
                        return this.bus.importMethod('firebaseClient.user.login')(msg, $meta);
                    },
                    async 'firebase.jwks.get'(msg, $meta) {
                        return this.bus.importMethod('firebaseClient.jwks.get')(msg, $meta);
                    },
                    async 'firebase.certs.get'(msg, $meta) {
                        return this.bus.importMethod('firebaseClient.certs.get')(msg, $meta);
                    }
                })
            ],
            adapter: [
                require('./firebaseClient')
            ]
        };
    };
