const frisby = require("frisby");
const API_KEY ='PMAK-649734e3de9a020043eb672a-46a9778ac6b268950d479b505fe885aa28'
const COLLECTIONU_UID = '17268601-ff2b9c17-12f0-4940-a02a-d98207673e40';




describe("day20", () => {
    it("Submit", async () => {
        const response = await frisby
            .setup({
                request: {
                    headers: {
                        "x-api-key": API_KEY,
                    },
                },
            })
            .get(`https://api.getpostman.com/collections/${COLLECTIONU_UID}`)
            .expect("status", 200);
        const collection = response.json.collection;
        expect(collection.info.name).toEqual("Day 20: Documentation")

    })
});