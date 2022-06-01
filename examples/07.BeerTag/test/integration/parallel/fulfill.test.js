const test = require('ut-run/test');
const opt = require('../../lib/bot');

const clean = (method, result) => {
    switch (method) {
        case 'bot.botContext.fetch#[]':
            return result.map(record => {
                // only these are set in the config: appId, secret, accessToken, botName, clientId, contextName
                return {
                    appId: record.appId,
                    secret: record.secret,
                    accessToken: record.accessToken,
                    botName: record.botName,
                    clientId: record.clientId,
                    contextName: record.contextName
                };
            });
        case 'fulfill/demo.parking.pay':
            delete result.details.time;
            break;
        case 'fulfill/demo.signal.submit':
            delete result.details.time;
            break;
        case 'fulfill/demo.complaint.submit':
            delete result.details.time;
            break;
    }
    return result;
};

const cleanError = (method, error) => {
    if (error) {
        delete error.stack;
        switch (method) {
            case 'fulfill/demo.parking.pay':
                if (error.cause) delete error.cause._original;
                if (error.req) {
                    delete error.req.meta;
                    delete error.req.params;
                    delete error.req.url;
                }
                break;
        }
    };
    return {...error};
};

const method = (method, name, params) => {
    return {
        method,
        name: name,
        context: false,
        params: typeof params === 'function' ? function(...args) { return params.apply(this, args); } : params,
        result: (result, assert) => {
            assert.matchSnapshot(clean(method, result), 'result');
        },
        error: (error, assert) => {
            assert.matchSnapshot(cleanError(method, error), 'error');
        }
    };
};

function inject(params = {}) {
    return function({botContext}) {
        const {contextId, nlpAgentId, botId} = botContext[0];
        return {...params, contextId, nlpAgentId, userId: botId};
    };
}

test({
    type: 'integration',
    name: 'bot',
    brokerConfig: opt.brokerConfig,
    server: opt.server,
    serverConfig: opt.serverConfig,
    steps: function(test, bus, run) {
        return run(test, bus, [
            method('bot.botContext.fetch#[]', 'botContext', {appId: 'viberSim', clientId: 'testViber'}),
            method('fulfill/demo.parking.pay', 'Pay parking', inject({zone: 'blue', 'geo-city': 'sofia'})),
            method('fulfill/demo.parking.pay', 'Pay parking no zone', inject({'geo-city': 'plovdiv'})),
            method('fulfill/demo.parking.pay', 'Pay parking no city', inject({})),
            method('fulfill/demo.contact.fetch', 'Get all contacts', inject({})),
            method('fulfill/demo.contact.fetch.address', 'Get address', inject({})),
            method('fulfill/demo.contact.fetch.contactName', 'Get contactName', inject({})),
            method('fulfill/demo.contact.fetch.emails', 'Get emails', inject({})),
            method('fulfill/demo.contact.fetch.eventsLink', 'Get eventsLink', inject({})),
            method('fulfill/demo.contact.fetch.locationLink', 'Get locationLink', inject({})),
            method('fulfill/demo.contact.fetch.ownerName', 'Get ownerName', inject({})),
            method('fulfill/demo.contact.fetch.phones', 'Get phones', inject({})),
            method('fulfill/demo.contact.fetch.workingTime', 'Get workingTime', inject({})),
            method('fulfill/demo.signal.submit', 'Submit signal', inject({
                from: 'bot@softwaregroup.com',
                to: 'chatbot@softwaregroup.com',
                subject: 'signal',
                template: 'signal',
                message: 'signal text'
            })),
            method('fulfill/demo.complaint.submit', 'Submit complaint', inject({
                from: 'bot@softwaregroup.com',
                to: 'chatbot@softwaregroup.com',
                template: 'signal',
                subject: 'Жалба',
                names: 'Тест тестов',
                phone: '123',
                email: 'test.testov@test.test',
                address: 'Test street 007',
                message: 'Тестово съдържание на жалбата'
            })),
            method('fulfill/demo.transfer.pull', 'Epay', inject({
                gateway: 'epay',
                merchant: 'merchantId',
                merchantKey: 'merchantKey',
                amount: '5.00',
                currency: 'BGN',
                invoice: '1234567890',
                expiration: '1.1.2020',
                description: 'Ел. енергия 1-30 септ 2019'
            }))
        ]);
    }
}, module.parent);
