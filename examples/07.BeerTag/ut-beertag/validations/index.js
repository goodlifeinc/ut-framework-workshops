/** @type { import("ut-run").validationSet } */
module.exports = function validation() {
    return [
        require('ut-function.common-joi'),
        require('./foo'),
        require('./beertag.foo.get'),
        require('./beertag.foo.fetch'),
        require('./beertag.foo.process'),
        require('./beertag.session.delete'),
        require('./beertag.session.get'),
        require('./beertag.session.set')
    ];
};
