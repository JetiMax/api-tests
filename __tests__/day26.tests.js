const frisby = require("frisby");
const query = '?p=postman'
describe("Day26", () => {
    it('bing', function () {
        return frisby
            .get(`https://www.bing.com/search${query}`)
            .expect("status", 200)
            .then((result) => console.log(result))

    })
});


