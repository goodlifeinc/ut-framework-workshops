module.exports = (...params) => class ldap extends require('ut-port-script')(...params) {
    get defaults() {
        return {
            imports: ['ldap']
        };
    }
};
