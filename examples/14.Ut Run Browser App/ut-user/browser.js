module.exports = () => function utUser() {
    return {
        browser: () => [
            require('./browser/portal')
        ]
    };
};
