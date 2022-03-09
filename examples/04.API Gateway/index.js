const helloModule = require("./helloModule");

require("ut-run").run({
    main: [helloModule],
    config: {
        implementation: "hello",
        debug: true,
        utBus: {serviceBus: {jsonrpc: {domain: true, utLogin: false}}},
        apiGateway: {
            discover: true,
            api: [
                '/oauth2-redirect.html',
                '/api/{path*}',
                '/rpc/subject/{path*}'
            ]
        },
    },
});
