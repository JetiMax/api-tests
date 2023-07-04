const frisby = require("frisby");
const Joi = frisby.Joi;

const Payload = {username:'Lee', password:'1569', email: 'hypernova@stars.com'}
const workspaceId = '6b405185-0304-40ff-9987-45170a3f1cd5'
const API_KEY ='PMAK-6496e39f35af230031972da5-4c08447d913b9bbbaea7a16529dc2473ec'
let webhookName = 'echo webhook'
let collectionUid = '17268601-544eb9a5-18b0-4d7a-a1fe-e6a386cb2ddf'


frisby.globalSetup({
    request: {
        timeout: 100000,
    },
});

describe("Day29", () => {
    frisby.globalSetup({
        request: {
            headers: {
                'x-api-key': API_KEY
            }
        }
    })

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
            .then((result) => console.log(result))
    })


describe("Day29.1", () => {
    frisby.globalSetup({
        request: {
            headers: {
                'x-api-key': API_KEY
            }
        }
    })

    it('Create Webhook', function () {
        return frisby
            .post(`https://api.getpostman.com/webhooks?workspace=${workspaceId}`, {
                "webhook": {
                    "name": webhookName,
                    "collection": collectionUid
                }
            })
            .expect('status', 200)
            // .expect('jsonTypes', 'webhook.webhookUrl', Joi.string().required())
        });

        it('Trigger Webhook\n', function () {
            return frisby
                .post(`https://newman-api.getpostman.com/run`)
                .expect("status", 404)
        })
    })
});



