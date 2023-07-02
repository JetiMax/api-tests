const frisby = require("frisby");
const {Joi} = require("frisby");

describe('Day13', () => {
    it('Planets', function () {
        return frisby
            .get('https://swapi.dev/api/planets')
            .expect('status', 200)
            .expect("jsonTypes", {
                "results.0.name": Joi.string().valid("Tatooine")

            })
    })
});

    it('Species', function () {
        return frisby
            .get('https://swapi.dev/api/species')
            .expect('status', 200)
            .expect("jsonTypes", {
                "results.0.language": Joi.string().valid("Ewokese")
            })
    });


