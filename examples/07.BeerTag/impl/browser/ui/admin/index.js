import Provider from './provider';
import ConfigProvider from './configProvider';
import { helpers as reportHelpers } from './config/report/helpers';

export function mainUI({utMethod, config = {}}) {
    return {
        'mainUI.provider'() {
            return Provider;
        },
        'mainUI.configProvider'() {
            return ConfigProvider;
        },
        'mainUI.reports'() {
            return reportHelpers;
        }
    };
};
