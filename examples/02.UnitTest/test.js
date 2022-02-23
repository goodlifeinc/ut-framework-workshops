const helloModule = require("./helloModule");

require("ut-run").run({
    main: [helloModule],
    method: "unit",
    config: {},
    params: {
        steps: [
            {
                method: "subject.object.predicate",
                name: "call subject.object.predicate",
                params: {},
                result: (result, assert) =>
                    assert.equal(result, "Hello world", "return Hello world"),
            },
            {
                method: "subject.object.predicate",
                name: "call subject.object.predicate with name param",
                params: {
                    name: "John",
                },
                result: (result, assert) =>
                    assert.equal(result, "Hello John", "return Hello John"),
            },
            {
                method: "subject.object.predicate",
                name: "call subject.object.predicate with undefined name",
                params: {
                    name: undefined,
                },
                result: (result, assert) =>
                    assert.equal(result, "Hello world", "return Hello world"),
            },
            {
                method: "subject.object.predicate",
                name: "call subject.object.predicate with null name",
                params: {
                    name: null,
                },
                result: (result, assert) =>
                    assert.equal(result, "Hello world", "return Hello world"),
            },
            {
                method: "subject.object.predicate",
                name: "call subject.object.predicate with short name",
                params: {
                    name: "fo",
                },
                error: (error, assert) => {
                    assert.equal(
                        error?.message,
                        "Name is too short, please send longer name!",
                        "Name is too short, please send longer name!"
                    );
                },
            },
            {
                method: "subject.object.predicate",
                name: "call subject.object.predicate with integer name",
                params: {
                    name: 1,
                },
                error: (error, assert) => {
                    assert.equal(
                        error?.message,
                        "Incompatible data type sent for name",
                        "Incompatible data type sent for name"
                    );
                },
            },
            {
                method: "subject.object.predicate",
                name: "call subject.object.predicate with object name",
                params: {
                    name: {
                        firstName: "blabla",
                    },
                },
                error: (error, assert) => {
                    assert.equal(
                        error?.message,
                        "Incompatible data type sent for name",
                        "Incompatible data type sent for name"
                    );
                },
            },
            {
                method: "subject.object.predicate",
                name: "call subject.object.predicate with array name",
                params: {
                    name: [true],
                },
                error: (error, assert) => {
                    assert.equal(
                        error?.message,
                        "Incompatible data type sent for name",
                        "Incompatible data type sent for name"
                    );
                },
            },
            {
                method: "subject.object.predicate",
                name: "call subject.object.predicate with boolean name",
                params: {
                    name: true,
                },
                error: (error, assert) => {
                    assert.equal(
                        error?.message,
                        "Incompatible data type sent for name",
                        "Incompatible data type sent for name"
                    );
                },
            },
        ],
    },
});
