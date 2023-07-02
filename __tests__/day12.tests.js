const frisby = require("frisby");
const Joi = frisby.Joi;
const API_KEY ='PMAK-649734e3de9a020043eb672a-46a9778ac6b268950d479b505fe885aa28'
const CollectionId = '17268601-33977903-82f8-4fa4-ba06-f997dc8027d8'
const EnvironmentId ='17268601-1f291456-1eec-4880-a1b3-7aef9f4a3c4f'
const WorkspaceId ='db4af806-b352-4ef9-a040-36bc7f4b44c1'
frisby.globalSetup({
    request: {
        timeout: 10000,
    },
});

describe('Day12', () => {
    it("Get single collection\n", function () {
        return frisby
            .get(`https://api.getpostman.com/collections/${CollectionId}`, {
                method: "get",
                headers: {"x-api-key": API_KEY}
            })
            .expect("status", 200)
            .then((result) => console.info(result.json));
    });

    it("Get single environment\n", function () {
        return frisby
            .get(`https://api.getpostman.com/environments/${EnvironmentId}`, {
                method: "get",
                headers: {"x-api-key": API_KEY}
            })
            .expect("status", 200)
            .then((result) => console.info(result.json));
    });

    it("Get single workspace\n", function () {
        return frisby
            .get(`https://api.getpostman.com/workspaces/${WorkspaceId}`, {
                method: "get",
                headers: {"x-api-key": API_KEY}
            })
            .expect("status", 200)
            .then((result) => console.info(result.json));
    });
});
