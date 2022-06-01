import fooClick from './beertag.foo.click';

/** @type { import("../../handlers").handlerSet } */
export default function handle() {
    return [
        () => ({ namespace: 'handle/beertag' }),
        fooClick
    ];
}
