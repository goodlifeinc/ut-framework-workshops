const dispatch = require('ut-function.dispatch');

module.exports = () =>
    function utFirebase() {
        return {
            orchestrator: [
                dispatch({
                    async 'firebase.user.login'(msg, $meta) {
                        return this.bus.importMethod('firebaseClient.user.login')(msg, $meta);
                    }
                })
            ],
            adapter: [
                require('./firebaseClient')
            ]
        };
    };
