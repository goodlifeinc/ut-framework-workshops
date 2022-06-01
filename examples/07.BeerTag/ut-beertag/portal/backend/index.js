/** @type { import("../../handlers").handlerSet } */
export default function backend() {
    return [
        () => ({namespace: ['beertag']}),
        require('./beertag.foo.process').default
    ];
}
