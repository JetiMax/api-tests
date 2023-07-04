
const frisby = require("frisby");
const fs = require("fs");
const path = require("path");

describe("Day 23", () => {
    jest.setTimeout(100000);
    it("boba", async () => {
        const filePath = path.join(__dirname, "..", "geoMap.csv");
        const fileData = fs.readFileSync(filePath, "utf8");
        const rows = fileData.split("\n");
        console.log(rows);

        for (let i = 1; i < rows.length; i++) {
            const [region, boba] = rows[i].split(",");
            const response = await frisby.get(`https://postman-echo.com/get?${region}=${boba}`);
        }
    });
});