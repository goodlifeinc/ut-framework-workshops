module.exports = function test() {
    return {
        foo: function(test, bus, run, ports, {
            beertagFooList
        }) {
            return run(test, bus, [
                beertagFooList(),
                {
                    method: 'beertag.foo.get',
                    name: 'fooGet',
                    params: ({fooList: [{fooId}]}) => ({fooId}),
                    result(result, assert) {
                        assert.ok(result.fooId, 'foo found');
                    }
                },
                {
                    method: 'beertag.foo.process',
                    name: 'process',
                    params: ({fooGet: {fooId}}) => ({fooId}),
                    result(result, assert) {
                        assert.ok(result.css, 'return color');
                    }
                }
            ]);
        }
    };
};
