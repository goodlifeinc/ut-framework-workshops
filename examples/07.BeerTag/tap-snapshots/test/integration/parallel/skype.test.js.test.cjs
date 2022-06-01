/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/integration/parallel/skype.test.js TAP jobs utBot.testSkype.skype server tests skypeSim.message // location > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "skype",
    "receiver": "29:1rq8uAkrRY0WHneB5KeI78qI8ELCx_L8X5xOaRbxMZck",
    "request": Object {
      "attachments": Array [
        Object {
          "content": Object {
            "buttons": Array [
              Object {
                "title": "open",
                "type": "openUrl",
                "value": "https://goo.gl/maps/tHvayMXidC1U5XrC6",
              },
            ],
            "images": Array [
              Object {
                "url": "http://www.worldeasyguides.com/wp-content/uploads/2014/03/Map-of-Tweed-Heads.jpg",
              },
            ],
            "text": "2 Snapper Rocks Rd, Coolangatta QLD 4225",
            "title": "Rainbow Bay Surf Club Bar",
          },
          "contentType": "application/vnd.microsoft.card.hero",
          "name": "map",
          "thumbnailUrl": "http://www.worldeasyguides.com/wp-content/uploads/2014/03/Map-of-Tweed-Heads.jpg",
        },
      ],
      "conversationId": "conversationId",
      "entities": Array [
        Object {
          "geo": Object {
            "latitude": -28.162568,
            "longitude": 153.550011,
            "name": "Rainbow Bay Surf Club Bar",
            "type": "GeoCoordinates",
          },
          "type": "Place",
        },
      ],
      "from": Object {
        "id": "28:8bcc43dd-8ff0-430a-9251-7d7c2427f316",
      },
      "recipient": Object {
        "id": "29:1rq8uAkrRY0WHneB5KeI78qI8ELCx_L8X5xOaRbxMZck",
      },
      "text": String(
        [whereAreYou]
        Намирам се тук
      ),
      "type": "message",
    },
    "sender": "28:8bcc43dd-8ff0-430a-9251-7d7c2427f316",
    "text": String(
      [whereAreYou]
      Намирам се тук
    ),
  },
}
`

exports[`test/integration/parallel/skype.test.js TAP jobs utBot.testSkype.skype server tests skypeSim.message // pay parking zone + city > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "skype",
    "receiver": "29:1rq8uAkrRY0WHneB5KeI78qI8ELCx_L8X5xOaRbxMZck",
    "request": Object {
      "attachments": Array [
        Object {
          "content": Object {
            "buttons": Array [
              Object {
                "title": "Да",
                "type": "imBack",
                "value": "Да",
              },
              Object {
                "title": "Не",
                "type": "imBack",
                "value": "Не",
              },
            ],
            "text": String(
              [demo.parking.pay]
              Вие избрахте плащане на паркинг в София, синя зона.
              Моля, потвърдете.
            ),
            "title": "Плащане на паркинг",
          },
          "contentType": "application/vnd.microsoft.card.hero",
          "name": "quick answers",
        },
      ],
      "conversationId": "conversationId",
      "from": Object {
        "id": "28:8bcc43dd-8ff0-430a-9251-7d7c2427f316",
      },
      "recipient": Object {
        "id": "29:1rq8uAkrRY0WHneB5KeI78qI8ELCx_L8X5xOaRbxMZck",
      },
      "type": "message",
    },
    "sender": "28:8bcc43dd-8ff0-430a-9251-7d7c2427f316",
  },
}
`

exports[`test/integration/parallel/skype.test.js TAP jobs utBot.testSkype.skype server tests skypeSim.message // welcome > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "skype",
    "receiver": "29:1rq8uAkrRY0WHneB5KeI78qI8ELCx_L8X5xOaRbxMZck",
    "request": Object {
      "conversationId": "conversationId",
      "from": Object {
        "id": "28:8bcc43dd-8ff0-430a-9251-7d7c2427f316",
      },
      "recipient": Object {
        "id": "29:1rq8uAkrRY0WHneB5KeI78qI8ELCx_L8X5xOaRbxMZck",
      },
      "text": String(
        [Default Fallback Intent]
        Непознат текст
      ),
      "type": "message",
    },
    "sender": "28:8bcc43dd-8ff0-430a-9251-7d7c2427f316",
    "text": String(
      [Default Fallback Intent]
      Непознат текст
    ),
  },
}
`

exports[`test/integration/parallel/skype.test.js TAP jobs utBot.testSkype.skype server tests skypeSim.message // welcome bg > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "skype",
    "receiver": "29:1rq8uAkrRY0WHneB5KeI78qI8ELCx_L8X5xOaRbxMZck",
    "request": Object {
      "attachments": Array [
        Object {
          "contentType": "image/jpeg",
          "contentUrl": "https://github.com/softwaregroup-bg/img/raw/master/bot.jpg",
          "name": "bot image",
          "thumbnailUrl": "https://github.com/softwaregroup-bg/img/raw/master/bot.jpg",
        },
      ],
      "conversationId": "conversationId",
      "from": Object {
        "id": "28:8bcc43dd-8ff0-430a-9251-7d7c2427f316",
      },
      "recipient": Object {
        "id": "29:1rq8uAkrRY0WHneB5KeI78qI8ELCx_L8X5xOaRbxMZck",
      },
      "text": String(
        [Default Welcome Intent]
        Здравейте
      ),
      "type": "message",
    },
    "sender": "28:8bcc43dd-8ff0-430a-9251-7d7c2427f316",
    "text": String(
      [Default Welcome Intent]
      Здравейте
    ),
  },
}
`

exports[`test/integration/parallel/skype.test.js TAP jobs utBot.testSkype.skype server tests skypeSim.message // welcome echo > result 1`] = `
Object {
  "httpResponse": "EVENT_RECEIVED",
  "reply": Object {
    "platform": "skype",
    "receiver": "29:1rq8uAkrRY0WHneB5KeI78qI8ELCx_L8X5xOaRbxMZck",
    "request": Object {
      "conversationId": "conversationId",
      "from": Object {
        "id": "28:8bcc43dd-8ff0-430a-9251-7d7c2427f316",
      },
      "recipient": Object {
        "id": "29:1rq8uAkrRY0WHneB5KeI78qI8ELCx_L8X5xOaRbxMZck",
      },
      "text": "hello",
      "type": "message",
    },
    "sender": "28:8bcc43dd-8ff0-430a-9251-7d7c2427f316",
    "text": "hello",
  },
}
`
