const frisby = require("frisby");
const Joi = frisby.Joi;
const apiKey = "PMAK-649734e3de9a020043eb672a-46a9778ac6b268950d479b505fe885aa28";

it("Status & response body", function () {
    return frisby
        .get("https://api.getpostman.com/collections", {
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-api-key": apiKey,
            },
        })
        .expect("status", 200)
        .expect("jsonTypes", "collections.*", {
            id: Joi.string(),
            name: Joi.string(),
            uid: Joi.string(),
            owner: Joi.string(),
        });
});