const dispatch = require("ut-function.dispatch");

module.exports = {
    orchestrator: [
        dispatch({
            "subject.object.predicate": ({ name }) => {
                const type = typeof name;
                if (![null, undefined].includes(name) && type !== 'string') {
                    throw new Error('Incompatible data type sent for name');
                }
                if (name && name?.length <= 2) {
                    throw new Error('Name is too short, please send longer name!');
                }
                return `Hello ${name || "world"}`;
            },
        }),
    ],
};
