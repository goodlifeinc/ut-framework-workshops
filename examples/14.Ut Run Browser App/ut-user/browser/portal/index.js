/** @type { import("../../handlers").handlerSet } */
module.exports = function portal() {
    return [
        require('./start'),
        require('./ready')
    ];
};
