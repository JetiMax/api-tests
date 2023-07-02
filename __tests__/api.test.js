const frisby = require("frisby");
const Joi = frisby.Joi;

frisby.globalSetup({
    request: {
        timeout: 100000,
    },
});

describe("Test Case 1", () => { 
    it ('should return a list of feed items', function () {
        return frisby
            .get('https://www.jsonfeed.org/feed.json')
            .expect('status', 200)
            .expect('json', 'title', 'JSON Feed')
            .expect('jsonTypes', 'items.*', { 
                'id': Joi.string().required(),
                'url': Joi.string()
                    .uri()
                    .required(),
                'title': Joi.string().required(),
                'date_published': Joi.date()
                    .iso()
                    .required(),
              });
          });
    });


describe("Test Case 00", () => { 
    it ('must return the status 200', function () {
        return frisby
            .post('https://postman-echo.com/post?set_start_day=August 19, 2022')
            .expect('status', 200)
        });
    });;

describe("Day 01: Fork a collection", () => { 
    it ('Fork a collection', function () {
        return frisby
        .post('https://postman-echo.com/post')
                        .expect('status', 200)
                        .expect('header', "Content-Type", "application/json; charset=utf-8")
                        });
                });

describe("Day 01: Fork a collection", () => { 
    it ('Submit your solution', function () {
        return frisby
        .get('https://postman-echo.com/get?user-agent="user-agent": "PostmanRuntime/7.32.3"')
                        .expect('status', 200)
                        .then(function(res){
                            var data = JSON.parse(res['_body']);
                            console.log(data.res[0]['args']['user-agent']['PostmanRuntime/']);
                            expect(data.res[0]['args']['user-agent']).toBe('PostmanRuntime/') ;
                    });
                });
            });


describe(" Day 8: Run a collection", () => { 
    it ('get random user', function () {
        return frisby
        .get('https://randomuser.me/api')
        .expect('status', 200)
        .then(function(res){
            var data = JSON.parse(res['_body']);
            console.log(data.results[0]['gender']['female']&['male']);
            expect(data.results[0]['gender']).toBe('female')&('male') ;
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

describe(" Day 8: Run a collection", () => { 
    it ('get french user', function ()  { 
        return frisby
        .get('https://randomuser.me/api/?gender=female&result=1')
        .expect('status', 200)
        .then(function(res){
            var data = JSON.parse(res['_body']);
            console.log(data.results[0]['country']['France']);
            expect(data.results[0]['country']).toBe('France');
        
        })       
    });
});