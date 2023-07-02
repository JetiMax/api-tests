const frisby = require("frisby");
const TOKEN = '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'


describe('Day14', () => {
    it("Git_OAuth", function () {
        return frisby
            .get(`https://api.github.com/user/repos`, {
                headers: {
                    Authorization:`Bearer ${TOKEN}`
                }})
            .expect("status", 200)
            .then((result) => console.info(result.json));
    })
});

