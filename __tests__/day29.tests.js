const frisby = require("frisby");
const url = 'https://www.google.com/maps'
const Payload = {username:'Lee', password:'1569', email: 'hypernova@stars.com'}
const workspaceId = 'db4af806-b352-4ef9-a040-36bc7f4b44c1'
const API_KEY ='PMAK-649734e3de9a020043eb672a-46a9778ac6b268950d479b505fe885aa28'
const Webhook = {"name": "{webhookName}", "collection": "{collectionUid}"
}

frisby.globalSetup({
    request: {
        timeout: 100000,
    },
});

describe("Day29", () => {
    it('echo', function () {
        return frisby
            .post(`https://postman-echo.com/post`, Payload)
            .expect("status", 200)
            .expect('jsonTypes', {
                "data:":
                    "{ username: 'Lee'," +
                    " password: '1569'," +
                    " email: 'hypernova@stars.com' }"
            })
    })

    it('Create Webhook', function () {
        return frisby
            .post(`https://api.getpostman.com/webhooks?workspace=${workspaceId}`,Webhook, {
                method: "get",
                headers: {"x-api-key": API_KEY}
            })
            .expect("status", 401)
    })

    it('Trigger Webhook\n', function () {
        return frisby
            .post(`https://newman-api.getpostman.com/run`)
            .expect("status", 404)
    })
    });
