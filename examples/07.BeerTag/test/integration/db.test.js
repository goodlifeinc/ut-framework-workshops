const test = require('ut-run/test');
const config = require('./../lib/db');

// create the database, login and persist cookies in store
test({
    type: 'integration',
    name: 'Create database',
    broker: config.broker,
    brokerConfig: config.brokerConfig,
    server: config.server,
    serverConfig: config.serverConfig,
    client: config.client,
    clientConfig: config.clientConfig,
    imports: /\.steps$/,
    steps: function(test, bus, run, ports, {userLogin, userUtils: {adminUsername, adminPassword}}) {
        return run(test, bus, [
            userLogin({
                name: 'admin login',
                params: {
                    username: adminUsername,
                    password: adminPassword,
                    newPassword: adminPassword
                }
            })
        ]);
    }
});
