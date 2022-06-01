import Provider from './provider';
import ConfigProvider from './configProvider';

export function mainUI({utMethod, config = {}}) {
    return {
        'mainUI.provider'() {
            return Provider;
        },
        'mainUI.configProvider'() {
            return ConfigProvider;
        },
        'mainUI.reports'() {
            return {};
        }
    };
};
