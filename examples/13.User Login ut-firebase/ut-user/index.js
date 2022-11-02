const { JWK, JWS } = require('node-jose');
const jwt = require('jsonwebtoken');
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
                    },
                    async 'user.user.tokenVerify'({ token }, $meta) {
                        const { payload: jsonKeys } = await this.bus.importMethod('firebase.jwks.get')({}, $meta);
                        const keystore = await JWK.asKeyStore(jsonKeys);
                        const v = await JWS.createVerify(keystore).verify(token);
                        return JSON.parse(v.payload.toString());
                    },
                    async 'user.user.tokenVerifyWithCerts'({ token }, $meta) {
                        const { payload: publicKeys } = await this.bus.importMethod('firebase.certs.get')({}, $meta);
                        const header64 = token.split('.')[0];
                        const header = JSON.parse(Buffer.from(header64, 'base64').toString('ascii'));
                        return jwt.verify(token, publicKeys[header.kid], { algorithms: ['RS256'] });
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
                        }),
                        'user.user.tokenVerify': () => ({
                            auth: false,
                            params: joi.object({
                                token: joi.string().min(50).required()
                            }),
                            result: joi.string()
                        }),
                        'user.user.tokenVerifyWithCerts': () => ({
                            auth: false,
                            params: joi.object({
                                token: joi.string().min(50).required()
                            }),
                            result: joi.string()
                        })
                    };
                }
            ]
        };
    };
