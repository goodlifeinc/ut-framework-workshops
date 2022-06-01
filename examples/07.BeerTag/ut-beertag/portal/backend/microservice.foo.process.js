/** @type { import("../../handlers").libFactory } */
export default () => ({
    async 'beertag.foo.process.request.send'(request, $meta) {
        // mutate the request or $meta
        return await super.send(request, $meta);
    },
    async 'beertag.foo.process.response.receive'(response, $meta) {
        if (response && response.payload && response.payload.jsonrpc) response = await super.receive(response, $meta);
        // mutate the response or $meta
        return response;
    }
});
