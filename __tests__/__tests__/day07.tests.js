const frisby = require('frisby');
const Joi = frisby.Joi;




 it('Day7', async () => {
     const result = await frisby
         .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10')
         .expect('status', 200)
         .expect('header', 'Content-Type', 'application/json')
 });

