/** @type { import("../../handlers").handlerFactory } */
module.exports = ({utMethod}) => ({
    // cache example
    'beertag.foo.get': utMethod('db/beertag.foo.get#[0]', {
        cache: {
            key: ({fooId: id}) => ({id: String(id)})
        }
    })
});
