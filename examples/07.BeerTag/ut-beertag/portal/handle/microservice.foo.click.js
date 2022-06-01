/** @type { import("../../handlers").libFactory } */
export default () => ({
    async 'beertag.foo.click'(params) {
        return {click: true};
    },
    'beertag.foo.clickReduce'({state, payload}) {
        return {...state, ...payload};
    }
});
