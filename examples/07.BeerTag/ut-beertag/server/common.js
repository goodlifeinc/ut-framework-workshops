module.exports = {
    implementation: 'beertag',
    adapter: true,
    utPort: {
        noRecursion: true
    },
    utBus: {
        serviceBus: {
            requireMeta: true
        }
    },
    utCache: {
        adapter: true
    },
    utCore: true,
    utCustomer: {test: false},
    utDocument: {test: false},
    utUser: {test: false},
    utBeertag: true
};
