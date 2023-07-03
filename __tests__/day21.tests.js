const frisby = require("frisby");
const Joi = frisby.Joi;
const API_KEY ='PMAK-649734e3de9a020043eb672a-46a9778ac6b268950d479b505fe885aa28'
const WebSocket = '649d6bbbe7a135bdb88298cd';




describe("day21", () => {
    it("WebSocket", async () => {
        const response = await frisby
            .setup({
                request: {
                    headers: {
                        "x-api-key": API_KEY,
                    },
                },
            })
            .get(`https://postman-echo.com/get?collectionUid=${WebSocket}`)
            .expect("status", 200)
            .expect('jsonTypes', 'headers.*', frisby.Joi.string())
            .then((result) => console.log(result.json));
    })
});
