const frisby = require("frisby");
const API_KEY ='PMAK-649734e3de9a020043eb672a-46a9778ac6b268950d479b505fe885aa28'
const API_ID = '8d3e3593-0088-4e5c-a2fe-acbfe5d62442';

describe("Day 18", () => {
    it("API", async () => {
        const result = await frisby
            .setup({
                request: {
                    headers: {
                        "x-api-key": API_KEY,
                    },
                },
            })
            .get(`https://api.getpostman.com/apis/${API_ID}`)
            .expect("status", 200);
            expect(result.json.api.name).toEqual("Cosmos");
    });
});