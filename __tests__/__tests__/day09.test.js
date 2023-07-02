const frisby = require("frisby");
const Joi = frisby.Joi;

frisby.globalSetup({
    request: {
        timeout: 10000,
    },
});

describe("Day9", () =>{
    it("day09", async function () {
        const userResult = await frisby
            .get("https://randomuser.me/api")
            .expect("status", 200);

        const user = userResult.json.results[0];
        const userFullname = `${user.name.title} ${user.name.first} ${
            user.name.last
        }`;
        const echoResult = await frisby
            .post("https://postman-echo.com/post",{
                name: userFullname,
                email: user.email,
                id: user.login.uuid,
            })
            .expect("status", 200)
            .expect("json", "json.name", userFullname)
            .expect("json", "json.email", user.email)
            .expect("json", "json.id", user.login.uuid);
        console.log(echoResult.json);
    });
});