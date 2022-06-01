/** @type { import("../../handlers").handlerFactory } */
module.exports = ({
    import: {
        errorBeertagFooNotFound
    },
    lib: {
        css
    }
}) => ({
    async 'beertag.foo.process'({fooId}, $meta) {
        const found = await this.findHandler('beertag.foo.get').call(this, {fooId}, $meta);
        if (found) {
            const {color} = found;
            return {css: css(color)};
        } else {
            throw errorBeertagFooNotFound({params: {fooId}});
        }
    }
});
