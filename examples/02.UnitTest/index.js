const helloModule = require("./helloModule");

require("ut-run").run({
    main: [helloModule],
    config: {
        implementation: "hello",
        utBus: { serviceBus: { jsonrpc: { domain: true, port: 8090 } } },
    },
});
