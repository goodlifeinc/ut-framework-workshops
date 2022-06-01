/** @type { import("../../handlers").pageFactory } */
export default ({
    lib: {
        fooEdit
    }
}) => ({
    'beertag.foo.new': () => ({
        title: 'Create foo',
        permission: 'beertag.foo.add',
        component: fooEdit
    })
});
