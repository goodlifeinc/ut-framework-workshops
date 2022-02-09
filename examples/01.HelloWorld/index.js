const dispatch = require("ut-function.dispatch");

require("ut-run").run({
    main: [
        {
            orchestrator: [
                dispatch({
                    "subject.object.predicate": ({ name }) => {
                        return `Hello ${name || "world"}`;
                    },
                }),
            ],
        },
    ],
    config: {
        implementation: "hello",
        utBus: { serviceBus: { jsonrpc: { domain: true, port: 8090 } } },
    },
});
