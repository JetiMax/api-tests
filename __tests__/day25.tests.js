const frisby = require("frisby");
const payload = {
    hex: "#170d58",
    rgb: "rgb(23, 13, 88)",
    name: "Violent Violet"
}
describe("Day25", () => {
    it('color', function () {
        return frisby
            .post('https://postman-echo.com/post', payload)
            .expect('status', 200)
            .expect('jsonTypes', {
                "data:": "{" +
                    " hex: '#170d58', " +
                    "rgb: 'rgb(23, 13, 88)'," +
                    " name: 'Violent Violet' }"
            })
            .then((result) => console.log(result.json))
    })
});