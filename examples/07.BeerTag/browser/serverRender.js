require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
    sourceMaps: true,
    retainLines: true,
    plugins: [],
    cache: true,
    ignore: [/node_modules[\\/](?!(impl|ut)-)./]
});
require('@babel/polyfill');

const proxy = new Proxy({}, {
    get: function getter(target, key) {
        if (key === '__esModule') {
            return false;
        }
        return key;
    }
});

require.extensions['.css'] = () => proxy // eslint-disable-line
require.extensions['.png'] = () => ({}); // eslint-disable-line
require.extensions['.gif'] = () => ({}); // eslint-disable-line
require.extensions['.jpg'] = () => ({}); // eslint-disable-line
require.extensions['.jpeg'] = () => ({}); // eslint-disable-line
require.extensions['.svg'] = () => ({}); // eslint-disable-line
require.extensions['.ico'] = () => ({}); // eslint-disable-line

module.exports = (...params) => [
    [require.resolve('../impl/browser'), ...params],
    [require.resolve('ut-login'), ...params],
    [require.resolve('ut-browser'), ...params],
    [require.resolve('ut-front-react/browser'), ...params],
    [require.resolve('ut-core/browser'), ...params],
    [require.resolve('ut-audit/browser'), ...params],
    [require.resolve('ut-history/browser'), ...params],
    [require.resolve('ut-user/browser'), ...params],
    [require.resolve('ut-customer/browser'), ...params],
    [require.resolve('ut-document/browser'), ...params],
    [require.resolve('ut-transfer/browser'), ...params],
    [require.resolve('ut-rule/browser'), ...params],
    [require.resolve('ut-agent/browser'), ...params],
    [require.resolve('ut-ledger/browser'), ...params],
    [require.resolve('ut-bulk-payment/browser'), ...params],
    [require.resolve('ut-aml/browser'), ...params],
    [require.resolve('ut-report/browser'), ...params],
    [require.resolve('ut-mirrors/browser'), ...params]
];
