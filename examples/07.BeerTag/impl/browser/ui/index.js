module.exports = (...params) => class ui extends require('ut-port-script')(...params) {
    get defaults() {
        return {
            logLevel: 'trace',
            namespace: ['mainUI', 'container'],
            imports: ['mainUI', /\.ui$/]
        };
    }
};
