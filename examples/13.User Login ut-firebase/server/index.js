module.exports = (...params) =>
    [
        {
            main: require.resolve('../ut-login'),
            pkg: require.resolve('../ut-login/package.json')
        },
        {
            main: require.resolve('../ut-user'),
            pkg: require.resolve('../ut-user/package.json')
        },
        {
            main: require.resolve('../ut-hello'),
            pkg: require.resolve('../ut-hello/package.json')
        }
    ]
        .filter(Boolean)
        .map((item) => [item, ...params]);
