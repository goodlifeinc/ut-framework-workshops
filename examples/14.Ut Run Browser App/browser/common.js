module.exports = {
    implementation: 'testApp',
    repl: false,
    utLog: {
        streams: {
            udp: false
        }
    },
    debug: true,
    browser: true,
    utBus: {
        serviceBus: {
            logLevel: 'trace',
            socket: false
        }
    },
    utUser: {browser: true}
};
