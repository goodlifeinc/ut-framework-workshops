import {backendMock} from 'ut-model';

import model from '../model';
import mock from '../model/mock';

export default () => function utBeertag() {
    return backendMock(model, () => mock);
};
