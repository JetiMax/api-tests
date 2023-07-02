const frisby = require("frisby");
const Joi = frisby.Joi;


it('raw JSON body', function () {
    return frisby
     .post("https://postman-echo.com/post",{data:"doodles"})
     .expect("status", 200)
     .expect("json", "data", {
         data: "doodles",
        })
     .then((result) => console.log(result.json));
});



