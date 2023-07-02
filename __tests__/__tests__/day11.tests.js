const frisby = require('frisby')
const Joi = frisby.Joi;

frisby.globalSetup({
    request: {
        timeout: 15000,
    },
});

describe("Day11", () => {
    it("soilMoisture", async function () {
        const status = await frisby
            .get("https://water-ttl.herokuapp.com/hygrometer")
            .expect("status", 200);

        var soilMoisture = status.json.level

        if (soilMoisture >= 0.60) {
            const water = await frisby
                .post('https://water-ttl.herokuapp.com/water')
                .expect("status", 200);

            let good = water.json.good
            if (good) {
                console.log('Watering was.')
            } else {
                console.log('Plants weren\'t watering')
            }
        }
    })
});

