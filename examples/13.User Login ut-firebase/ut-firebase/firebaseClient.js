module.exports = (...params) => {
    return class firebaseClient extends require('ut-port-http')(...params) {
        get defaults() {
            return {
                id: 'firebaseClient',
                type: 'https',
                logLevel: 'error',
                url: 'https://identitytoolkit.googleapis.com/v1',
                method: 'post',
                namespace: ['firebaseClient'],
                raw: {
                    json: true
                },
                maskedKeys: []
            };
        }

        handlers() {
            return {
                'firebaseClient.user.login.request.send'(
                    { username: email, password },
                    _
                ) {
                    return {
                        uri: `/accounts:signInWithPassword?key=${this.config.key}`,
                        payload: {
                            password,
                            email
                        }
                    };
                }
            };
        }
    };
};
