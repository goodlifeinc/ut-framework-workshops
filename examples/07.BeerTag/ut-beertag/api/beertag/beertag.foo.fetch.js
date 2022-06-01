/** @type { import("../../handlers").handlerFactory } */
module.exports = ({
    import: {
        'db/beertag.foo.fetch#[]': fetch
    }
}) => ({
    'beertag.foo.fetch': fetch
});
