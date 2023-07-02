const frisby = require("frisby");
describe(" Day 8: Run a collection", () => {
    it ('get random user', function () {
        return frisby
            .get('https://randomuser.me/api')
            .expect('status', 200)
            .then(function(res){
                var data = JSON.parse(res['_body']);
                console.log(data.results[0]['gender']['female']||['male']);
                expect(data.results[0]['gender']).toBe('female')||('male') ;
            })
    });
});

describe(" Day 8: Run a collection", () => {
    it ('get female user', function () {
        return frisby
            .get('https://randomuser.me/api/?gender=female&result=1')
            .expect('status', 200)
            .then(function(res){
                var data = JSON.parse(res['_body']);
                console.log(data.results[0]['gender']['female']);
                expect(data.results[0]['gender']).toBe('female');
            })
    });
});


it ('get french user', function () {
    return frisby
        .get('https://randomuser.me/api/?nationality=FR&result=1&gender=female')
        .expect('status', 200)
        .expect("json", {
            args: {
                country: "France"
            }
        });
});

