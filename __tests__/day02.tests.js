const frisby = require("frisby");

it('Status & data', function () {
    return frisby
    .post('https://postman-echo.com/post', {
        payload: "Raw text" ,
    })
    .expect("status", 200)
    .expect("json", {
    data:{
    payload: "Raw text",
    }
    });
   });

it('Query params', function () {
    return frisby
        .get('https://postman-echo.com/get?foo=foo1&bar=bar2')
        .expect("status", 200)
        .expect("json", {
            args: {
                foo: "foo1",
                bar: "bar2"
            }
        });
});
