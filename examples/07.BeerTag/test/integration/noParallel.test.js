/* eslint no-process-env: 0 */
const test = require('ut-run/test');
const opt = require('../lib/appConfig');

test({
    type: 'single',
    name: 'noParallel',
    brokerConfig: opt.brokerConfig,
    server: opt.server,
    serverConfig: opt.serverConfig,
    client: opt.client,
    clientConfig: opt.clientConfig,
    imports: /\.steps$/,
    jobs: [{
        name: 'utAgent.test.editNetwork',
        steps: require('ut-agent/test/jobs/test.agent.editNetwork')().editNetwork
    }, {
        name: 'utAgent.test.makerCheckerNetwork',
        steps: require('ut-agent/test/jobs/test.agent.makerCheckerNetwork')().makerCheckerNetwork
    }, {
        name: 'utLedger.test.makerCheckerInternalAccounts',
        steps: require('ut-ledger/test/jobs/test.ledger.makerCheckerInternalAccounts')().makerCheckerInternalAccounts
    }, {
        name: 'utUser.test.fetchAccessPolicy',
        steps: require('ut-user/test/jobs/test.user.fetchAccessPolicy')().fetchAccessPolicy
    }, {
        name: 'utUser.test.activateExternalSystem',
        steps: require('ut-user/test/jobs/test.user.activateExternalSystem')().activateExternalSystem
    }]
}, module.parent);
