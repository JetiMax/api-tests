const frisby = require('frisby')
const Joi = frisby.Joi;

frisby.globalSetup({
    request: {
        timeout: 10000,
    },
});

it('Call the mock', function () {
    return frisby
        .get('https://a21b50e5-eaf5-447d-8cb8-137e84cb8fbe.mock.pstmn.io')
        .expect('status', 200 )
        .expect('header', 'Content-Type', 'application/json; charset=utf-8')
        .then((result) => {
            console.info(result.json)
    })
})

