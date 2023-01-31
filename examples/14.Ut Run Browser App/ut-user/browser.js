module.exports = () => function utUser() {
    return {
        browser: () => [
            require('./browser/ui'),
            require('./browser/portal')
        ]
    };
};
