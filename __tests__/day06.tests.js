const frisby = require("frisby");
const Joi = frisby.Joi;

it("day06", function () {
    return frisby
        .get(`https://icanhazdadjoke.com/`)
        .expect("status", 200)
        .catch((error) => {
            console.log('lets put data in here: ' + error)
            return frisby
                .get(`https://icanhazdadjoke.com/`)
                .expect("status", 403)

        })
});