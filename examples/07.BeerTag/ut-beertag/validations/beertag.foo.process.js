/** @type { import("ut-run").validationFactory } */
module.exports = ({
    joi,
    lib: {
        fooId
    }
}) => ({
    'beertag.foo.process'() {
        return {
            description: 'Foo process',
            params: joi.object().keys({fooId}),
            result: joi.object()
        };
    }
});
