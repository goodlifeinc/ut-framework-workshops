import {component} from 'ut-model';

import fooEdit from './fooEdit';
import fooBrowse from './beertag.foo.browse';
import fooDemo from './beertag.foo.demo';
import fooNew from './beertag.foo.new';
import fooOpen from './beertag.foo.open';
import model from '../../model';

/** @type { import("../../handlers").pageSet } */
export default component(model, [
    fooEdit,
    fooBrowse,
    fooDemo,
    fooNew,
    fooOpen
]);
