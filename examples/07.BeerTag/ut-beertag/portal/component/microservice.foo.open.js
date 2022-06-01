/** @type { import("../../handlers").pageFactory } */
export default ({
    lib: {
        fooEdit
    }
}) => ({
    'beertag.foo.open': () => ({
        title: 'Edit foo',
        permission: 'beertag.foo.get',
        component: fooEdit
    })
});
