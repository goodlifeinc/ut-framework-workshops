/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/integration/parallel/viber.test.js TAP jobs utBot.testViber.viber server tests viberSim.message // location > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "viber",
    "receiver": "wF/bbCCrVtHurDUDq0ndDA==",
    "request": Object {
      "location": Object {
        "lat": -28.162568,
        "lon": 153.550011,
      },
      "method": "send_message",
      "receiver": "wF/bbCCrVtHurDUDq0ndDA==",
      "type": "location",
    },
  },
}
`

exports[`test/integration/parallel/viber.test.js TAP jobs utBot.testViber.viber server tests viberSim.message // pay parking zone + city > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "viber",
    "receiver": "wF/bbCCrVtHurDUDq0ndDA==",
    "request": Object {
      "keyboard": Object {
        "Buttons": Array [
          Object {
            "ActionBody": "Да",
            "ActionType": "reply",
            "Columns": 1,
            "Text": "Да",
          },
          Object {
            "ActionBody": "Не",
            "ActionType": "reply",
            "Columns": 1,
            "Text": "Не",
          },
        ],
        "DefaultHeight": false,
        "Type": "keyboard",
      },
      "method": "send_message",
      "receiver": "wF/bbCCrVtHurDUDq0ndDA==",
      "text": String(
        [demo.parking.pay]
        Вие избрахте плащане на паркинг в София, синя зона.
        Моля, потвърдете.
      ),
      "type": "text",
    },
    "text": String(
      [demo.parking.pay]
      Вие избрахте плащане на паркинг в София, синя зона.
      Моля, потвърдете.
    ),
  },
}
`

exports[`test/integration/parallel/viber.test.js TAP jobs utBot.testViber.viber server tests viberSim.message // welcome > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "viber",
    "receiver": "wF/bbCCrVtHurDUDq0ndDA==",
    "request": Object {
      "method": "send_message",
      "receiver": "wF/bbCCrVtHurDUDq0ndDA==",
      "text": String(
        [Default Fallback Intent]
        Непознат текст
      ),
      "type": "text",
    },
    "text": String(
      [Default Fallback Intent]
      Непознат текст
    ),
  },
}
`

exports[`test/integration/parallel/viber.test.js TAP jobs utBot.testViber.viber server tests viberSim.message // welcome bg > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "viber",
    "receiver": "wF/bbCCrVtHurDUDq0ndDA==",
    "request": Object {
      "media": "https://github.com/softwaregroup-bg/img/raw/master/bot.jpg",
      "method": "send_message",
      "receiver": "wF/bbCCrVtHurDUDq0ndDA==",
      "text": String(
        [Default Welcome Intent]
        Здравейте
      ),
      "thumbnail": "https://github.com/softwaregroup-bg/img/raw/master/bot.jpg",
      "type": "picture",
    },
    "text": String(
      [Default Welcome Intent]
      Здравейте
    ),
  },
}
`

exports[`test/integration/parallel/viber.test.js TAP jobs utBot.testViber.viber server tests viberSim.message // welcome echo > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "viber",
    "receiver": "wF/bbCCrVtHurDUDq0ndDA==",
    "request": Object {
      "method": "send_message",
      "receiver": "wF/bbCCrVtHurDUDq0ndDA==",
      "text": "hello",
      "type": "text",
    },
    "text": "hello",
  },
}
`
