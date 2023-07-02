const frisby = require("frisby");

// frisby.globalSetup({
//     request: {
//         timeout: 100000,
//     },
// });


it('Fork a collection', function () {
    return frisby
        .post('https://postman-echo.com/post')
        .expect('status', 200)
        .expect('header', "Content-Type", "application/json; charset=utf-8")
});


it('User agent is correct', function () {
    return frisby
        .get('https://postman-echo.com/get?user-agent="PostmanRuntime/7.32.3')
        .expect('json', 'args', {"user-agent":"\"PostmanRuntime/7.32.3"});
});
