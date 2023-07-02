const frisby = require("frisby");
var CONSTS = {
    server: 'http://localhost:3000/launches',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

describe('Day15', () => {
    it("spacex", function () {
        return frisby
            .get('https://api.spacexdata.com/v4/launches/latest',CONSTS.server + '/isAlive', {headers: CONSTS.headers}, {json: true})
            .timeout(1)
            .expect ("status", 200)



    })
});

