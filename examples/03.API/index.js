const helloModule = require("./helloModule");

require("ut-run").run({
    main: [helloModule],
    config: {
        implementation: "hello",
        debug: true,
        utBus: { serviceBus: { jsonrpc: { utLogin: false, port: 8090, debug: true } } },
    },
});
