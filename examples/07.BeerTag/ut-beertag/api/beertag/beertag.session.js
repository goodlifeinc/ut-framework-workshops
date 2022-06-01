/** @type { import("../../handlers").handlerFactory } */
module.exports = ({
    import: {
        db$beertagSessionDelete,
        db$beertagSessionGet,
        db$beertagSessionSet
    }
}) => ({
    'beertag.session.delete': db$beertagSessionDelete,
    'beertag.session.get': db$beertagSessionGet,
    'beertag.session.set': db$beertagSessionSet
});
