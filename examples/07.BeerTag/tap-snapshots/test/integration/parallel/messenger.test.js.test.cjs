/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/integration/parallel/messenger.test.js TAP jobs utBot.testMessenger.messenger server tests messengerSim.message // location > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "messenger",
    "receiver": "2152159991519793",
    "request": Object {
      "access_token": "4444444444444444-5555555555555555-6666666666666666",
      "message": Object {
        "attachment": Object {
          "payload": Object {
            "elements": Array [
              Object {
                "buttons": Array [
                  Object {
                    "title": "open",
                    "type": "web_url",
                    "url": "https://goo.gl/maps/tHvayMXidC1U5XrC6",
                  },
                ],
                "image_url": "http://www.worldeasyguides.com/wp-content/uploads/2014/03/Map-of-Tweed-Heads.jpg",
                "subtitle": String(
                  2 Snapper Rocks Rd, Coolangatta QLD 4225
                  📌
                  [whereAreYou]
                  Намирам се тук
                ),
                "title": "Rainbow Bay Surf Club Bar",
              },
            ],
            "template_type": "generic",
          },
          "type": "template",
        },
      },
      "recipient": Object {
        "id": "2152159991519793",
      },
    },
  },
}
`

exports[`test/integration/parallel/messenger.test.js TAP jobs utBot.testMessenger.messenger server tests messengerSim.message // pay parking zone + city > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "messenger",
    "receiver": "2152159991519793",
    "request": Object {
      "access_token": "4444444444444444-5555555555555555-6666666666666666",
      "message": Object {
        "quick_replies": Array [
          Object {
            "content_type": "text",
            "payload": "Да",
            "title": "Да",
          },
          Object {
            "content_type": "text",
            "payload": "Не",
            "title": "Не",
          },
        ],
        "text": String(
          [demo.parking.pay]
          Вие избрахте плащане на паркинг в София, синя зона.
          Моля, потвърдете.
        ),
      },
      "recipient": Object {
        "id": "2152159991519793",
      },
    },
    "text": String(
      [demo.parking.pay]
      Вие избрахте плащане на паркинг в София, синя зона.
      Моля, потвърдете.
    ),
  },
}
`

exports[`test/integration/parallel/messenger.test.js TAP jobs utBot.testMessenger.messenger server tests messengerSim.message // welcome > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "messenger",
    "receiver": "2152159991519793",
    "request": Object {
      "access_token": "4444444444444444-5555555555555555-6666666666666666",
      "message": Object {
        "text": String(
          [Default Fallback Intent]
          Непознат текст
        ),
      },
      "recipient": Object {
        "id": "2152159991519793",
      },
    },
    "text": String(
      [Default Fallback Intent]
      Непознат текст
    ),
  },
}
`

exports[`test/integration/parallel/messenger.test.js TAP jobs utBot.testMessenger.messenger server tests messengerSim.message // welcome bg > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "messenger",
    "receiver": "2152159991519793",
    "request": Object {
      "access_token": "4444444444444444-5555555555555555-6666666666666666",
      "message": Object {
        "attachment": Object {
          "payload": Object {
            "elements": Array [
              Object {
                "image_url": "https://github.com/softwaregroup-bg/img/raw/master/bot.jpg",
                "title": String(
                  [Default Welcome Intent]
                  Здравейте
                ),
              },
            ],
            "template_type": "generic",
          },
          "type": "template",
        },
      },
      "recipient": Object {
        "id": "2152159991519793",
      },
    },
  },
}
`

exports[`test/integration/parallel/messenger.test.js TAP jobs utBot.testMessenger.messenger server tests messengerSim.message // welcome echo > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "messenger",
    "receiver": "2152159991519793",
    "request": Object {
      "access_token": "4444444444444444-5555555555555555-6666666666666666",
      "message": Object {
        "text": "hello",
      },
      "recipient": Object {
        "id": "2152159991519793",
      },
    },
    "text": "hello",
  },
}
`
