import backend from './backend';
import component from './component';
import handle from './handle';

export default () => function utBeertag() {
    return {
        config: require('./config'),
        browser: () => [
            backend,
            ...component,
            handle
        ]
    };
};
