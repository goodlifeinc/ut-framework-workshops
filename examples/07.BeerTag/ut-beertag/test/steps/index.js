module.exports = [
    function steps({callSite}) {
        return {
            'steps.beertag.foo.list': (params = {}) => ({
                ...callSite(),
                method: 'beertag.foo.fetch',
                name: 'fooList',
                params,
                result(result, assert) {
                    assert.ok(result.length, 'foo list');
                }
            })
        };
    }
];
