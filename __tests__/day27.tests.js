const frisby = require("frisby");
const {timeout} = require("frisby");
const BaseUrl = "http://security.postman-breakable.com"
const host = "http://security.postman-breakable.com"
const user_id = 'bf2d44c6-eaed-4118-961b-c67e4dc3409e'
// const NewUser = {'username':'Lee', 'password':'1569'}

frisby.globalSetup({
    request: {
        timeout: 10000,
    },
});
describe("Day27", () => {
    const  newUser = {
        username:'Lee',
        password:'Leem'
    }
    it('Creat User', function () {
        return frisby
            .post(`${BaseUrl}/user/login`)
            .expect("status", 200)
    })

    it('User Info', function () {
        return frisby
            .get(`${BaseUrl}/user`)
            .expect("status", 200)
})
    it('Account summary\n', function () {
        return frisby
            .get(`${host}/account/${user_id}/summary`)
            .expect("status", 403)
            .then((result) => console.log(result))
    })

    it('User Logout', function () {
        return frisby
            .get(`${host}/user/logout`)
            .expect("status", 200)

    })

    it('Account summary', function () {
        return frisby
            .get(`${host}/account/${user_id}/summary`)
            .expect("status", 403)

    })
});