const frisby = require('frisby');
const BASE_URL = "https://joyce-spotify-graphql.herokuapp.com"

describe('Postman API: Day 19', () => {
    it('spotify', function () {
        let query = {
            "query":"query getByArtist($name: String!) {\n" +
                "    queryArtists (byName: $name) {\n" +
                "        name\n" +
                "        image\n" +
                "        albums {\n" +
                "            name\n" +
                "        }\n" +
                "    }\n" +
                "}",
            "name": "getByArtist",
            "variables": {"name":"Britney Spears"}
        }
        return frisby.post(`${BASE_URL}/graphql`, {headers: {"Content-Type": "application/json"},
            body: query})
            .expect('status', 200)
            .then((result) => {
                let jsonData = result.json.data.queryArtists[0]
                    expect(jsonData.name).toBe('Britney Spears')

            })
    });
})