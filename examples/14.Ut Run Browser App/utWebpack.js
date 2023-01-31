module.exports = ({utWebpack}) => ({
    options: {
        mains: {
            admin: 'adminPortal'
        }
    },
    use: [utWebpack()]
});
