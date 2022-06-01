/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/integration/parallel/fulfill.test.js TAP server tests bot.botContext.fetch#[] // botContext > result 1`] = `
Array [
  Object {
    "accessToken": "4444444444444444-5555555555555555-6666666666666666",
    "appId": "viberSim",
    "botName": "test automation Viber",
    "clientId": "testViber",
    "contextName": "test automation context Viber",
    "secret": "1111111111111111-2222222222222222-3333333333333333",
  },
]
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.complaint.submit // Submit complaint > result 1`] = `
Object {
  "details": Object {},
}
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.contact.fetch // Get all contacts > result 1`] = `
Object {
  "details": Object {
    "address": "Test street 1",
    "contactName": "Test Testov",
    "emails": "test.testov@test.test",
    "eventsLink": "https://www.sofia.bg/web/sofia-municipality/calendar-of-events",
    "link": "info not available",
    "locationLink": "https://goo.gl/maps/1XTZobeMRT12",
    "ownerName": "test",
    "phones": "123456789",
    "placeId": "info not available",
    "thumbnail": "info not available",
    "workingTime": "10:00-19:00",
  },
  "event": "success",
}
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.contact.fetch.address // Get address > result 1`] = `
Object {
  "details": Object {
    "address": "Test street 1",
  },
  "event": "success",
}
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.contact.fetch.contactName // Get contactName > result 1`] = `
Object {
  "details": Object {
    "contactName": "Test Testov",
  },
  "event": "success",
}
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.contact.fetch.emails // Get emails > result 1`] = `
Object {
  "details": Object {
    "emails": "test.testov@test.test",
  },
  "event": "success",
}
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.contact.fetch.eventsLink // Get eventsLink > result 1`] = `
Object {
  "details": Object {
    "eventsLink": "https://www.sofia.bg/web/sofia-municipality/calendar-of-events",
  },
  "event": "success",
}
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.contact.fetch.locationLink // Get locationLink > result 1`] = `
Object {
  "details": Object {
    "locationLink": "https://goo.gl/maps/1XTZobeMRT12",
  },
  "event": "success",
}
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.contact.fetch.ownerName // Get ownerName > result 1`] = `
Object {
  "details": Object {
    "ownerName": "test",
  },
  "event": "success",
}
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.contact.fetch.phones // Get phones > result 1`] = `
Object {
  "details": Object {
    "phones": "123456789",
  },
  "event": "success",
}
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.contact.fetch.workingTime // Get workingTime > result 1`] = `
Object {
  "details": Object {
    "workingTime": "10:00-19:00",
  },
  "event": "success",
}
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.parking.pay // Pay parking > result 1`] = `
Object {
  "details": Object {
    "amount": "1.00 BGN",
  },
}
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.parking.pay // Pay parking no city > error 1`] = `
Object {
  "cause": Object {
    "details": Array [
      Object {
        "context": Object {
          "key": "geo-city",
          "label": "geo-city",
        },
        "message": "\\"geo-city\\" is required",
        "path": Array [
          "geo-city",
        ],
        "type": "any.required",
      },
    ],
  },
  "message": "Method demo.parking.pay parameters failed validation for: geo-city",
  "method": Array [
    "demo.parking.pay",
    "fulfill/demo.parking.pay",
  ],
  "params": Object {
    "fields": "geo-city",
    "method": "demo.parking.pay",
    "type": "params",
  },
  "req": Object {
    "httpVersion": "1.1",
    "method": "POST",
  },
  "res": Object {
    "httpVersion": "1.1",
    "statusCode": 500,
  },
  "type": "port.paramsValidation",
}
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.parking.pay // Pay parking no zone > result 1`] = `
Object {
  "details": Object {
    "amount": "1.00 BGN",
  },
}
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.signal.submit // Submit signal > result 1`] = `
Object {
  "details": Object {},
}
`

exports[`test/integration/parallel/fulfill.test.js TAP server tests fulfill/demo.transfer.pull // Epay > result 1`] = `
Object {
  "details": Object {
    "fulfillmentMessages": Array [
      Object {
        "payload": Object {
          "attachments": Array [
            Object {
              "contentType": "application/x.button",
              "url": "https://www.epay.bg/?ENCODED=RU5DT0RJTkc9dXRmLTgKTUlOPW1lcmNoYW50SWQKSU5WT0lDRT0xMjM0NTY3ODkwCkFNT1VOVD01LjAwCkNVUlJFTkNZPUJHTgpFWFBfVElNRT0xLjEuMjAyMApERVNDUj3QldC7LiDQtdC90LXRgNCz0LjRjyAxLTMwINGB0LXQv9GCIDIwMTk%3D&CHECKSUM=16CE44676F29D4B2816BE196E357A27CA70DD8B1&PAGE=paylogin",
            },
          ],
          "type": "actions",
        },
      },
    ],
  },
  "event": "reply",
}
`
