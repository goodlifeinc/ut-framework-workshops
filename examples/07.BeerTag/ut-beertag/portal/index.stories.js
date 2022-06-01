import { app } from 'ut-portal/storybook';
import core from 'ut-core/portal';
import coreDropdown from 'ut-core/model/dropdown';
import customerDropdown from 'ut-customer/model/dropdown';

import beertag from './index';
import beertagMock from './mock';
import beertagDropdown from '../model/dropdown';
import fooMock from './fooMock';

export default {
    title: 'Beertag'
};

const page = app({
    implementation: 'beertag',
    utBrowser: {
        backend: {
            url: 'https://localhost:4006'
        }
    },
    utBeertag: true,
    utCore: true
}, {
    ...coreDropdown,
    ...customerDropdown,
    ...beertagDropdown,
    ...fooMock
}, [
    core(),
    beertag(),
    beertagMock()
]);

export const FooBrowse = page('beertag.foo.browse');
export const FooDemo = page('beertag.foo.demo');
export const FooOpen = page('beertag.foo.open', 1);
export const FooNew = page('beertag.foo.new');
export const TreeBrowse = page('beertag.tree.browse');
export const TreeOpen = page('beertag.tree.open', 101);
export const TreeNew = page('beertag.tree.new');
export const TreeReport = page('beertag.tree.report', 'list');
