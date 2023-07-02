const frisby = require("frisby");
const Joi = frisby.Joi;
const Page=1


describe('Day16', () => {
    it("xkcd", function () {
        return frisby

            .get(`http://xkcd.com/${Page}/info.0.json`, Page+1)
            .expect('status', 200)
            .then((result) => console.log(result.json));
    })
});

