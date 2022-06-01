module.exports = () => () => ({
    orchestrator: () => [
    ],
    adapter: () => [
        require('../../test/schema'),
        require('ut-port-ldap/customConnections/api/script'),
        require('./ldap')
    ],
    eftGateway: () => [
        require('ut-gateway')({namespace: 'eftApi'})
    ],
    adminPortal: () => [
        require('ut-gateway')({namespace: 'adminApi'})
    ],
    servicePortal: () => [
        require('ut-gateway')({namespace: 'serviceApi'})
    ],
    cmsPortal: () => [
        require('ut-gateway')({namespace: 'cmsApi'})
    ],
    solutionPortal: () => [
        require('ut-gateway')({namespace: 'solutionApi'})
    ],
    panServer: () => [
        require('ut-gateway')({namespace: 'panApi'})
    ]
});
