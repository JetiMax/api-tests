const frisby = require("frisby");
const url = 'https://www.google.com/maps'

frisby.globalSetup({
    request: {
        timeout: 100000,
    },
});

describe("Day28", () => {
    it('responce time', function () {
        return frisby
            .get(`${url}`)
            .expect("status", 200)
            .then((result) => {
                expect(result['_responseTimeMs']).toBeLessThanOrEqual(1000)
            })
    })
})

    it('lighthouse', function () {
        return frisby
            .get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}`)
            .expect("status", 200)
            .then((lighthouse)=> {
                let score = lighthouse.json.lighthouseResult.audits['total-byte-weight']
                expect(score).toBeGreaterThanOrEqual(0.90)
            })

    });