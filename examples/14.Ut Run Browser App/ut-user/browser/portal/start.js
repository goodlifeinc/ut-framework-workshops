/** @type { import("../..").handlerFactory } */
module.exports = () => ({
    async start() {
        debugger;
        if (typeof document === 'undefined') return;
        console.log('hello start');
    }
});
