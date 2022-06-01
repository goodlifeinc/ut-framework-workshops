/** @type { import("../../handlers").handlerSet } */
module.exports = function foo() {
    return [
        require('../lib/css'),
        require('./example.error.transform'),
        require('./example.parking.pay'),
        require('./example.request.receive'),
        require('./beertag.session'),
        require('./beertag.foo.fetch'),
        require('./beertag.foo.get'),
        require('./beertag.foo.process')
    ];
};
