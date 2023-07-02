const frisby = require("frisby");
const Joi = frisby.Joi;
//from base_env import BASE_ENV;

const currency = "usd";
const coindeskBaseUrl = "https://api.coindesk.com";

it("day05", function () {
    return frisby
        .get(`${coindeskBaseUrl}/v1/bpi/currentprice/${currency}.json`)
        .expect("status", 200)
        .then((result) => console.log(result.json));
});