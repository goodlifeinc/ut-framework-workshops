/** @type { import("ut-run").validationFactory } */
module.exports = ({
    joi
}) => ({
    'beertag.session.set'() {
        return {
            description: 'Session set',
            params: joi.object().keys({
                id: joi.number().integer(),
                data: joi.any
            }),
            result: joi.object().keys({
                id: joi.number().integer(),
                data: joi.any
            })
        };
    }
});
